"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, AlertCircle, Minimize2, MessageSquare, X } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AiTwin({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Developer twin initialized! Ask me about Harmandeep's background, vision algorithms, React stack, or credentials. Send a custom prompt or tap one of the shortcuts below.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const suggestedPrompts = [
    "What computer vision models do you deploy?",
    "Tell me about the SmartDesk AI.",
    "Are you available for freelance consultations?",
    "Get Harmandeep's contact details",
  ];

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text) return;

    setErrorStatus(null);
    setInput("");
    
    // Add user message
    const updatedMessages = [...messages, { role: "user" as const, text }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Next.js local gateway offline or secret key mismatch.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model" as const, text: data.reply }]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus("Twin stream connection error. Defaulting to local fallback.");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            text: `Hi from local simulator mode. Harmandeep specializes in advanced Python scripting, machine learning modeling, and high-performance backend systems. Drop your message in the contact form or email directly: 01harmandeep@gmail.com!`,
          },
        ]);
      }, 600);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend(input);
    }
  };

  if (isEmbedded) {
    return (
      <div className="w-full flex flex-col bg-brand-dark-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-[520px]">
        {/* Console Header */}
        <div className="px-4 py-3 bg-[#0B0B0B] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse" />
              <div className="absolute top-0 left-0 h-2.5 w-2.5 rounded-full bg-brand-orange/40 animate-ping" />
            </div>
            <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
              HARMANDEEP_AI_TWIN.sh
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              SECURE SOURCE
            </span>
          </div>
        </div>

        {/* Message Log Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0D0D0D] scrollbar-thin">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col max-w-[85%] ${
                msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
              }`}
            >
              <div
                className={`text-xs font-mono mb-1 ${
                  msg.role === "user" ? "text-brand-orange" : "text-zinc-500"
                }`}
              >
                {msg.role === "user" ? "GUEST_QUERY" : "AI_AGENT_RESPONSE"}
              </div>
              <div
                className={`px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 break-words leading-relaxed ${
                  msg.role === "user"
                    ? "bg-brand-orange text-white rounded-tr-none"
                    : "bg-[#1E1E1E] text-zinc-200 border border-white/5 rounded-tl-none font-sans"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex flex-col max-w-[80%] mr-auto items-start">
              <div className="text-xs font-mono text-zinc-500 mb-1">AI_AGENT_THINKING</div>
              <div className="px-4 py-3 rounded-lg bg-[#111111] border border-white/5 rounded-tl-none text-zinc-400 flex items-center space-x-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:-0.3s]" />
                <div className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:-0.15s]" />
                <div className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-bounce" />
              </div>
            </div>
          )}

          {errorStatus && (
            <div className="flex items-center space-x-2 text-brand-orange/90 text-[11px] font-mono bg-brand-orange/5 px-3 py-1.5 rounded border border-brand-orange/10">
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
              <span>{errorStatus}</span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggestion block */}
        <div className="px-3 py-2 bg-[#0B0B0B] border-t border-white/5 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
          {suggestedPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              disabled={loading}
              className="text-[11px] font-mono bg-[#1E1E1E] text-zinc-300 border border-white/10 hover:border-brand-orange hover:text-brand-orange px-2.5 py-1 rounded-md transition-all active:scale-95 disabled:opacity-50 inline-block"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#080808] border-t border-white/10 flex items-center space-x-2">
          <input
            type="text"
            className="flex-grow bg-[#141414] text-white placeholder-zinc-500 text-sm font-mono rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-orange border border-white/5"
            placeholder="Write terminal query (e.g. skills)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={loading}
          />
          <button
            onClick={() => handleSend(input)}
            disabled={loading || !input.trim()}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white p-2.5 rounded-lg transition-all active:scale-95 disabled:bg-zinc-800 disabled:text-zinc-500 cursor-pointer"
          >
            <Send className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-brand-orange hover:bg-brand-orange/90 shadow-[0_4px_24px_rgba(255,90,31,0.45)] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        aria-label="Toggle AI Virtual Twin"
      >
        {isOpen ? (
          <X className="h-6 w-6 transform rotate-90 duration-300 group-hover:rotate-180" />
        ) : (
          <div className="relative">
            <MessageSquare className="h-6 w-6 group-hover:scale-110" />
            <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0B0B0B]"></span>
            </span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[420px] h-[500px] rounded-2xl flex flex-col shadow-[0_12px_44px_rgba(0,0,0,0.4)] glass-panel text-white animate-fade-in border border-white/10 overflow-hidden bg-[#0F0F0FCC]">
          
          <div className="bg-[#0B0B0B]/90 border-b border-white/10 px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="h-3 w-3 rounded-full bg-brand-orange animate-pulse" />
              <div>
                <h4 className="text-sm font-semibold tracking-wide">Harmandeep's Virtual Twin</h4>
                <p className="text-[10px] font-mono text-zinc-400">Gemini-3.5-Flash Stack Ready</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-[#0B0B0B]/45 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col max-w-[85%] ${
                  msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`text-[9px] font-mono mb-0.5 ${
                    msg.role === "user" ? "text-brand-orange/90" : "text-zinc-505"
                  }`}
                >
                  {msg.role === "user" ? "RECRUITER" : "AI"}
                </div>
                <div
                  className={`px-3 py-2 rounded-xl text-xs leading-relaxed transition-all break-words ${
                    msg.role === "user"
                      ? "bg-brand-orange text-white rounded-tr-none"
                      : "bg-[#1E1E1E] text-zinc-200 border border-white/5 rounded-tl-none font-sans"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <span className="flex items-center space-x-1.5 p-2 px-3 rounded-xl bg-zinc-800/50 max-w-[120px] self-start">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:0.1s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:0.2s]" />
              </span>
            )}

            {errorStatus && (
              <div className="p-2 border border-brand-orange/25 bg-brand-orange/5 text-brand-orange text-[10px] rounded-lg font-mono flex items-center space-x-1.5">
                <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{errorStatus}</span>
              </div>
            )}
            
            <div ref={bottomRef} />
          </div>

          <div className="px-3 py-2 border-t border-white/5 overflow-x-auto whitespace-nowrap bg-[#0F0F0F] flex space-x-1.5 scrollbar-none">
            {suggestedPrompts.slice(0, 3).map((p, index) => (
              <button
                key={index}
                onClick={() => handleSend(p)}
                disabled={loading}
                className="text-[10px] font-mono font-medium border border-white/10 hover:border-brand-orange text-zinc-300 hover:text-brand-orange bg-[#141414] px-2 py-1 rounded transition-all inline-block active:scale-95 disabled:opacity-40"
              >
                {p}
              </button>
            ))}
          </div>

          <div className="p-3 bg-[#0B0B0B] border-t border-white/10 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask me something about Harmandeep..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={loading}
              className="flex-grow bg-[#161616] text-white placeholder-zinc-500 border border-white/5 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-orange"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={loading || !input.trim()}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white p-2 rounded-lg cursor-pointer transition-all active:scale-95 disabled:bg-zinc-800 disabled:text-zinc-500"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
