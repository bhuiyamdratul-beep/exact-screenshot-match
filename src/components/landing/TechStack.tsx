import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const techCategories = {
  "Next-Gen": [
    { icon: "🤖", title: "AI ML Solutions", description: "Intelligent agents that act" },
    { icon: "🔍", title: "Business Intelligence", description: "Context-aware AI responses" },
    { icon: "⚙️", title: "RPA Services", description: "Seamless platform connections" },
    { icon: "🔗", title: "Microservices", description: "Scalable modern architecture" },
    { icon: "☁️", title: "Serverless Architecture", description: "Event-driven computing" },
  ],
  "Mobile App": [
    { icon: "📱", title: "iOS Development", description: "Native Apple applications" },
    { icon: "🤖", title: "Android Development", description: "Native Android apps" },
    { icon: "🔄", title: "Cross-Platform", description: "React Native & Flutter" },
    { icon: "⚡", title: "Progressive Web Apps", description: "Web-based mobile apps" },
    { icon: "🎮", title: "Mobile Games", description: "Interactive experiences" },
  ],
  "Industry Solutions": [
    { icon: "🏥", title: "Healthcare", description: "HIPAA compliant solutions" },
    { icon: "🏦", title: "FinTech", description: "Secure financial platforms" },
    { icon: "🛒", title: "E-commerce", description: "Online retail solutions" },
    { icon: "📚", title: "EdTech", description: "Learning management systems" },
    { icon: "🏭", title: "Manufacturing", description: "Industrial automation" },
  ],
  "Frontend": [
    { icon: "⚛️", title: "React.js", description: "Component-based UIs" },
    { icon: "🅰️", title: "Angular", description: "Enterprise applications" },
    { icon: "💚", title: "Vue.js", description: "Progressive framework" },
    { icon: "⏭️", title: "Next.js", description: "Full-stack React" },
    { icon: "🎨", title: "Tailwind CSS", description: "Utility-first styling" },
  ],
  "Backend": [
    { icon: "🟢", title: "Node.js", description: "JavaScript runtime" },
    { icon: "🐍", title: "Python", description: "Versatile backend" },
    { icon: "☕", title: "Java", description: "Enterprise solutions" },
    { icon: "🔷", title: ".NET", description: "Microsoft ecosystem" },
    { icon: "🐘", title: "PHP", description: "Web development" },
  ],
  "DevOps": [
    { icon: "🐳", title: "Docker", description: "Containerization" },
    { icon: "☸️", title: "Kubernetes", description: "Container orchestration" },
    { icon: "🔄", title: "CI/CD", description: "Automated pipelines" },
    { icon: "☁️", title: "AWS", description: "Cloud infrastructure" },
    { icon: "🔵", title: "Azure", description: "Microsoft cloud" },
  ],
};

const TechStack = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("Next-Gen");
  const tabs = Object.keys(techCategories);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-32 h-32 border-2 border-primary/20 rounded-full -mr-16 -mt-16" />
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Our Technology Stack
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {techCategories[activeTab as keyof typeof techCategories].map((tech, index) => (
            <div
              key={tech.title}
              className={`card-dark p-6 text-center hover:border-primary/50 transition-all duration-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3 text-primary">{tech.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{tech.title}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
          >
            <Link to="/services">Check Out Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
