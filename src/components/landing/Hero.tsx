import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg -z-10" />
      <div className="absolute inset-0 gradient-overlay -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block gradient-text animate-fade-in-up">
                {siteConfig.hero.title.line1}
              </span>
              <span className="block animate-fade-in-up-delay-1">
                {siteConfig.hero.title.line2}
              </span>
              <span className="block animate-fade-in-up-delay-2">
                {siteConfig.hero.title.line3}
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 opacity-90 animate-fade-in-up-delay-3">
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
                onClick={() => handleScroll("#contact")}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-semibold"
                onClick={() => handleScroll("#portfolio")}
              >
                View Work
              </Button>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
            {siteConfig.hero.floatingCards.map((card, index) => (
              <div
                key={card.label}
                className={`absolute bg-background/95 backdrop-blur-md p-6 rounded-xl shadow-xl ${
                  index === 0
                    ? "top-[10%] left-[10%] animate-float"
                    : index === 1
                    ? "top-[50%] right-[10%] animate-float-delay-1"
                    : "bottom-[10%] left-[20%] animate-float-delay-2"
                }`}
              >
                <div className="text-4xl mb-2">{card.icon}</div>
                <p className="font-semibold text-foreground">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
