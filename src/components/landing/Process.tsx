import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";

const Process = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Our Work Process
          </h2>
        </div>

        {/* Process Steps */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.process.map((step, index) => (
            <div
              key={step.step}
              className={`text-center ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms`, transition: "all 0.5s ease" }}
            >
              <div className="step-number mx-auto mb-4">{step.step}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
