"use client";

import React, { useState } from "react";
import { SKILLS_DATA, Skill } from "../lib/data";
import * as Icons from "lucide-react";

export default function SkillsGrid() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("ai-ml");

  // Dynamic Lucide icon builder safely returning matching component or falling back to Code icons
  const renderSkillIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-5 w-5 text-brand-orange" />;
    }
    return <Icons.Code className="h-5 w-5 text-brand-orange" />;
  };

  const activeCategory = SKILLS_DATA.find((c) => c.id === activeCategoryId) || SKILLS_DATA[0];

  return (
    <section id="skills" className="py-24 bg-brand-cream dark:bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 px-3 py-1 rounded">
            EXPERTISE_ACQUISITIONS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-black dark:text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 font-light">
            Interactive, expandable accordion matrix of specialized languages, machine learning frameworks, and infrastructure tools.
          </p>
          <div className="h-1 w-16 bg-brand-orange mx-auto rounded" />
        </div>

        {/* Master Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Expandable category selectors (Accordion triggers) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">
              Select Core Department
            </h3>
            
            {SKILLS_DATA.map((category) => {
              const isActive = category.id === activeCategoryId;
              
              return (
                <div
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? "bg-white dark:bg-brand-dark-card border-brand-orange shadow-lg shadow-brand-orange/5"
                      : "bg-brand-cream/80 dark:bg-[#111] border-zinc-200/60 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10"
                  }`}
                >
                  {/* Accent left highlight bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all ${
                      isActive ? "bg-brand-orange" : "bg-transparent group-hover:bg-zinc-400 dark:group-hover:bg-zinc-800"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-heading text-lg font-bold transition-all ${
                        isActive ? "text-brand-orange" : "text-brand-black dark:text-zinc-300"
                      }`}>
                        {category.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-1">
                        {category.skills.length} core competencies parsed
                      </p>
                    </div>
                    
                    {/* Collapsible status arrows */}
                    <div className={`p-2 rounded-lg bg-zinc-100 dark:bg-[#1E1E1E] text-zinc-600 dark:text-zinc-400 transition-transform duration-300 ${isActive ? "rotate-90 bg-brand-orange/10 text-brand-orange" : ""}`}>
                      <Icons.ChevronRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Tiny in-situ progress summarizer if closed */}
                  {!isActive && (
                    <div className="flex gap-2 flex-wrap mt-3.5">
                      {category.skills.slice(0, 3).map((s, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono bg-zinc-200/50 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded">
                          {s.name}
                        </span>
                      ))}
                      {category.skills.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-400">+{category.skills.length - 3}</span>
                      )}
                    </div>
                  )}

                  {/* Smooth inner details expansion helper */}
                  {isActive && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 font-light leading-relaxed animate-fade-in">
                      Actively deployed frameworks mapping high-impact mathematical libraries, optimized server routing loops, and structured databases. Click other blocks to toggle divisions.
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: High-fidelity details displaying skills items */}
          <div className="lg:col-span-7 bg-white dark:bg-brand-dark-card border border-zinc-200/50 dark:border-white/5 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            {/* Grain detail */}
            <div className="absolute inset-0 grain-overlay pointer-events-none opacity-[0.015]" />
            
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/5 pb-4 mb-6">
              <span className="font-mono text-xs font-semibold tracking-wider text-brand-orange">
                ACTIVE_MATRIX // {activeCategory.title.toUpperCase()}
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                COMPILING LEVEL
              </span>
            </div>

            {/* Grid of skills elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {activeCategory.skills.map((skill: Skill, sIdx: number) => (
                <div
                  key={sIdx}
                  className="p-4 border border-zinc-100 dark:border-[#222] hover:border-brand-orange dark:hover:border-brand-orange/50 bg-brand-cream/20 dark:bg-[#151515] rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-sm flex flex-col justify-between group h-36"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Interactive hover circle rotation */}
                      <div className="p-2 bg-brand-orange/10 dark:bg-brand-orange/5 rounded-lg group-hover:rotate-6 transition-all duration-300">
                        {renderSkillIcon(skill.iconName)}
                      </div>
                      <h4 className="font-heading text-sm font-bold text-brand-black dark:text-white">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Numeric coordinate read-out */}
                    <span className="font-mono text-xs text-brand-orange font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Small contextual strength review */}
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mt-2 flex-grow">
                    {skill.description}
                  </p>

                  {/* Level gauge progress meters */}
                  <div className="pt-3">
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-[#2A2A2A] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-orange rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action helper metrics */}
            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500">
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                <span>Verified industry standard conventions</span>
              </div>
              <div className="text-[11px]">
                ENV: <span className="text-brand-orange">DOCKER_SANDBOX_STABLE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
