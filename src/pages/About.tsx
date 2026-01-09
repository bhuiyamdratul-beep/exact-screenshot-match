import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Clock, Target, Linkedin, Twitter, Github } from "lucide-react";

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
    role: "Founder & Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer with 5+ years of experience in building scalable web applications and AI solutions.",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    bio: "Creative designer passionate about creating beautiful, user-centered experiences that drive engagement.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Michael Torres",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Specializes in building robust APIs, database architecture, and cloud infrastructure.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Ensures projects are delivered on time and exceed client expectations with her exceptional organizational skills.",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const About = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.1 });
  const { ref: teamRef, isInView: teamInView } = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background dark">
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
              We're a passionate team of developers, designers, and strategists dedicated to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-muted/30">
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {siteConfig.about.paragraphs[0]}
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {siteConfig.about.paragraphs[1]}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to push boundaries, embracing new technologies like AI and automation to deliver even more value to our clients. Our mission remains the same: to transform your digital dreams into reality.
              </p>
            </div>
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
      <section className="section-padding bg-muted/30">
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
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
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
