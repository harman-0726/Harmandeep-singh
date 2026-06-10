import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Flame } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const currentScroll = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-brand-cream/85 dark:bg-brand-black/85 backdrop-blur-md border-b border-brand-black/5 dark:border-white/5 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Title Accent */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2.5 group"
          >
            <div className="h-9 w-9 rounded-lg bg-brand-orange text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-brand-orange/20 hover:scale-105 active:scale-95 transition-all">
              <Flame className="h-5 w-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base font-bold text-brand-black dark:text-white tracking-tight leading-none">
                HARMANDEEP
              </span>
              <span className="font-mono text-[9px] text-brand-orange font-bold uppercase tracking-widest mt-0.5">
                AI_DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-heading font-medium tracking-wide transition-all ${
                  activeSection === item.id
                    ? "bg-brand-black text-white dark:bg-white dark:text-brand-black font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-brand-orange hover:bg-brand-orange/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onContactClick}
              className="bg-brand-orange hover:bg-brand-orange/95 text-white px-5 py-2 rounded-full text-xs font-semibold font-heading tracking-wide shadow-md shadow-brand-orange/15 transition-all hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center space-x-1"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-brand-orange hover:bg-brand-orange/5 transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down Menu drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-cream/95 dark:bg-brand-black/98 backdrop-blur-lg border-b border-brand-black/10 dark:border-white/10 px-4 pt-2 pb-6 space-y-1 shadow-xl transition-all animate-fade-in">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-4 py-3 rounded-xl text-sm font-heading font-semibold ${
                activeSection === item.id
                  ? "bg-brand-orange/10 text-brand-orange"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-brand-black/5 dark:hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white text-center py-3 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
