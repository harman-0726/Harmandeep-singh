/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutAndExperience from "./components/AboutAndExperience";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsShowcase from "./components/ProjectsShowcase";
import AiTwin from "./components/AiTwin";
import AiToolsExploration from "./components/AiToolsExploration";
import BlogAndContact from "./components/BlogAndContact";
import Footer from "./components/Footer";
import { Sparkles, Bot, MessageSquare } from "lucide-react";

export default function App() {
  
  // Clean initialization check for preferred browser dark theme settings
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" || 
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleContactScroll = () => {
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleProjectsScroll = () => {
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black text-brand-black dark:text-zinc-200 transition-all font-sans relative">
      
      {/* Dynamic ambient background noise filter textures */}
      <div className="absolute inset-0 grain-overlay opacity-[0.015] dark:hidden pointer-events-none z-30" />
      <div className="absolute inset-0 grain-overlay-dark opacity-[0.03] hidden dark:block pointer-events-none z-30" />
      
      {/* Floating Sparkly AI Twin widget available site-wide */}
      <AiTwin isEmbedded={false} />

      {/* Floating Header Navigation */}
      <Navbar onContactClick={handleContactScroll} />

      {/* Hero presentation with interactive mesh coordinate simulation feed */}
      <Hero onProjectsClick={handleProjectsScroll} onContactClick={handleContactScroll} />

      {/* Profile summary, B.Tech CS timelines, and metric logs */}
      <AboutAndExperience />

      {/* Collapsible Skills categories grid */}
      <SkillsGrid />

      {/* Production-grade developer custom projects with interactive emulator terminals */}
      <ProjectsShowcase />

      {/* GROUNDBREAKING EMBEDDED AI TWIN CHAT DIVISION */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black w-full relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-3 py-1.5 text-brand-orange text-[10px] font-mono tracking-widest uppercase">
              <Bot className="h-3.5 w-3.5 fill-current animate-pulse" />
              <span>COGNITIVE_VIRTUAL_TWIN</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-brand-black dark:text-white tracking-tight">
              Interactive Interview Sandbox
            </h2>
            <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
              Don't just read indices; prompt the virtual model representative of Harmandeep. Answer questions in real-time, backed by complete server-side secure Gemini integration.
            </p>
          </div>

          <AiTwin isEmbedded={true} />

        </div>
      </section>

      {/* AI Platform tools list view and execution playground */}
      <AiToolsExploration />

      {/* Blog list view and fully functional contact email post terminal */}
      <BlogAndContact />

      {/* Clean high contrast luxury footer section */}
      <Footer />
      
    </div>
  );
}
