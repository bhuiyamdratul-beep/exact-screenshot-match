import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    { project: "Squeeze page on GHL", rating: 5, dateRange: "Mar 19, 2024 - Apr 2, 2024", content: "Md Ahoshan Hasan Ratul was great to work with and went above and beyond to make sure the project was the best it could be. He had great ideas which he included and implemented in the offer and was also attentive to every detail. Highly recommend!", clientName: "Client", price: "$30.00", priceType: "Fixed price" },
    { project: "Connect Domain to Go High Level", rating: 5, dateRange: "Jul 16, 2024 - Jul 18, 2024", content: "Md Ahoshan Hasan Ratul completed my Go High Level work quickly and answered communication in a timely manner. He is very knowledgeable and was able to make changes as requested. He went above and beyond to get the work done right. I will work with him again and would highly recommend!", clientName: "Client", price: "$38.33", priceType: "$20.00 /hr · 2 hours" },
    { project: "Python Automation Script for Data Processing", rating: 5, dateRange: "Sep 5, 2024 - Sep 12, 2024", content: "Ratul built an amazing Python automation script that saved us hours of manual work every week. His understanding of data processing and API integrations is top-notch. Delivered ahead of schedule with clean, well-documented code. Will definitely hire again!", clientName: "Client", price: "$150.00", priceType: "Fixed price" },
    { project: "Digital Marketing Campaign Setup & Management", rating: 5, dateRange: "Oct 1, 2024 - Nov 15, 2024", content: "TechWeb Ninja team handled our entire digital marketing strategy including Facebook Ads, Google Ads, and SEO. Within 2 months, our leads increased by 300%. They are incredibly data-driven and transparent with reporting. Exceptional work!", clientName: "Client", price: "$500.00", priceType: "$25.00 /hr · 20 hours" },
    { project: "Full Stack Web Application Development", rating: 5, dateRange: "Aug 10, 2024 - Oct 5, 2024", content: "Hired Ratul's team for a complex web application with React frontend and Node.js backend. They delivered a polished, scalable product with excellent UI/UX. Communication was outstanding throughout the project. Highly skilled team!", clientName: "Client", price: "$1,200.00", priceType: "Fixed price" },
  ],
  Fiverr: [
    { project: "Python Web Scraping Bot", rating: 5, dateRange: "Jun 12, 2024 - Jun 18, 2024", content: "Excellent Python developer! Built a custom web scraping tool that extracts data from multiple sources and exports to Excel. Fast delivery, clean code, and great communication. 100% recommended!", clientName: "buyer_tech2024", price: "$85.00", priceType: "Fixed price" },
    { project: "Social Media Marketing & Content Strategy", rating: 5, dateRange: "Jul 20, 2024 - Aug 20, 2024", content: "TechWeb Ninja created a comprehensive social media strategy for our brand. They managed our Instagram, Facebook, and LinkedIn accounts. Engagement went up 250% in just one month. Amazing results and very professional team!", clientName: "brand_owner_uk", price: "$350.00", priceType: "Fixed price" },
    { project: "SEO Optimization & Google Ranking", rating: 5, dateRange: "May 5, 2024 - Jun 5, 2024", content: "They optimized our website for SEO and within 4 weeks we were ranking on the first page for our target keywords. Very knowledgeable about on-page and off-page SEO techniques. Great value for money!", clientName: "ecom_seller_us", price: "$200.00", priceType: "Fixed price" },
  ],
  Google: [
    { project: "Website Development & Digital Marketing", rating: 5, dateRange: "2024", content: "TechWeb Ninja built our company website and handled our Google Ads campaigns. The website is fast, modern, and mobile-friendly. Our Google Ads ROI improved by 400%. Truly a one-stop solution for all digital needs!", clientName: "Rahman Enterprise", price: "", priceType: "" },
    { project: "E-commerce Store with Python Backend", rating: 5, dateRange: "2024", content: "They developed our e-commerce platform with a Python Django backend and integrated payment gateways. The site handles thousands of daily visitors without any issues. Professional, reliable, and highly skilled team!", clientName: "ShopBD Online", price: "", priceType: "" },
    { project: "Facebook & Instagram Ads Management", rating: 5, dateRange: "2024", content: "Best digital marketing agency we've worked with! They managed our Facebook and Instagram ad campaigns and reduced our cost per lead by 60%. Their targeting strategy and creative designs are outstanding.", clientName: "GreenLeaf Organics", price: "", priceType: "" },
  ],
  Trustpilot: [
    { project: "Custom CRM Development", rating: 5, dateRange: "2024", content: "TechWeb Ninja developed a custom CRM system for our sales team. It integrates with WhatsApp, email, and our existing tools. The Python-based backend is robust and the React frontend is incredibly intuitive. Saved us thousands compared to off-the-shelf solutions!", clientName: "Alex M.", price: "", priceType: "" },
    { project: "Complete Digital Marketing Package", rating: 5, dateRange: "2024", content: "We hired them for a complete digital marketing overhaul — SEO, PPC, social media, and email marketing. Every aspect was handled professionally. Our online visibility has never been better. They truly understand the digital landscape!", clientName: "Sarah K.", price: "", priceType: "" },
    { project: "AI Chatbot & Automation", rating: 5, dateRange: "2024", content: "Ratul and his team built an AI-powered chatbot for our customer service using Python and integrated it with our website. It handles 70% of queries automatically now. Brilliant work and ongoing support is excellent!", clientName: "David Chen", price: "", priceType: "" },
  ],
};

const Card3D = ({ item, index }: { item: TestimonialCard; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -20);
    setRotateY((x - 0.5) * 20);
    setGlareX(x * 100);
    setGlareY(y * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-lg"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <motion.div
        className="relative rounded-2xl border border-border/50 p-6 cursor-default overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
          background: "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.8) 100%)",
          boxShadow: `
            0 20px 60px -15px hsl(var(--primary) / 0.15),
            0 10px 30px -10px hsl(var(--foreground) / 0.08),
            inset 0 1px 0 hsl(var(--foreground) / 0.05)
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glare effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.07] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, hsl(var(--foreground)), transparent 60%)`,
          }}
        />

        {/* Floating quote icon */}
        <div
          className="absolute -top-2 -right-2 opacity-[0.06]"
          style={{ transform: "translateZ(30px)" }}
        >
          <Quote className="h-24 w-24 text-primary" />
        </div>

        {/* Content */}
        <div style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
            {item.project}
          </h3>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <div className="flex gap-0.5">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">{item.rating}.00</span>
            <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
              {item.dateRange}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-4">
            "{item.content}"
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            {item.price ? (
              <>
                <span className="text-base font-bold text-foreground">{item.price}</span>
                <span className="text-xs text-muted-foreground bg-muted/40 px-3 py-1 rounded-full">
                  {item.priceType}
                </span>
              </>
            ) : (
              <span className="text-sm font-medium text-muted-foreground">— {item.clientName}</span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("Upwork");

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block text-sm font-medium text-primary mb-3 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Client Reviews
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Testimonials From Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Recent Clients
            </span>
          </h2>
        </motion.div>

        {/* Platform Tabs */}
        <motion.div
          className="flex justify-center gap-2 sm:gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platforms.map((platform) => (
            <motion.button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === platform
                  ? "text-primary-foreground"
                  : "bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === platform && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/30"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{platform}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {testimonialCards[activeTab]?.map((item, index) => (
              <Card3D key={`${activeTab}-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
