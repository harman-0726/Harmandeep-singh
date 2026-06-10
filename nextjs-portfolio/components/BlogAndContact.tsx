"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function BlogAndContact() {
  // Contact Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissionId, setSubmissionId] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: subject || "General Consultation Request",
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Local API gateway rejected submission.");
      }

      const data = await response.json();
      setSubmissionId(data.id || `cl_${Date.now()}`);
      setFormStatus("success");
      
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  return (
    <section className="py-24 bg-brand-cream/40 dark:bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CONTACT DIRECT CHANNEL FORM SECTION */}
        <div id="contact" className="max-w-5xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left coordinate details panel */}
            <div className="lg:col-span-5 bg-brand-black dark:bg-[#151515] text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-xl text-left">
              <div className="absolute top-0 right-0 h-40 w-40 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 grain-overlay-dark pointer-events-none opacity-5 border border-white/5 rounded-3xl" />

              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-brand-orange bg-brand-orange/15 px-3 py-1 rounded font-bold tracking-widest">
                    SYSTEM_LINK_ACTIVE
                  </span>
                  <h3 className="font-heading text-2xl font-bold tracking-wide mt-2">
                    Let's Build Something Dynamic
                  </h3>
                  <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                    Ready to scale, map custom vision, or query deep neural models? Drop your inquiries below. 
                  </p>
                </div>

                <div className="space-y-6">
                  
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-lg">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Direct Channel</span>
                      <a href="mailto:01harmandeep@gmail.com" className="text-sm font-semibold hover:text-brand-orange transition-colors">
                        01harmandeep@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-lg">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Operational Hub</span>
                      <span className="text-sm font-semibold text-zinc-300">
                        Punjab, India (Open for Remote Global)
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Verified links block */}
              <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-zinc-500 text-xs font-mono">
                <div className="flex space-x-4 font-mono">
                  <a
                    href="https://github.com/harman-0726"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition-all hover:scale-105"
                  >
                    GITHUB_PAGE
                  </a>
                  <span className="text-zinc-700">|</span>
                  <a
                    href="https://www.linkedin.com/in/harmandeep-singh-287322356/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition-all hover:scale-105"
                  >
                    LINKEDIN_PAGE
                  </a>
                </div>
              </div>

            </div>

            {/* Right Contact Form panel */}
            <div className="lg:col-span-7 bg-white dark:bg-brand-dark-card border border-zinc-200/50 dark:border-white/5 rounded-3xl p-8 shadow-sm text-left">
              <h4 className="font-heading text-xl font-bold text-brand-black dark:text-white tracking-wide mb-6">
                Direct Inquiry Terminal
              </h4>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Sender Name</label>
                    <input
                      type="text"
                      className="w-full bg-brand-cream/40 dark:bg-brand-black/20 border border-zinc-200/70 dark:border-white/5 text-brand-black dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all"
                      placeholder="e.g. John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Return Email</label>
                    <input
                      type="email"
                      className="w-full bg-brand-cream/40 dark:bg-[#1c1c1c]/40 border border-zinc-200/70 dark:border-white/5 text-brand-black dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all"
                      placeholder="e.g. contact@business.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Message Subject</label>
                  <input
                    type="text"
                    className="w-full bg-brand-cream/40 dark:bg-brand-black/20 border border-zinc-200/70 dark:border-white/5 text-brand-black dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all font-sans"
                    placeholder="e.g. Hiring request / Spatial demo consultation"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Project Details / Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-brand-cream/40 dark:bg-brand-black/20 border border-zinc-200/70 dark:border-white/5 text-brand-black dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all"
                    placeholder="Elaborate on core engineering metrics required, budget expectations, or tech stack requirements..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Status displays */}
                {formStatus === "success" && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl space-y-1 text-xs animate-fade-in font-mono">
                    <div className="flex items-center gap-1.5 font-bold font-mono">
                      <CheckCircle className="h-4 w-4" />
                      <span>Message Dispatched Cleanly!</span>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-mono">
                      Your submission logged successfully. Trace confirmation coordinate: <span className="text-[#FF5A1F] font-bold">{submissionId}</span>. Harmandeep's automated inbox scheduler has enqueued the response route.
                    </p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl space-y-1 text-xs animate-fade-in font-mono">
                    <p className="font-bold flex items-center gap-1.5 font-mono">
                      <AlertCircle className="h-4 w-4" />
                      <span>Connection Timed Out</span>
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-mono">
                      Local post gate experienced temporary downtime. Please attempt backup communication directly via email at 01harmandeep@gmail.com!
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="bg-brand-orange hover:bg-brand-orange/95 text-white font-heading font-semibold text-xs py-3.5 px-6 rounded-xl transition-all shadow shadow-brand-orange/15 cursor-pointer disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{formStatus === "sending" ? "Dispatched Transmission..." : "Send Message Transmission"}</span>
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
