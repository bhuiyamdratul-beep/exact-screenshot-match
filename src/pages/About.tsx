import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Clock, Target } from "lucide-react";
import founderImage from "@/assets/founder-ratul.jpg";
import teamLeadImage from "@/assets/team-lead-yeasin.png";
import teamAbirImage from "@/assets/team-abir.jpg";
import teamLabonnoImage from "@/assets/team-labonno.jpg";
import teamZihadImage from "@/assets/team-zihad.jpg";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "100+", label: "Projects Delivered" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Target, value: "95%", label: "Client Retention" },
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every project is built with attention to detail and best practices.",
    icon: "⭐",
  },
  {
    title: "Client-Centric",
    description: "Your success is our success. We work closely with you to understand and achieve your goals.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description: "We stay ahead of the curve, using the latest technologies to deliver cutting-edge solutions.",
    icon: "💡",
  },
  {
    title: "Transparency",
    description: "Clear communication and honest pricing. No hidden fees, no surprises.",
    icon: "🔍",
  },
];

const team = [
  {
    name: "Md Ahoshan Hasan Ratul",
    role: "Founder & CEO",
    image: founderImage,
    bio: "Expert in everything – from company vision and business growth to AI-driven systems, automation, development, and strategic leadership.",
  },
  {
    name: "Yeasin Arafat Mollik",
    role: "Lead & Automation Expert",
    image: teamLeadImage,
    bio: "Leads development and execution, turning complex ideas into reliable, high-performance systems that work seamlessly in real-world operations.",
  },
  {
    name: "Md Abir Mahmud",
    role: "Graphic Designer",
    image: teamAbirImage,
    bio: "Creates stunning visual designs and brand identities that captivate audiences and communicate brand values effectively.",
  },
  {
    name: "Labonno Akter",
    role: "Python Developer",
    image: teamLabonnoImage,
    bio: "Specializes in Python development, building robust backend solutions and automation scripts that power efficient business operations.",
  },
  {
    name: "Ibn Ahsan Zihad",
    role: "Digital Marketing Expert",
    image: teamZihadImage,
    bio: "Drives online growth through strategic SEO, social media marketing, paid advertising, and content strategies that deliver measurable results.",
  },
];

const About = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.1 });
  const { ref: teamRef, isInView: teamInView } = useInView({ threshold: 0.1 });

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
              About <span className="text-gradient">Dream It Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in Python Development, AI Solutions, Web & App Development, Shopify E-commerce, CRM, Graphic Design, Digital Marketing, and Sales Funnel Automation — helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={siteConfig.about.image}
                alt="Who we are"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">{siteConfig.about.title}</h2>
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            {siteConfig.about.story.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div
            ref={statsRef}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-4xl font-bold text-gradient mb-1">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Values</h2>
          <div
            ref={valuesRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-dark p-6 text-center hover:border-primary/50 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">Meet Our Team</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A talented group of professionals passionate about creating exceptional digital experiences.
          </p>
          <div
            ref={teamRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {team.map((member, index) => (
              <div
                key={member.name}
                className="card-dark p-6 text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
