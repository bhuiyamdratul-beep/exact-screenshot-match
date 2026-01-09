import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";

const Niches = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            We've Worked in Many Niches
          </h2>
        </div>

        {/* Niches Grid */}
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteConfig.niches.map((niche, index) => (
            <div
              key={niche.title}
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms`, transition: "all 0.5s ease" }}
            >
              <img
                src={niche.image}
                alt={niche.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-semibold text-foreground">{niche.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Niches;
