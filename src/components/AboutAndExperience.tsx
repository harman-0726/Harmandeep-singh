import React from "react";
import { TIMELINE_DATA } from "../data";
import { Briefcase, GraduationCap, Award, Flame, CheckCircle, ChevronRight, Zap } from "lucide-react";

export default function AboutAndExperience() {
  const achievements = [
    { value: "20+", label: "Projects Completed", desc: "Production modules & vision pipelines" },
    { value: "40+", label: "DSA Problems Solved", desc: "Data structures & algorithmic challenges" },
    { value: "10+", label: "Tech Credentials", desc: "Neural networks & cloud ops" },
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream/40 dark:bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 px-3 py-1 rounded">
            IDENTITY_PROFILE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-black dark:text-white tracking-tight">
            The Philosophy of Engineering
          </h2>
          <div className="h-1 w-16 bg-brand-orange mx-auto rounded" />
        </div>

        {/* About Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* About Introduction details col */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-2xl font-bold text-brand-black dark:text-white tracking-wide">
              Who is Harmandeep?
            </h3>
            <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              I am a dedicated software researcher and backend application engineer. My professional drive lies at the intersection of complex computer vision models, data operations, and high-performance server-side architectures.
            </p>
            <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              During my academic journey, I focused on memory-efficient neural network interfaces, exploring how computer vision and machine learning libraries can run seamlessly in low-power systems with optimized communication layers and fast API payloads.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pragmatic software architecture prioritization",
                "Advanced model compilation & deployment expertise",
                "High-performance API orchestrations",
                "Automated testing & sandboxed Docker isolation"
              ].map((strength, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-orange flex-shrink-0" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Vision statement column */}
          <div className="lg:col-span-5 p-8 bg-brand-black dark:bg-[#161616] text-white rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 h-24 w-24 bg-brand-orange/10 rounded-full blur-2xl" />
            <div className="absolute inset-0 grain-overlay-dark border border-white/5 rounded-2xl pointer-events-none" />

            <h4 className="font-heading text-lg font-bold text-brand-orange tracking-wide uppercase mb-4 flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Core Mandate</span>
            </h4>
            <p className="font-sans text-sm text-zinc-300 leading-relaxed italic mb-8 font-light">
              "Computers should not just parse databases; they must perceive spatial structures, evaluate core predictive models, and serve intelligent endpoints instantly. My objective is to design that reliable layer."
            </p>
            
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>EDUCATION</span>
                <span className="text-white">B.Tech CSE [2022-2026]</span>
              </div>
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>INTERNSHIPS</span>
                <span className="text-white">2B Innovations</span>
              </div>
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>CREDENTIALS</span>
                <span className="text-white">Python with AI Specialization</span>
              </div>
            </div>
          </div>

        </div>

        {/* Achievements Metric grid block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-brand-dark-card border border-zinc-200/50 dark:border-white/5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:translate-y-[-4px] hover:shadow-lg hover:border-brand-orange/45 dark:hover:border-brand-orange/45 transition-all group"
            >
              <div className="h-12 w-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 duration-200">
                <Flame className="h-5 w-5 fill-current" />
              </div>
              <h4 className="text-4xl font-heading font-extrabold text-brand-black dark:text-white mb-2">
                {item.value}
              </h4>
              <p className="text-sm font-semibold tracking-wide text-brand-orange mb-1">
                {item.label}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Experience vertical timeline section */}
        <div id="experience" className="border-t border-zinc-200 dark:border-white/5 pt-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 px-3 py-1 rounded">
              TIMELINE_LOGS
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-black dark:text-white tracking-tight">
              Professional Journey
            </h3>
            <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 font-light">
              Demonstrated timeline of career objectives, enterprise contracts, and academic specialization
            </p>
          </div>

          {/* Timeline Nodes container */}
          <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
            {/* Thread center line on desktops, left line on mobile */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-white/10 -translate-x-1/2" />

            <div className="space-y-12">
              {TIMELINE_DATA.map((item, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <div key={item.id} className="relative flex flex-col sm:flex-row items-start sm:items-center group">
                    
                    {/* Anchor bullet pointer */}
                    <div className="absolute left-6 sm:left-1/2 h-5 w-5 rounded-full border-4 border-brand-cream dark:border-brand-black bg-brand-orange shadow-lg -translate-x-1/2 z-10 transition-transform group-hover:scale-125 duration-200" />

                    {/* Left node (desktop) */}
                    <div className={`w-full sm:w-1/2 pr-0 sm:pr-12 pl-12 sm:pl-0 text-left sm:text-right ${isEven ? "sm:block" : "sm:invisible hidden"}`}>
                      <span className="font-mono text-xs font-extrabold text-brand-orange tracking-widest">
                        {item.year}
                      </span>
                      <h4 className="font-heading text-lg font-bold text-brand-black dark:text-white mt-1">
                        {item.role}
                      </h4>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    {/* Right node (desktop) */}
                    <div className={`w-full sm:w-1/2 pl-12 pr-0 text-left ${!isEven ? "sm:block" : "sm:invisible sm:absolute hidden"}`}>
                      <span className="font-mono text-xs font-extrabold text-brand-orange tracking-widest">
                        {item.year}
                      </span>
                      <h4 className="font-heading text-lg font-bold text-brand-black dark:text-white mt-1">
                        {item.role}
                      </h4>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    {/* Description card expanding dynamically absolute layout */}
                    <div className={`w-full bg-white dark:bg-brand-dark-card border border-zinc-200/50 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all mt-4 ml-12 sm:ml-0 ${
                      isEven 
                        ? "sm:mr-auto sm:-translate-x-0" 
                        : "sm:ml-auto"
                    } max-w-full sm:max-w-md`}>
                      {/* Left icon design indicator based on category */}
                      <div className="flex items-start space-x-3.5">
                        <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange flex-shrink-0 mt-0.5">
                          {item.type === "work" ? (
                            <Briefcase className="h-4 w-4" />
                          ) : item.type === "education" ? (
                            <GraduationCap className="h-4 w-4" />
                          ) : (
                            <Award className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                            {item.description}
                          </p>
                          
                          {/* Inner tech tags */}
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-mono bg-brand-cream dark:bg-white/5 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded border border-zinc-200/50 dark:border-white/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
