import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const Process = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 border-2 border-primary/20 rounded-full -ml-12" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 border-2 border-primary/20 rounded-full -mr-12" />
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Our Work Process
          </h2>
        </div>

        {/* Process Steps */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.process.map((step, index) => (
            <div
              key={step.step}
              className={`relative ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms`, transition: "all 0.5s ease" }}
            >
              <div className="card-dark p-6 h-full">
                {/* Step number with title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-background flex items-center justify-center text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              
              {/* Arrow between cards */}
              {index < siteConfig.process.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
