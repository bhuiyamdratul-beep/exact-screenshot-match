import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="card-dark p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-primary/20 rounded-full" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-primary/20 rounded-full" />
          <div className="absolute bottom-16 left-16 w-6 h-6 border-2 border-primary/20 rounded-full" />
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
            {siteConfig.contact.title}
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gradient">
            {siteConfig.contact.subtitle}
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {siteConfig.contact.description}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-10"
            onClick={handleScroll}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
