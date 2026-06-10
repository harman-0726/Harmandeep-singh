import React, { useState } from "react";
import { Github, Linkedin, Mail, FileText, ArrowDown, Sparkles, Code, Cpu } from "lucide-react";
import ResumeModal from "./ResumeModal";

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onProjectsClick, onContactClick }: HeroProps) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-cream dark:bg-brand-black flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Animated Gradient Blobs representing AI Neurons */}
      <div className="absolute top-[25%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-orange/10 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-brand-orange/8 blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,11,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,11,11,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy Content and CTAs */}
          <div className="md:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-3.5 py-1.5 transition-all text-brand-orange hover:scale-102">
              <Sparkles className="h-3.5 w-3.5 fill-current animate-pulse" />
              <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                INTELLIGENT COMPUTING & DESIGN
              </span>
            </div>

            {/* Structured Huge Title */}
            <div className="space-y-2">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7.5xl font-extrabold text-brand-black dark:text-white tracking-tight leading-none">
                Harmandeep <br />
                <span className="text-brand-orange relative inline-block group mt-1">
                  Singh
                  {/* Subtle underline detail */}
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-orange/20 -z-10 group-hover:bg-brand-orange/30 transition-all" />
                </span>
              </h1>
            </div>

            {/* Title Badge */}
            <div className="space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-zinc-700 dark:text-zinc-300 tracking-wide flex items-center gap-2">
                <Code className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span>AI Engineer &amp; Backend Developer</span>
              </h2>
            </div>

            {/* Bio description */}
            <p className="font-sans text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
              I build advanced voice companions, machine learning models, and high-performance server architectures. Bridging complex model weights with reliable backend integrations.
            </p>

            {/* Strategic Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onProjectsClick}
                className="bg-brand-orange hover:bg-brand-orange/95 text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                View Featured Work
              </button>
              
              <button
                onClick={handleOpenResume}
                className="bg-white dark:bg-brand-dark-card border border-zinc-200 dark:border-white/10 hover:border-brand-orange text-brand-black dark:text-white hover:text-brand-orange font-heading font-semibold text-sm px-7 py-3.5 rounded-full transition-all flex items-center space-x-2 shadow-sm hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                <FileText className="h-4.5 w-4.5" />
                <span>Get CV / Summary</span>
              </button>
            </div>

            {/* Social linkages and coordinates info */}
            <div className="pt-4 border-t border-brand-black/5 dark:border-white/5 flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-3.5">
                <a
                  href="https://github.com/harman-0726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-brand-black/5 dark:bg-white/5 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange text-zinc-700 dark:text-zinc-300 transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harmandeep-singh-287322356/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-brand-black/5 dark:bg-white/5 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange text-zinc-700 dark:text-zinc-300 transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href="mailto:01harmandeep@gmail.com"
                  className="p-2.5 rounded-full bg-brand-black/5 dark:bg-white/5 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange text-zinc-700 dark:text-zinc-300 transition-all hover:scale-110"
                  aria-label="Send direct Email"
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
              </div>
              
              <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-500">
                <Cpu className="h-3.5 w-3.5 text-brand-orange" />
                <span>Active Region: Global / remote [Punjab, India]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Circle Avatar */}
          <div className="md:col-span-5 flex flex-col items-center justify-center w-full relative z-10 md:-translate-y-8 lg:-translate-y-12">
            {/* Background design accents */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/[0.04] dark:bg-brand-orange/[0.02] rounded-full blur-3xl -z-10" />

            {/* Premium Circular Avatar Picture */}
            <div className="relative shrink-0 select-none group w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              {/* Dynamic decorative visual glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FF5A1F] to-amber-500 rounded-full blur-[8px] opacity-40 group-hover:opacity-85 transition duration-500" />
              
              {/* Image Frame overlay */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-orange bg-white dark:bg-brand-dark-card shadow-2xl">
                <img
                  src="https://i.ibb.co/DPhKdGWp/Whats-App-Image-2026-05-14-at-6-04-15-PM.jpg"
                  alt="Harmandeep Singh"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator helper */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 animate-bounce opacity-80 hidden md:block">
          <span className="font-mono text-[9px] font-semibold text-zinc-400 tracking-widest uppercase">
            SCROLL_EXPLORE
          </span>
          <ArrowDown className="h-3.5 w-3.5 text-brand-orange" />
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
