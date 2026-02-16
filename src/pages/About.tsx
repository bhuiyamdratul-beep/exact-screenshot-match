import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Clock, Target, ChevronRight } from "lucide-react";
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
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#000000' }}>
      <Navbar />
      
      {/* Hero Section - Exact reference style */}
      <section className="pt-32 pb-16 lg:pb-24" style={{ backgroundColor: '#000000' }}>
        <div className="container-custom">
          <div
            ref={headerRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight" style={{ color: '#ffffff' }}>
              Empowering Businesses with{" "}
              <span className="block" style={{ color: '#ef4444' }}>Smart Digital Solutions</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#9ca3af' }}>
              Your trusted partner in crafting high-converting sales funnels, seamless automation, and creative designs that drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="rounded-lg px-8 text-base font-semibold" style={{ backgroundColor: '#ef4444', color: '#ffffff' }}>
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-lg px-8 text-base font-semibold" style={{ borderColor: '#374151', color: '#ffffff', backgroundColor: 'transparent' }}>
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner - LET'S WORK TOGETHER - Diagonal style */}
      <section className="py-4 overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div className="relative" style={{ transform: 'rotate(-3deg)', margin: '20px -20px' }}>
          {/* Line 1 - scrolling right */}
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 15 }).map((_, i) => (
              <span
                key={`r1-${i}`}
                className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.2em] mx-6"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px #374151',
                }}
              >
                LET'S WORK TOGETHER <span style={{ WebkitTextStroke: '1px #ef4444' }}>-</span>{" "}
              </span>
            ))}
          </div>
          {/* Red line accent */}
          <div className="w-full h-[1px] my-3" style={{ backgroundColor: '#ef4444' }} />
          {/* Line 2 - scrolling left */}
          <div className="flex whitespace-nowrap" style={{ animation: 'marquee-reverse 30s linear infinite' }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <span
                key={`r2-${i}`}
                className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.2em] mx-6"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px #374151',
                }}
              >
                LET'S WORK TOGETHER <span style={{ WebkitTextStroke: '1px #ef4444' }}>-</span>{" "}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section - Welcome style */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#000000' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img
                src={siteConfig.about.image}
                alt="Who we are"
                className="w-full max-w-sm"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
                Welcome to Dream It Developer
              </h2>
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-5 leading-relaxed text-base" style={{ color: '#9ca3af' }}>
                  {paragraph}
                </p>
              ))}
              <Link to="/#contact">
                <Button size="lg" className="rounded-lg px-6 text-base font-semibold mt-4 gap-2" style={{ backgroundColor: '#ef4444', color: '#ffffff' }}>
                  Contact Us today <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: '#000000', borderTop: '1px solid #1f2937', borderBottom: '1px solid #1f2937' }}>
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
                className="text-center py-4"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#ef4444' }} />
                <h3 className="text-3xl lg:text-4xl font-bold mb-1" style={{ color: '#ef4444' }}>{stat.value}</h3>
                <p className="text-sm" style={{ color: '#9ca3af' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#000000' }}>
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>Our Values</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            The principles that guide everything we do.
          </p>
          <div
            ref={valuesRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl transition-all duration-300"
                style={{ border: '1px solid #1f2937', transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#ffffff' }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#000000' }}>
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>Meet Our Team</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            A talented group of professionals passionate about creating exceptional digital experiences.
          </p>
          <div
            ref={teamRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 transition-all duration-700 ${
              teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden transition-all duration-300" style={{ border: '2px solid #374151' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: '#ffffff' }}>{member.name}</h3>
                <p className="text-sm mb-3" style={{ color: '#ef4444' }}>{member.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#000000', borderTop: '1px solid #1f2937' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Ready to Work With Us?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: '#9ca3af' }}>
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="rounded-full px-8" style={{ backgroundColor: '#ef4444', color: '#ffffff' }}>
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
