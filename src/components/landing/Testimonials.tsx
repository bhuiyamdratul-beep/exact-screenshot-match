import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const platforms = ["Upwork", "Fiverr", "Google", "Trustpilot"];

interface TestimonialCard {
  project: string;
  rating: number;
  dateRange: string;
  content: string;
  clientName: string;
  price: string;
  priceType: string;
}

const testimonialCards: Record<string, TestimonialCard[]> = {
  Upwork: [
    {
      project: "Squeeze page on GHL",
      rating: 5,
      dateRange: "Mar 19, 2024 - Apr 2, 2024",
      content: "Md Ahoshan Hasan Ratul was great to work with and went above and beyond to make sure the project was the best it could be. He had great ideas which he included and implemented in the offer and was also attentive to every detail. Highly recommend!",
      clientName: "Client",
      price: "$30.00",
      priceType: "Fixed price",
    },
    {
      project: "Connect Domain to Go High Level; add (2) documents for email automation",
      rating: 5,
      dateRange: "Jul 16, 2024 - Jul 18, 2024",
      content: "Md Ahoshan Hasan Ratul completed my Go High Level work quickly and answered communication in a timely manner. He is very knowledgeable and was able to make changes as requested. He went above and beyond to get the work done right. I will work with him again and would highly recommend!",
      clientName: "Client",
      price: "$38.33",
      priceType: "$20.00 /hr · 2 hours",
    },
  ],
};

const testimonialImages: Record<string, string[]> = {
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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
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
          className="flex justify-center gap-3 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platforms.map((platform) => (
            <motion.button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === platform
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {platform}
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex justify-center gap-6 flex-wrap max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Text-based cards */}
            {testimonialCards[activeTab]?.map((item, index) => (
              <motion.div
                key={`card-${index}`}
                className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.project}</h3>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <div className="flex">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.rating}.00</span>
                  <span className="text-sm text-muted-foreground">{item.dateRange}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{item.content}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm font-semibold text-foreground">{item.price}</span>
                  <span className="text-sm text-muted-foreground">{item.priceType}</span>
                </div>
              </motion.div>
            ))}

            {/* Image-based testimonials */}
            {testimonialImages[activeTab]?.map((image, index) => (
              <motion.div
                key={`img-${index}`}
                className="rounded-2xl overflow-hidden border border-border shadow-xl max-w-md bg-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
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
