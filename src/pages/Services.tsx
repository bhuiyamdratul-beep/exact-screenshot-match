import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceDetails = [
  {
    ...siteConfig.services[0],
    fullDescription: "We create stunning, responsive websites that not only look great but also drive results. Our web development services cover everything from simple landing pages to complex web applications.",
    features: [
      "Custom website design and development",
      "Responsive design for all devices",
      "E-commerce solutions with payment integration",
      "Content Management Systems (WordPress, Webflow)",
      "Performance optimization and SEO",
      "API integrations and third-party services",
    ],
    technologies: ["React", "Next.js", "Vue.js", "WordPress", "Shopify", "Webflow", "Python"],
  },
  {
    ...siteConfig.services[1],
    fullDescription: "Build powerful mobile applications that engage users and drive business growth. We develop native and cross-platform apps that deliver seamless experiences across iOS and Android.",
    features: [
      "Native iOS and Android development",
      "Cross-platform apps with React Native & Flutter",
      "UI/UX design for mobile interfaces",
      "Push notifications and real-time features",
      "Offline functionality and data sync",
      "App Store and Play Store submission",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
  },
  {
    ...siteConfig.services[2],
    fullDescription: "Leverage the power of artificial intelligence to automate processes, gain insights, and enhance decision-making. Our AI solutions are tailored to your specific business needs.",
    features: [
      "Custom AI chatbots and virtual assistants",
      "Machine learning model development",
      "Natural Language Processing (NLP)",
      "RAG (Retrieval Augmented Generation) systems",
      "Workflow automation with AI",
      "Predictive analytics and insights",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "TensorFlow", "Pinecone", "Zapier"],
  },
  {
    ...siteConfig.services[3],
    fullDescription: "Streamline your customer relationships and sales processes with powerful CRM solutions. We help you manage leads, track interactions, and automate your sales funnel.",
    features: [
      "CRM setup and customization",
      "Sales funnel automation",
      "Lead scoring and management",
      "Email marketing integration",
      "Analytics and reporting dashboards",
      "Third-party integrations",
    ],
    technologies: ["GoHighLevel", "HubSpot", "Salesforce", "ActiveCampaign", "ClickFunnels", "Zapier"],
  },
  {
    ...siteConfig.services[4],
    fullDescription: "Create beautiful, intuitive interfaces that users love. Our design process focuses on understanding your users and creating experiences that drive engagement and conversions.",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design systems and style guides",
      "Responsive and accessible design",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
  },
  {
    ...siteConfig.services[5],
    fullDescription: "Stand out with stunning visual designs that communicate your brand's message effectively. From logos to marketing materials, we create designs that leave lasting impressions.",
    features: [
      "Logo design and brand identity",
      "Marketing collateral and print design",
      "Social media graphics",
      "Presentation design",
      "Illustration and iconography",
      "Brand guidelines",
    ],
    technologies: ["Adobe Photoshop", "Illustrator", "After Effects", "Canva", "Figma", "Procreate"],
  },
  {
    icon: "⚡",
    title: "n8n Automation",
    description: "Powerful workflow automation and integration solutions using n8n to connect your apps and streamline business processes.",
    image: "https://www.techwebninja.com/assets/ai-C1sOCY56.png",
    fullDescription: "Automate your business workflows with n8n, the powerful open-source automation platform. We build custom integrations that connect your tools, automate repetitive tasks, and create seamless data flows across your entire tech stack.",
    features: [
      "Custom workflow automation",
      "Multi-app integrations",
      "Data synchronization across platforms",
      "Scheduled tasks and triggers",
      "API connections and webhooks",
      "Error handling and monitoring",
    ],
    technologies: ["n8n", "REST APIs", "Webhooks", "JavaScript", "PostgreSQL", "Docker"],
  },
];

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });

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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From web development to AI integration, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {serviceDetails.map((service, index) => (
        <ServiceSection key={service.title} service={service} index={index} />
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help transform your business with our digital solutions.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ServiceSection = ({ service, index }: { service: typeof serviceDetails[0]; index: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.title.toLowerCase().replace(/\s+/g, "-")}
      className={`section-padding bg-background`}
    >
      <div className="container-custom">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transition: "all 0.7s ease" }}
        >
          {/* Image - alternating sides */}
          <div className={`${!isEven ? "lg:order-2" : ""}`}>
            <div className="card-dark p-8 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${!isEven ? "lg:order-1" : ""}`}>
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
