import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">About Us</h2>
          <p className="text-lg text-muted-foreground">{siteConfig.company.description}</p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">
              {siteConfig.about.title}
            </h3>
            {siteConfig.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8">
              {siteConfig.about.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-3xl sm:text-4xl font-bold gradient-brand mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-foreground">
              Our Expertise
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {siteConfig.about.expertise.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`bg-background p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
