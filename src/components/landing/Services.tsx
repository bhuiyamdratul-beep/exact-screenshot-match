import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative ellipse */}
      <div className="absolute inset-x-0 bottom-0 h-[600px] pointer-events-none">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[150%] h-full border-2 border-primary/10 rounded-[100%]" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
        </div>

        {/* Services Grid - 3x2 */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.title}
              className={`group card-dark p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Decorative stars */}
        <div className="flex justify-center gap-2 mb-8">
          <span className="text-primary text-2xl">✦</span>
          <span className="text-primary text-2xl">✦</span>
          <span className="text-primary text-2xl">✦</span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
          >
            <Link to="/#contact" className="inline-flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
