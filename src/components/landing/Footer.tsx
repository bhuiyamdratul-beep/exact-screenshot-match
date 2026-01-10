import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  Briefcase, 
  FolderOpen, 
  Info, 
  FileText, 
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/25">
                D
              </div>
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
                <Link to="/n8n-portfolio" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  n8n Automation Portfolio
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
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary/50 border-border text-sm"
                />
                <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">{siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
