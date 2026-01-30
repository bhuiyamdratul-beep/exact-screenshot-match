import { useState } from "react";
import { z } from "zod";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logoD from "@/assets/logo-d.png";
import { 
  Home,
  Briefcase, 
  FolderOpen, 
  Info, 
  FileText, 
  Phone,
  Mail,
  MapPin,
  Loader2
} from "lucide-react";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255, "Email is too long");

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    
    // Validate email with zod
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setEmailError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
        body: { email },
      });

      if (error) throw error;

      toast({
        title: "Subscribed! 🎉",
        description: data.message || "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    } catch (error: any) {
      console.error("Subscription error:", error);
      const errorMessage = error?.message?.includes("rate limit") 
        ? "Too many attempts. Please try again later."
        : "Something went wrong. Please try again.";
      toast({
        title: "Subscription failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0B0F1A] via-[#131B2E] to-[#1a1f35] border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="container-custom relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoD} alt="Dream It Developer" className="w-10 h-10 drop-shadow-lg rounded-full" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-lg">{siteConfig.company.name}</span>
                <span className="text-xs text-primary">Quality is Our Strength</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {siteConfig.company.tagline}. We help businesses elevate their online presence and drive real growth. Your trusted partner for digital transformation and success.
            </p>
            {/* Trust Badges */}
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-xs">🏆</div>
              <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-xs">🔒</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" />
                  Our Previous Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Our Blogs
                </a>
              </li>
              <li>
                <Link to="/#contact" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Book a Free Call With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">info@dreamitdeveloper.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">Magura Sadar, Magura, PO: 7600, Dhaka, Bangladesh</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    className={`bg-secondary/50 border-border text-sm ${emailError ? "border-destructive" : ""}`}
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isLoading}
                >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
                  </Button>
                </div>
                {emailError && <p className="text-xs text-destructive">{emailError}</p>}
              </form>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">{siteConfig.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/terms-of-service" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
