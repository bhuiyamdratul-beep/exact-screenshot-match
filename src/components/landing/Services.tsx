import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.title}
              className={`group card-dark p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
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
              <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
