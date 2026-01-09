import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PlatformLogos = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  // Double the logos for seamless infinite scroll
  const logos = [...siteConfig.platforms, ...siteConfig.platforms];

  return (
    <section className="py-12 bg-background overflow-hidden">
      {/* Platform Logos Marquee - Top */}
      <div className="relative mb-16">
        <div className="flex animate-marquee">
          {logos.map((logo, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 mx-6 w-28 h-14 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Platform logo"
                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              We Help You Choose The Best Platform fit To Your Requirements And Budget
            </h2>
            <p className="text-muted-foreground mb-4">
              There are so many platforms and tools out there that the technical side of things can easily become overwhelming and very often cost you a lot of money and stress.
            </p>
            <p className="text-muted-foreground mb-6">
              Let us do a full assessment of your needs and propose what is best for you. We are Your Funnel Team and can handle all that scary stuff.
            </p>
            <p className="text-foreground font-semibold text-lg">
              You can relax now, you found us!
            </p>
          </div>

          {/* Right - Tech Grid */}
          <div className="card-dark p-6 rounded-2xl">
            <div className="grid grid-cols-5 gap-4">
              {/* Technology icons grid */}
              {[
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center hover:bg-secondary/50 transition-colors"
                >
                  <img src={icon} alt="Tech icon" className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Logos Marquee - Bottom (reverse direction) */}
      <div className="relative mt-16">
        <div className="flex animate-marquee" style={{ animationDirection: "reverse" }}>
          {logos.map((logo, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 mx-6 w-28 h-14 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Platform logo"
                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformLogos;
