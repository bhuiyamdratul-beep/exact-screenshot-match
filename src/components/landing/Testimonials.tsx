import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const platforms = ["Upwork", "Fiverr", "Google", "Trustpilot"];

const testimonialImages: Record<string, string[]> = {
  Upwork: [
    "https://www.techwebninja.com/assets/upwork-CXGFjG6I.png",
    "https://www.techwebninja.com/assets/upworkk-BPAyW7qe.png",
  ],
  Fiverr: [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  ],
  Google: [
    "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
  ],
  Trustpilot: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  ],
};

const Testimonials = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("Upwork");

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Testimonials From Our Recent Clients
          </h2>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === platform
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Testimonial Images */}
        <div
          ref={ref}
          className={`flex justify-center gap-6 flex-wrap transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {testimonialImages[activeTab]?.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-md"
            >
              <img
                src={image}
                alt={`${activeTab} review ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
