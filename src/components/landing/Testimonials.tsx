import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeTab, setActiveTab] = useState("Upwork");

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Testimonials From Our Recent Clients
          </h2>
        </motion.div>

        {/* Platform Tabs */}
        <motion.div 
          className="flex justify-center gap-2 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platforms.map((platform) => (
            <motion.button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === platform
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {platform}
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonial Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex justify-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {testimonialImages[activeTab]?.map((image, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <img
                  src={image}
                  alt={`${activeTab} review ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
