import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#feedback", label: "Feedback" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: picks the section whose top is closest to (but not past) the viewport top
  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "feedback"];
    const NAVBAR_OFFSET = 100; // px offset to account for fixed navbar height

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      let currentSection = "";
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top - NAVBAR_OFFSET;
        // Section is at or above the trigger line and is the closest one
        if (top <= 0 && Math.abs(top) < minDistance) {
          minDistance = Math.abs(top);
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.slice(1);
    const element = targetId ? document.getElementById(targetId) : null;
    
    if (element) {
      setTimeout(() => {
        const NAVBAR_OFFSET = 80; // px
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - NAVBAR_OFFSET;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 300);
    } else if (href === "#") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 300);
    }
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full`}
      animate={{
        paddingTop: isScrolled || isMobileMenuOpen || isMobile ? 8 : 0,
        paddingLeft: isScrolled || isMobileMenuOpen || isMobile ? 16 : 0,
        paddingRight: isScrolled || isMobileMenuOpen || isMobile ? 16 : 0,
      }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.header
        animate={{
          borderRadius: isScrolled || isMobile ? 24 : 0,
          maxWidth: isScrolled || isMobile ? 896 : 1280,
          paddingTop: isScrolled || isMobile ? 12 : 24,
          paddingBottom: isScrolled || isMobile ? 12 : 24,
        }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`w-full ${
          isScrolled || isMobileMenuOpen || isMobile
            ? "liquid-glass px-6 md:px-8"
            : "bg-transparent px-6 md:px-12"
        }`}
        style={{ willChange: "border-radius, max-width, padding" }}
      >
        <nav className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <a
              href="#"
              className="group text-xl font-bold tracking-tight text-foreground flex items-center gap-0.5"
            >
              <span className="bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:to-primary bg-clip-text text-transparent transition-all duration-500">
                Sherwin
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 transition-all duration-500 group-hover:scale-150" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all duration-500" />
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <div className="liquid-glass-pill rounded-full px-2 py-1 flex items-center gap-1.5 relative">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      href={link.href}
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`px-4 py-2 text-sm relative z-10 rounded-full transition-colors duration-300 font-semibold ${
                        isActive
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {/* Sliding Hover Pill */}
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-white/8 rounded-full z-0"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Active Highlight Underline */}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-indicator"
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full z-0"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      <span className="relative z-10">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block transition-all duration-300 hover:scale-105 active:scale-95">
              <a href="#contact">
                <Button
                  size="sm"
                  classname="hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]"
                >
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground cursor-pointer hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu (staggered & animated with framer-motion) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="md:hidden overflow-hidden w-full"
              >
                <div className="flex flex-col gap-3 pt-2 pb-1 border-t border-white/5 mt-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <a
                        href={link.href}
                        key={index}
                        className={`text-base font-semibold py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-between hover:bg-white/5 ${
                          isActive
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={(e) => handleMobileLinkClick(e, link.href)}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        )}
                      </a>
                    );
                  })}

                  <div className="pt-2 w-full flex">
                    <a
                      href="#contact"
                      className="w-full"
                      onClick={(e) => handleMobileLinkClick(e, "#contact")}
                    >
                      <Button classname="w-full">Contact Me</Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </motion.div>
  );
};
