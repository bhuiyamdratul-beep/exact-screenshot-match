import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiter (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS) {
    return true;
  }
  
  record.count++;
  return false;
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Sanitize email input
function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, 255);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    // Check rate limit
    if (isRateLimited(clientIp)) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email: rawEmail } = await req.json();

    if (!rawEmail || typeof rawEmail !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const email = sanitizeEmail(rawEmail);

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save email to newsletter_subscribers table
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });

    if (insertError) {
      // Check if it's a duplicate email error
      if (insertError.code === "23505") {
        return new Response(
          JSON.stringify({ success: true, message: "Already subscribed" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw insertError;
    }

    // Send SMS notification to admin (fire and forget - don't block on failure)
    const smsWebhookUrl = Deno.env.get("SMS_WEBHOOK_URL");
    const adminPhone = Deno.env.get("ADMIN_PHONE_NUMBER");

    if (smsWebhookUrl && adminPhone) {
      const smsMessage = `New Newsletter Subscriber 🚀\n\nEmail: ${email}\nWebsite: dreamitdeveloper.com`;
      
      try {
        // Generic webhook format - adjust based on your SMS provider
        await fetch(smsWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: adminPhone,
            message: smsMessage,
            // Additional fields for common SMS providers
            phone: adminPhone,
            text: smsMessage,
            body: smsMessage,
            recipient: adminPhone,
          }),
        });
        console.log("SMS notification sent successfully");
      } catch (smsError) {
        // Log SMS error but don't fail the subscription
        console.error("SMS notification failed:", smsError);
      }
    } else {
      console.log("SMS not configured - SMS_WEBHOOK_URL or ADMIN_PHONE_NUMBER missing");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
