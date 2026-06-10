import React, { useState } from "react";
import { Cpu, Terminal, Zap, Layers, Play, CheckCircle2, RefreshCw } from "lucide-react";

interface AiTool {
  id: string;
  name: string;
  provider: string;
  badge: string;
  avatarUrl: string;
  description: string;
  usageSnippet: string;
  features: string[];
  vibeColor: string;
}

const AI_TOOLS_DATA: AiTool[] = [
  {
    id: "google-studio",
    name: "Google AI Studio",
    provider: "Gemini Pro / Flash",
    badge: "LLM API & Prompt Tuning",
    vibeColor: "from-blue-500 to-indigo-600",
    avatarUrl: "https://i.ibb.co/3mS6g1Qn/google-ai-studio-logo.png", // fallback visual representations
    description: "Utilized for multi-modal context exploration, prompt testing, and backend agent prototyping. Perfect for zero-friction experiments with massive token contexts.",
    features: [
      "Gemini 1.5 Pro deep context indexing",
      "System instruction testing & negative guardrails",
      "Structured JSON schema outputs verification",
      "Server-side SDK translation setups"
    ],
    usageSnippet: `from google import genai
from google.genai import types

client = genai.Client()
response = client.models.generate_content(
    model='gemini-1.5-flash',
    contents='Analyze solar radiation telemetry...',
    config=types.GenerateContentConfig(
        response_mime_type="application/json",
        response_schema=SolarTelemetry,
    ),
)`
  },
  {
    id: "claude",
    name: "Anthropic Claude",
    provider: "Claude 3.5 Sonnet",
    badge: "System Logic & Algorithms",
    vibeColor: "from-amber-600 to-orange-700",
    avatarUrl: "https://i.ibb.co/Ld89H9px/claude-logo.jpg",
    description: "Leveraged for writing complex algorithmic structures, multi-stage pipeline layouts, refactoring numerical calculations, and code review safety validations.",
    features: [
      "Rigorous type systems verification & refactoring",
      "Drafting mathematical coordinate tracking steps",
      "Advanced state architecture modeling",
      "Clean code pattern compliance"
    ],
    usageSnippet: `import anthropic

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    system="You are an expert Python compiler agent.",
    messages=[
        {"role": "user", "content": "Optimize this multi-dim OpenCV array."}
    ]
)`
  },
  {
    id: "groq",
    name: "Groq Cloud",
    provider: "LLaMA-3 ultra-low latency",
    badge: "Inference Speed Optimization",
    vibeColor: "from-emerald-500 to-teal-600",
    avatarUrl: "https://i.ibb.co/8L4CjZ9y/groq-logo.png",
    description: "Used to build low-latency pipeline steps requiring high-speed conversational agents or real-time intent extraction loops.",
    features: [
      "Sub-100ms time-to-first-token responses",
      "High-speed parsing of spoken text commands",
      "Parallel backend agent request workers",
      "Streamlined open model endpoints"
    ],
    usageSnippet: `from groq import Groq

client = Groq()
completion = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "Route voice intents."},
        {"role": "user", "content": "Trigger desk lighting ambient mode."}
    ],
    temperature=0.0
)`
  },
  {
    id: "napkin",
    name: "Napkin AI",
    provider: "Visual Flow Diagrams",
    badge: "Architecture & Documentation",
    vibeColor: "from-purple-500 to-pink-600",
    avatarUrl: "https://i.ibb.co/3mS6g1Qn/napkin-ai-logo.jpg",
    description: "Employed for sketching visual representations of system architecture, data ingestion pipelines, and machine learning models for documentation.",
    features: [
      "Architectural dependency visualization",
      "Creating clear dataset ingestion flowcharts",
      "Documenting multi-layer neural network states",
      "Streamlining technical concept handoffs"
    ],
    usageSnippet: `# Napkin Visual Integration Architecture
# [Input Telemetry] -> [Pandas Pipeline] -> [FastAPI Router]
#                             |
#                     [Scikit-learn Regressor] -> [Forecasting Output]
print("Visual telemetry flow generated via Napkin.")`
  },
  {
    id: "replit",
    name: "Replit",
    provider: "Instant Backend Sandbox",
    badge: "Rapid Prototyping IDE",
    vibeColor: "from-red-500 to-rose-600",
    avatarUrl: "https://i.ibb.co/8L4CjZ9y/replit-logo.jpg",
    description: "Used as a cloud-native testing workspace to host quick live endpoints, run web hook targets, and perform continuous pipeline simulations.",
    features: [
      "Zero-setup cloud testing sandbox envs",
      "Fast API web hook callback targets",
      "Isolated multi-host testing scenarios",
      "Shared live execution terminals"
    ],
    usageSnippet: `from fastapi import FastAPI
# Replit deployment setup for immediate API verification

app = FastAPI()

@app.get("/sandbox-health")
def read_root():
    return {"status": "sandboxed_live", "workspace": "replit"}`
  }
];

