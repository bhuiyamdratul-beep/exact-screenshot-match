import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Facebook, Github, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
  name: string;
  icon?: LucideIcon;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/14V4UgX32io" },
  
  { name: "GitHub", icon: Github, url: "https://github.com/bhuiyamdratul-beep" },
  { name: "Upwork", url: "https://www.upwork.com/freelancers/mdahoshanhasanr?mp_source=share" },
  { name: "Fiverr", url: "https://www.fiverr.com/s/yvQp2D0" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            {siteConfig.contact.title}
          </h2>
          <p className="text-xl text-gradient font-semibold mb-4">
            {siteConfig.contact.subtitle}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.contact.description}
          </p>
        </motion.div>

        {/* Contact Info - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Contact Details Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div 
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
                <div className="flex justify-center gap-2 mt-3">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/8801866366695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                <p className="text-muted-foreground">
                  {siteConfig.contact.address}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links & CTA Card */}
          <motion.div 
            className="card-dark p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3 text-foreground">
              Follow Us & Get Started
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect with us on social media or book a free consultation.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 border border-border/50 hover:border-primary/50"
                    title={social.name}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-5 h-5" />
                    ) : (
                      <span className="text-xs font-bold">
                        {social.name === "Upwork" ? "Up" : "Fi"}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
