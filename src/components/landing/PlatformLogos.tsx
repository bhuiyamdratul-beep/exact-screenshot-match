import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const techIcons = [
  // Row 1
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  // Row 2
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  // Row 3
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
];

const PlatformLogos = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
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
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground italic">
              We Help You Choose The Best Platform fit To Your Requirements And Budget
            </h2>
            <p className="text-muted-foreground mb-4 text-sm">
              There are so many platforms and tools out there that the technical side of things can easily become overwhelming and very often cost you a lot of money and stress.
            </p>
            <p className="text-muted-foreground mb-6 text-sm">
              Let us do a full assessment of your needs and propose what is best for you. We are Your Funnel Team and can handle all that scary stuff.
            </p>
            <p className="text-foreground font-bold text-lg">
              You can relax now, you found us!
            </p>
          </div>

          {/* Right - Tech Grid 6x3 */}
          <div className="card-dark p-8 rounded-3xl">
            <div className="grid grid-cols-6 gap-5">
              {techIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img 
                    src={icon} 
                    alt="Tech icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformLogos;
