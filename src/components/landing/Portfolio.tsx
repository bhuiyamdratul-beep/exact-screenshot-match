import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Projects We've Recently Delivered
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.portfolio.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl card-dark ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms`, transition: "all 0.5s ease" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            See more Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
