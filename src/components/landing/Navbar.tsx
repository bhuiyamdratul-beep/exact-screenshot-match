import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-6xl rounded-full ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border border-border"
          : "bg-card/90 backdrop-blur-md border border-border"
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
              N
            </div>
            <div>
              <span className="font-bold text-foreground">TECH WEB NINJA</span>
              <p className="text-[10px] text-muted-foreground">Quality is Our Strength</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 pt-4 pb-2" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {siteConfig.navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.replace("#", "") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 mt-2"
            >
              Get Started
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
