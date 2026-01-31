import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioDetails = [
  {
    title: "Modern Business Website",
    category: "Web Development",
    description: "A sleek and modern business website with custom animations, responsive design, and optimized performance for a leading tech startup.",
    image: "https://www.techwebninja.com/assets/Home-1-1-B-ONE2xy.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: ["50% increase in lead generation", "3s average page load time", "Mobile-first responsive design"],
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Full-featured e-commerce solution with payment integration, inventory management, and automated order processing for a fashion brand.",
    image: "https://www.techwebninja.com/assets/Homepage-V3-new-edits-1-CcJpCTAV.webp",
    technologies: ["Next.js", "Stripe", "Shopify", "PostgreSQL"],
    results: ["200% increase in online sales", "Automated inventory tracking", "Seamless checkout experience"],
  },
  {
    title: "Corporate Web Solution",
    category: "Web Development",
    description: "Enterprise-grade web application with custom CMS, multi-language support, and advanced analytics dashboard.",
    image: "https://www.techwebninja.com/assets/web1-DqMBi1Q2.png",
    technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    results: ["40% reduction in content update time", "99.9% uptime", "Scalable architecture"],
  },
  {
    title: "AI Customer Support Bot",
    category: "AI Integration",
    description: "Intelligent chatbot powered by GPT-4 with RAG integration for accurate, context-aware customer support responses.",
    image: "https://www.techwebninja.com/assets/ai-C1sOCY56.png",
    technologies: ["OpenAI", "LangChain", "Pinecone", "Python"],
    results: ["70% reduction in support tickets", "24/7 automated support", "95% customer satisfaction"],
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
    image: "https://www.techwebninja.com/assets/app%20developement-COrTuCgL.png",
    technologies: ["React Native", "Firebase", "Node.js", "Plaid"],
    results: ["100K+ downloads", "4.8 star rating", "Bank-grade security"],
  },
  {
    title: "Sales Funnel Automation",
    category: "CRM",
    description: "Complete sales funnel with automated email sequences, lead scoring, and CRM integration for a coaching business.",
    image: "https://www.techwebninja.com/assets/funnels-BYr5dGu8.png",
    technologies: ["GoHighLevel", "Zapier", "ActiveCampaign", "ClickFunnels"],
    results: ["300% increase in conversions", "Automated follow-ups", "Integrated payment processing"],
  },
  {
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description: "Intuitive dashboard design for healthcare providers with patient management, scheduling, and analytics.",
    image: "https://www.techwebninja.com/assets/ui%20ux-B0NPQ8RP.png",
    technologies: ["Figma", "React", "D3.js", "Material UI"],
    results: ["60% faster navigation", "Improved user satisfaction", "HIPAA compliant design"],
  },
  {
    title: "Fitness Tracking App",
    category: "App Development",
    description: "Cross-platform fitness app with workout tracking, nutrition logging, and social features.",
    image: "https://www.techwebninja.com/assets/app%20developement-COrTuCgL.png",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    results: ["50K+ active users", "4.7 star rating", "Wearable integration"],
  },
  {
    title: "Luxury Fashion Store",
    category: "Shopify",
    description: "High-end Shopify store with custom theme, advanced product filtering, and seamless checkout experience for a premium fashion brand.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    technologies: ["Shopify", "Liquid", "JavaScript", "Klaviyo"],
    results: ["150% increase in sales", "Custom theme development", "Integrated email marketing"],
  },
  {
    title: "Organic Skincare E-commerce",
    category: "Shopify",
    description: "Beautiful Shopify store for organic skincare products with subscription boxes, loyalty program, and customer reviews integration.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    technologies: ["Shopify Plus", "ReCharge", "Yotpo", "Gorgias"],
    results: ["40% subscription retention", "4.9 customer rating", "Automated fulfillment"],
  },
  {
    title: "Home Decor Marketplace",
    category: "Shopify",
    description: "Multi-vendor Shopify marketplace for artisan home decor with custom vendor dashboard and inventory management.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    technologies: ["Shopify", "Multi-vendor App", "Stripe Connect", "ShipStation"],
    results: ["200+ vendors onboarded", "Cross-border shipping", "Real-time inventory sync"],
  },
  {
    title: "SaaS Growth Campaign",
    category: "Digital Marketing",
    description: "Comprehensive digital marketing campaign for a B2B SaaS company including SEO, PPC, content marketing, and lead nurturing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    technologies: ["Google Ads", "SEMrush", "HubSpot", "LinkedIn Ads"],
    results: ["300% increase in MQLs", "50% lower CAC", "First page rankings for 20+ keywords"],
  },
  {
    title: "Restaurant Chain Social Media",
    category: "Digital Marketing",
    description: "Social media marketing and local SEO strategy for a restaurant chain, including influencer partnerships and user-generated content campaigns.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800",
    technologies: ["Meta Ads", "Google My Business", "Hootsuite", "Canva"],
    results: ["500K+ social reach", "45% increase in foot traffic", "200+ positive reviews"],
  },
  {
    title: "E-commerce Performance Marketing",
    category: "Digital Marketing",
    description: "Full-funnel digital marketing for an e-commerce brand with Facebook/Instagram ads, Google Shopping, and retargeting campaigns.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
    technologies: ["Meta Ads", "Google Shopping", "Criteo", "Triple Whale"],
    results: ["4.5x ROAS", "60% lower CPA", "2M+ monthly impressions"],
  },
];

const categories = ["All", "Web Development", "App Development", "AI Integration", "Shopify", "Digital Marketing", "CRM", "UI/UX Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });

  const filteredProjects = activeCategory === "All" 
    ? portfolioDetails 
    : portfolioDetails.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-custom">
          <div
            ref={headerRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === activeCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <PortfolioCard key={project.title} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Industries We've Worked With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.niches.map((niche) => (
              <div
                key={niche.title}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img
                  src={niche.image}
                  alt={niche.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-semibold text-foreground">{niche.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's work together to bring your vision to life. Get in touch to discuss your project.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const PortfolioCard = ({ project, index }: { project: typeof portfolioDetails[0]; index: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`card-dark overflow-hidden group transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground mb-2">Key Results:</p>
          <ul className="space-y-1">
            {project.results.map((result) => (
              <li key={result} className="text-sm text-foreground flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* View Button */}
        <button className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          View Case Study <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
