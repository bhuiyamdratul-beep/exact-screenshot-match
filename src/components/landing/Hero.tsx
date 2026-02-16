import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>

      {/* Decorative Ring - large gray circle on left */}
      <motion.div 
        className="hero-ring"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {siteConfig.hero.title.line1}
              </motion.span>
              <motion.span 
                className="block text-gradient"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                {siteConfig.hero.title.line2}
              </motion.span>
              <motion.span 
                className="block text-gradient"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                {siteConfig.hero.title.line3}
              </motion.span>
            </h1>
            <motion.p 
              className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              {siteConfig.hero.subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 hover:scale-105 transition-transform"
                onClick={() => handleScroll("#contact")}
              >
                {siteConfig.hero.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white bg-transparent hover:bg-white/10 font-semibold rounded-full px-8 hover:scale-105 transition-transform"
                onClick={() => handleScroll("#portfolio")}
              >
                {siteConfig.hero.secondaryCta}
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="relative hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.img
              src={siteConfig.hero.heroImage}
              alt="Programming illustration"
              className="w-full max-w-lg drop-shadow-2xl"
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[5]" style={{ background: 'linear-gradient(to top, #0a0a0f, transparent)' }} />
    </section>
  );
};

export default Hero;
