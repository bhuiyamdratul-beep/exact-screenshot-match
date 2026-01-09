import { siteConfig } from "@/config/siteConfig";

const PlatformLogos = () => {
  // Double the logos for seamless infinite scroll
  const logos = [...siteConfig.platforms, ...siteConfig.platforms];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={logo}
                alt="Platform logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformLogos;
