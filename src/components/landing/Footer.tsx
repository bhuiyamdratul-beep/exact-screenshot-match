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
  MapPin,
  Youtube,
  Facebook,
  Instagram,
  Github
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-lg">{siteConfig.company.name}</span>
                <span className="text-xs text-muted-foreground">Quality is Our Strength</span>
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

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
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
