import React, { useEffect, useState } from "react";
import { Github, Mail, Globe, ArrowUp, Sun, Moon, Sparkles, Flame } from "lucide-react";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark class on mount
    const hasDark = document.documentElement.classList.contains("dark");
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newState = root.classList.toggle("dark");
    setIsDark(newState);
    localStorage.setItem("theme", newState ? "dark" : "light");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-brand-black text-white py-16 border-t border-white/5 relative overflow-hidden text-left">
      {/* Background grain noise */}
      <div className="absolute inset-0 grain-overlay-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Logo and theme */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="h-9 w-9 bg-[#FF5A1F] rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                <Flame className="h-5 w-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base tracking-tight leading-none text-white">
                  HARMANDEEP
                </span>
                <span className="font-mono text-[9px] text-[#FF5A1F] font-bold tracking-widest uppercase mt-0.5">
                  VIBE_LABS_2026
                </span>
              </div>
            </div>
            
            <p className="text-zinc-500 text-xs font-light leading-relaxed max-w-xs">
              Designing spatial visual solutions, compiling reliable machine learning weights, and launching digital responsive SaaS services.
            </p>

            {/* Premium Theme Selector */}
            <div className="pt-2 flex items-center space-x-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">AESTHETIC MODE:</span>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center space-x-1.5 p-1.5 rounded-lg border border-white/10 hover:border-[#FF5A1F] hover:text-[#FF5A1F] bg-[#111] transition-all text-xs text-zinc-400 font-mono active:scale-95 cursor-pointer"
                aria-label="Toggle light dark layout mode"
              >
                {isDark ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-[#FF5A1F]" />
                    <span>LIGHT_STAGE</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-zinc-300" />
                    <span>COSMIC_STAGE</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick links division */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase mb-4">
                Directory
              </h4>
              <ul className="space-y-2.5">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-xs text-zinc-500 hover:text-[#FF5A1F] transition-all tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase mb-4">
                Operations
              </h4>
              <ul className="space-y-2.5">
                {navLinks.slice(3).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-xs text-zinc-500 hover:text-[#FF5A1F] transition-all tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* System coordinates info callback */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
              Secure Registry
            </h4>
            
            <div className="p-4 bg-[#111] border border-white/5 rounded-xl space-y-2.5 text-[10px] font-mono text-zinc-500 leading-relaxed">
              <div className="flex items-center space-x-1.5 text-white font-bold">
                <Sparkles className="h-3 w-3 text-[#FF5A1F]" />
                <span>ENVIRONMENT_STABLE</span>
              </div>
              <p>Node compiled server execution routes proxying Gemini securely.</p>
              <p className="text-[#FF5A1F] tracking-widest font-extrabold uppercase mt-0.5">
                SSL_ENCRYPTED_OK
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 Harmandeep Singh. All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/harman-0726"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Github
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/harmandeep-singh-287322356/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a href="mailto:01harmandeep@gmail.com" className="hover:text-white transition-colors">
              Direct Mail
            </a>
            <span>•</span>
            
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-zinc-800 hover:bg-[#FF5A1F] hover:text-white rounded transition-colors text-zinc-400 cursor-pointer"
              title="Return to top coordinates"
            >
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
