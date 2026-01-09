import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    { name: "Blog", href: "/blog", isPage: true },
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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-lg text-foreground tracking-wide">
                Dream It Developer
              </span>
              <p className="text-[11px] text-primary tracking-wider font-medium">Quality is Our Strength</p>
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

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <Link to="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-base font-semibold shadow-lg shadow-primary/25 mt-2">
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
