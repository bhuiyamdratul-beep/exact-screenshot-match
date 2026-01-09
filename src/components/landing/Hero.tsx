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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Decorative Ring */}
      <div className="hero-ring" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-foreground animate-fade-in-up">
                {siteConfig.hero.title.line1}
              </span>
              <span className="block text-gradient animate-fade-in-up-delay-1">
                {siteConfig.hero.title.line2}
              </span>
              <span className="block text-gradient animate-fade-in-up-delay-2">
                {siteConfig.hero.title.line3}
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed animate-fade-in-up-delay-3">
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
                onClick={() => handleScroll("#contact")}
              >
                {siteConfig.hero.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border text-foreground bg-transparent hover:bg-muted font-semibold rounded-full px-8"
                onClick={() => handleScroll("#portfolio")}
              >
                {siteConfig.hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:flex justify-center items-center">
            <img
              src={siteConfig.hero.heroImage}
              alt="Programming illustration"
              className="w-full max-w-lg animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
