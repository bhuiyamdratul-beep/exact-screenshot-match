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
    {
      project: "Python Automation Script for Data Processing",
      rating: 5,
      dateRange: "Sep 5, 2024 - Sep 12, 2024",
      content: "Ratul built an amazing Python automation script that saved us hours of manual work every week. His understanding of data processing and API integrations is top-notch. Delivered ahead of schedule with clean, well-documented code. Will definitely hire again!",
      clientName: "Client",
      price: "$150.00",
      priceType: "Fixed price",
    },
    {
      project: "Digital Marketing Campaign Setup & Management",
      rating: 5,
      dateRange: "Oct 1, 2024 - Nov 15, 2024",
      content: "TechWeb Ninja team handled our entire digital marketing strategy including Facebook Ads, Google Ads, and SEO. Within 2 months, our leads increased by 300%. They are incredibly data-driven and transparent with reporting. Exceptional work!",
      clientName: "Client",
      price: "$500.00",
      priceType: "$25.00 /hr · 20 hours",
    },
    {
      project: "Full Stack Web Application Development",
      rating: 5,
      dateRange: "Aug 10, 2024 - Oct 5, 2024",
      content: "Hired Ratul's team for a complex web application with React frontend and Node.js backend. They delivered a polished, scalable product with excellent UI/UX. Communication was outstanding throughout the project. Highly skilled team!",
      clientName: "Client",
      price: "$1,200.00",
      priceType: "Fixed price",
    },
  ],
  Fiverr: [
    {
      project: "Python Web Scraping Bot",
      rating: 5,
      dateRange: "Jun 12, 2024 - Jun 18, 2024",
      content: "Excellent Python developer! Built a custom web scraping tool that extracts data from multiple sources and exports to Excel. Fast delivery, clean code, and great communication. 100% recommended!",
      clientName: "buyer_tech2024",
      price: "$85.00",
      priceType: "Fixed price",
    },
    {
      project: "Social Media Marketing & Content Strategy",
      rating: 5,
      dateRange: "Jul 20, 2024 - Aug 20, 2024",
      content: "TechWeb Ninja created a comprehensive social media strategy for our brand. They managed our Instagram, Facebook, and LinkedIn accounts. Engagement went up 250% in just one month. Amazing results and very professional team!",
      clientName: "brand_owner_uk",
      price: "$350.00",
      priceType: "Fixed price",
    },
    {
      project: "SEO Optimization & Google Ranking",
      rating: 5,
      dateRange: "May 5, 2024 - Jun 5, 2024",
      content: "They optimized our website for SEO and within 4 weeks we were ranking on the first page for our target keywords. Very knowledgeable about on-page and off-page SEO techniques. Great value for money!",
      clientName: "ecom_seller_us",
      price: "$200.00",
      priceType: "Fixed price",
    },
  ],
  Google: [
    {
      project: "Website Development & Digital Marketing",
      rating: 5,
      dateRange: "2024",
      content: "TechWeb Ninja built our company website and handled our Google Ads campaigns. The website is fast, modern, and mobile-friendly. Our Google Ads ROI improved by 400%. Truly a one-stop solution for all digital needs!",
      clientName: "Rahman Enterprise",
      price: "",
      priceType: "",
    },
    {
      project: "E-commerce Store with Python Backend",
      rating: 5,
      dateRange: "2024",
      content: "They developed our e-commerce platform with a Python Django backend and integrated payment gateways. The site handles thousands of daily visitors without any issues. Professional, reliable, and highly skilled team!",
      clientName: "ShopBD Online",
      price: "",
      priceType: "",
    },
    {
      project: "Facebook & Instagram Ads Management",
      rating: 5,
      dateRange: "2024",
      content: "Best digital marketing agency we've worked with! They managed our Facebook and Instagram ad campaigns and reduced our cost per lead by 60%. Their targeting strategy and creative designs are outstanding.",
      clientName: "GreenLeaf Organics",
      price: "",
      priceType: "",
    },
  ],
  Trustpilot: [
    {
      project: "Custom CRM Development",
      rating: 5,
      dateRange: "2024",
      content: "TechWeb Ninja developed a custom CRM system for our sales team. It integrates with WhatsApp, email, and our existing tools. The Python-based backend is robust and the React frontend is incredibly intuitive. Saved us thousands compared to off-the-shelf solutions!",
      clientName: "Alex M.",
      price: "",
      priceType: "",
    },
    {
      project: "Complete Digital Marketing Package",
      rating: 5,
      dateRange: "2024",
      content: "We hired them for a complete digital marketing overhaul — SEO, PPC, social media, and email marketing. Every aspect was handled professionally. Our online visibility has never been better. They truly understand the digital landscape!",
      clientName: "Sarah K.",
      price: "",
      priceType: "",
    },
    {
      project: "AI Chatbot & Automation",
      rating: 5,
      dateRange: "2024",
      content: "Ratul and his team built an AI-powered chatbot for our customer service using Python and integrated it with our website. It handles 70% of queries automatically now. Brilliant work and ongoing support is excellent!",
      clientName: "David Chen",
      price: "",
      priceType: "",
    },
  ],
};

const testimonialImages: Record<string, string[]> = {};

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
                {(item.price || item.clientName) && (
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    {item.price ? (
                      <>
                        <span className="text-sm font-semibold text-foreground">{item.price}</span>
                        <span className="text-sm text-muted-foreground">{item.priceType}</span>
                      </>
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">— {item.clientName}</span>
                    )}
                  </div>
                )}
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
