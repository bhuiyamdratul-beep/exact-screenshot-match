import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";

const TechStack = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Our Technology Stack
          </h2>
        </div>

        {/* Tech Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {siteConfig.techStack.map((tech, index) => (
            <div
              key={tech.title}
              className={`card-dark p-6 text-center hover:border-primary/50 transition-all duration-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{tech.title}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
