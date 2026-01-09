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
];

const PlatformLogos = () => {
  // Double the logos for seamless infinite scroll
  const logos = [...siteConfig.platforms, ...siteConfig.platforms];

  return (
    <section className="py-12 bg-background overflow-hidden">
      {/* Platform Logos Marquee with Diagonal White Strip */}
      <div className="relative py-8 mb-16">
        {/* Diagonal White Background */}
        <div 
          className="absolute inset-0 bg-white"
          style={{ 
            transform: "skewY(-3deg)",
            transformOrigin: "center"
          }}
        />
        
        {/* Top Row */}
        <div className="relative z-10 mb-4">
          <div className="flex animate-marquee">
            {logos.map((logo, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 mx-6 w-28 h-12 flex items-center justify-center"
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

        {/* Bottom Row - Reverse Direction */}
        <div className="relative z-10">
          <div className="flex animate-marquee" style={{ animationDirection: "reverse" }}>
            {logos.map((logo, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 mx-6 w-28 h-12 flex items-center justify-center"
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
      </div>

      {/* Platform Selection Section */}
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground italic leading-tight">
              We Help You Choose The Best Platform fit To Your Requirements And Budget
            </h2>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              There are so many platforms and tools out there that the technical side of things can easily become overwhelming and very often cost you a lot of money and stress.
            </p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Let us do a full assessment of your needs and propose what is best for you. We are Your Funnel Team and can handle all that scary stuff.
            </p>
            <p className="text-foreground font-bold text-lg italic">
              You can relax now, you found us!
            </p>
          </motion.div>

          {/* Right - Tech Grid 6x3 */}
          <motion.div 
            className="card-dark p-8 rounded-3xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-6 gap-4">
              {techIcons.map((icon, index) => (
                <motion.div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <img 
                    src={icon} 
                    alt="Tech icon" 
                    className="w-10 h-10 object-contain cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformLogos;
