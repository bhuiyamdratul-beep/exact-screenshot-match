import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleScroll = () => {
    // Scroll to top or contact form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="card-dark p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            {siteConfig.contact.title}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">
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
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
