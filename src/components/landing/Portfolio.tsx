import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground">
            Showcasing our best work and successful projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.portfolio.map((project, index) => (
            <div
              key={project.title}
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-300 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 gradient-bg" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-background">{project.title}</h3>
                <p className="text-background/90 mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-background font-semibold hover:text-accent transition-colors">
                  View Project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
