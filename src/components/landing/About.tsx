import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="relative">
            <img
              src={siteConfig.about.image}
              alt="Who we are"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              {siteConfig.about.title}
            </h2>
            {siteConfig.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <Button
              variant="link"
              className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group"
              onClick={() => handleScroll("#services")}
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
