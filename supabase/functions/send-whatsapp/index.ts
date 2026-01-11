import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WhatsAppRequest {
  recipientPhone: string
  message: string
  messageType?: 'text' | 'template'
  templateName?: string
  templateParams?: string[]
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get WhatsApp config from database
    const { data: config, error: configError } = await supabase
      .from('whatsapp_config')
      .select('*')
      .limit(1)
      .maybeSingle()

    if (configError || !config) {
      console.error('WhatsApp config error:', configError)
      return new Response(
        JSON.stringify({ error: 'WhatsApp not configured. Please add your credentials.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { recipientPhone, message, messageType = 'text' }: WhatsAppRequest = await req.json()

    if (!recipientPhone || !message) {
      return new Response(
        JSON.stringify({ error: 'recipientPhone and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Clean phone number (remove + and spaces)
    const cleanPhone = recipientPhone.replace(/[\s+\-()]/g, '')

    console.log(`Sending WhatsApp message to ${cleanPhone}`)

    // Send message via WhatsApp Business API
    const whatsappResponse = await fetch(
      `https://graph.facebook.com/v18.0/${config.phone_number_id}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: cleanPhone,
          type: messageType,
          text: messageType === 'text' ? { body: message } : undefined,
        }),
      }
    )

    const whatsappData = await whatsappResponse.json()
    console.log('WhatsApp API response:', JSON.stringify(whatsappData))

    // Log the message
    const { error: logError } = await supabase
      .from('whatsapp_messages')
      .insert({
        recipient_phone: cleanPhone,
        message_content: message,
        message_type: messageType,
        status: whatsappResponse.ok ? 'sent' : 'failed',
        whatsapp_message_id: whatsappData.messages?.[0]?.id || null,
        error_message: whatsappResponse.ok ? null : JSON.stringify(whatsappData.error),
      })

    if (logError) {
      console.error('Failed to log message:', logError)
    }

    if (!whatsappResponse.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to send WhatsApp message', details: whatsappData }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, messageId: whatsappData.messages?.[0]?.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})