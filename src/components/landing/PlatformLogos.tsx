import { siteConfig } from "@/config/siteConfig";
import { motion } from "framer-motion";

const techIcons = [
  // Row 1
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  // Row 2
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  // Row 3
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  // Row 4
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
];

const PlatformLogos = () => {
  // Double the logos for seamless infinite scroll
  const logos = [...siteConfig.platforms, ...siteConfig.platforms];

  return (
    <section className="py-12 bg-background overflow-hidden">
      {/* Platform Logos Marquee with Diagonal Premium Strip */}
      <div className="relative py-10 mb-16 overflow-hidden">
        {/* Premium Diagonal Background with Gradient & Texture */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ 
            transform: "skewY(-2.5deg)",
            transformOrigin: "center"
          }}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />
          
          {/* Subtle Noise Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/20" />
        </div>
        
        {/* Logos Container with Mask */}
        <div 
          className="relative z-10"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
          }}
        >
          {/* Top Row */}
          <div className="mb-4 overflow-hidden">
            <div className="flex animate-marquee">
              {logos.map((logo, index) => (
                <motion.div
                  key={`top-${index}`}
                  className="flex-shrink-0 mx-6 w-28 h-12 flex items-center justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <img
                    src={logo}
                    alt="Platform logo"
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Reverse Direction */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee" style={{ animationDirection: "reverse" }}>
              {logos.map((logo, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 mx-6 w-28 h-12 flex items-center justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <img
                    src={logo}
                    alt="Platform logo"
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Selection Section - Dark strip */}
      <div className="bg-[hsl(220,30%,8%)] py-16 px-4">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white italic leading-tight font-serif">
                We Help You Choose The Best Platform fit To Your Requirements And Budget
              </h2>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed max-w-lg">
                There are so many platforms and tools out there that the technical side of things can easily become overwhelming and very often cost you a lot of money and stress.
              </p>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-lg">
                Let us do a full assessment of your needs and propose what is best for you. We are {siteConfig.company.name} and can handle all that scary stuff.
              </p>
              <p className="text-primary font-bold text-lg italic">
                You can relax now, you found us!
              </p>
            </motion.div>

            {/* Right - Tech Grid */}
            <motion.div 
              className="bg-[hsl(220,25%,12%)] p-8 rounded-2xl border border-white/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-6 gap-6">
                {techIcons.map((icon, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 mx-auto flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <img 
                      src={icon} 
                      alt="Tech icon" 
                      className="w-9 h-9 object-contain cursor-pointer"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformLogos;
