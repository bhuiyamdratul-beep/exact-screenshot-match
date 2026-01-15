import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import TechStack from "@/components/landing/TechStack";
import Niches from "@/components/landing/Niches";
import PlatformLogos from "@/components/landing/PlatformLogos";
import Process from "@/components/landing/Process";
import Portfolio from "@/components/landing/Portfolio";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Niches />
      <PlatformLogos />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
