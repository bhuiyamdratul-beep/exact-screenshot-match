import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", isPage: true },
    { name: "Services", href: "/services", isPage: true },
    { name: "Portfolio", href: "/portfolio", isPage: true },
    { name: "About Us", href: "/about", isPage: true },
    { name: "Contact Us", href: "/#contact", isPage: false },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
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
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
              D
            </div>
            <div>
              <span className="font-bold text-foreground">DREAM IT DEVELOPER</span>
              <p className="text-[10px] text-muted-foreground">Quality is Our Strength</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isPage ? (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href)
                        ? "text-primary border-b-2 border-primary pb-1"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/#contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                Get Started
              </Button>
            </Link>
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
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isPage ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <Link to="/#contact" onClick={() => setIsOpen(false)}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 mt-2">
                Get Started
              </Button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