export default function AiToolsExploration() {
  const [selectedToolId, setSelectedToolId] = useState<string>("google-studio");
  const [isRunningSim, setIsRunningSim] = useState<boolean>(false);
  const [simOutput, setSimOutput] = useState<string>("");

  const selectedTool = AI_TOOLS_DATA.find((t) => t.id === selectedToolId) || AI_TOOLS_DATA[0];

  const handleRunSimulation = () => {
    setIsRunningSim(true);
    setSimOutput("Connecting secure client session...\n");
    
    setTimeout(() => {
      setSimOutput((prev) => prev + "Compiling script schema and environment keys...\n");
    }, 600);

    setTimeout(() => {
      setSimOutput((prev) => prev + `Success: Authenticated ${selectedTool.name} API successfully!\n`);
    }, 1200);

    setTimeout(() => {
      let outputBody = "";
      if (selectedTool.id === "google-studio") {
        outputBody = ">> Response 200 OK:\n{\n  'solar_prediction_kw': 4.88,\n  'confidence': 0.92,\n  'model': 'gemini-1.5-flash'\n}";
      } else if (selectedTool.id === "claude") {
        outputBody = ">> Algorithmic analysis complete. 0 warnings. Space complexity: O(1). Execution time optimized by 28.5%.";
      } else if (selectedTool.id === "groq") {
        outputBody = ">> LLaMA output completed in 82ms:\nIntent detected: 'AMBIENT_WAKE_LIGHTS' (Confidence: 0.985)";
      } else if (selectedTool.id === "napkin") {
        outputBody = ">> Core Flowchart Exported: 'B-Tech_CSE_Thesis_Map.svg' saved. Visual layers: 4.";
      } else {
        outputBody = ">> Fast API Sandbox Running at http://localhost:8000/sandbox-health\n{\n  'status': 'sandboxed_live',\n  'workspace': 'replit'\n}";
      }
      setSimOutput((prev) => prev + outputBody);
      setIsRunningSim(false);
    }, 1800);
  };

  return (
    <section id="ai-hub" className="py-24 bg-brand-cream/30 dark:bg-brand-black w-full relative overflow-hidden border-t border-zinc-200/50 dark:border-white/5">
      {/* Background ambient detail */}
      <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] bg-brand-orange/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 px-3 py-1 rounded">
            AI_ORCHESTRATION_HUB
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-black dark:text-white tracking-tight">
            Work with Advanced AI Platforms
          </h2>
          <div className="h-1 w-16 bg-brand-orange mx-auto rounded" />
          <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
            I leverage state-of-the-art closed/open model weights, high-speed API sandboxes, and modern diagrams to build smart backend microservices.
          </p>
        </div>

        {/* Layout: Selector Tab on Left, Interactive Simulation Board on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase px-1 text-left mb-4">
              AI Tools Spectrum
            </p>
            
            {AI_TOOLS_DATA.map((tool) => {
              const isActive = tool.id === selectedToolId;
              return (
                <button
                  key={tool.id}
                  onClick={() => {
                    setSelectedToolId(tool.id);
                    setSimOutput("");
                  }}
                  className={`w-full p-4 rounded-xl text-left border flex items-center gap-4 transition-all active:scale-99 cursor-pointer ${
                    isActive
                      ? "bg-white dark:bg-brand-dark-card border-brand-orange shadow-md scale-[1.01]"
                      : "bg-zinc-50/50 hover:bg-zinc-100 dark:bg-[#121212]/35 dark:hover:bg-[#121212]/80 border-dashed border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10"
                  }`}
                >
                  <div className={`h-11 w-11 rounded-full bg-gradient-to-tr ${tool.vibeColor} flex items-center justify-center text-white font-extrabold tracking-tight text-lg shadow-sm shrink-0`}>
                    {tool.name[0]}
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-extrabold text-sm text-brand-black dark:text-white truncate">
                        {tool.name}
                      </h4>
                      <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-brand-orange/15 text-brand-orange"
                          : "bg-zinc-200 dark:bg-white/5 text-zinc-500 dark:text-zinc-400"
                      }`}>
                        {tool.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-light truncate mt-0.5">
                      {tool.provider}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Tool Display & Python API Playground Simulation */}
          <div className="lg:col-span-7 bg-white dark:bg-brand-dark-card rounded-2xl border border-zinc-200 dark:border-white/5 shadow-xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px]">
            <div>
              {/* Tool Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-white/5 text-left">
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-black dark:text-white">
                    {selectedTool.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-0.5">
                    Primary usage: <span className="text-brand-orange font-bold uppercase">{selectedTool.badge}</span>
                  </p>
                </div>
                
                {/* Simulated action button */}
                <button
                  type="button"
                  onClick={handleRunSimulation}
                  disabled={isRunningSim}
                  className="px-4 py-2.5 rounded-lg bg-brand-orange text-white hover:bg-brand-orange/95 text-xs font-semibold font-heading select-none flex items-center gap-2 shadow-sm shadow-brand-orange/15 hover:scale-[1.02] active:scale-98 transition-all shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {isRunningSim ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Play className="h-3.5 w-3.5 fill-current" />
                  )}
                  <span>{isRunningSim ? "Running Sandbox..." : "Simulate Script"}</span>
                </button>
              </div>

              {/* Description & bullet points */}
              <div className="py-6 space-y-4 text-left">
                <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {selectedTool.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {selectedTool.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-400">
                      <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Workspace Terminal Sandbox area */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 px-1 border-b border-zinc-100 dark:border-white/5 pb-2">
                <span className="flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-brand-orange" />
                  <span>integration_test_{selectedTool.id}.py</span>
                </span>
                <span>Python Compiler v3.11</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Code viewport block */}
                <div className="md:col-span-7 bg-[#151515] text-zinc-300 font-mono text-[11px] p-4 rounded-xl overflow-x-auto border border-white/5 text-left shadow-inner select-all relative">
                  <span className="absolute top-2 right-2 text-[9px] bg-white/5 text-zinc-500 uppercase px-1.5 py-0.5 rounded pointer-events-none">CODE</span>
                  <pre className="whitespace-pre-wrap leading-tight">{selectedTool.usageSnippet}</pre>
                </div>

                {/* Simulated runtime terminal results */}
                <div className="md:col-span-5 bg-brand-cream/60 dark:bg-brand-black/40 border border-zinc-200/50 dark:border-white/5 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] p-4 rounded-xl flex flex-col justify-between text-left min-h-[140px]">
                  <div>
                    <div className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold mb-1.5">TERMINAL LIVE OUTPUT</div>
                    <p className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 leading-tight">
                      {simOutput ? simOutput : "Click 'Simulate Script' to execute API integration sequence in the runtime emulator..."}
                    </p>
                  </div>
                  {isRunningSim && (
                    <div className="flex items-center space-x-2 text-brand-orange animate-pulse font-bold mt-2">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce" />
                      <span>EXECUTING_ORCHESTRATION</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
