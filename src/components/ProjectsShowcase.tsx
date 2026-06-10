import React, { useState } from "react";
import { PROJECTS_DATA, Project } from "../data";
import { Github, ExternalLink, Sparkles, CheckCircle2, ChevronRight, Sliders, Play, TrendingUp, HelpCircle, Activity } from "lucide-react";

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  // Interactive Simulation variables
  const [simProject, setSimProject] = useState<string | null>(null);
  const [simInput, setSimInput] = useState("");
  const [simLog, setSimLog] = useState<string[]>([]);
  const [simResults, setSimResults] = useState<any>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Solar variables
  const [solarTemp, setSolarTemp] = useState(28);
  const [solarCloud, setSolarCloud] = useState(40);

  // Resume variables
  const [candidateTag, setCandidateTag] = useState("AI Model");

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
  };

  const startDemoSimulation = (projectId: string) => {
    setSimProject(projectId);
    setIsDemoModalOpen(true);
    setSimLog(["Initializing simulation loop...", `Selected system module: [${projectId}]`]);
    setSimResults(null);
    setIsSimulating(false);
    
    if (projectId === "smartdesk-ai") {
      setSimInput("Harmandeep pose mesh");
    } else if (projectId === "talentscout-ai") {
      setSimInput("senior_resume.pdf");
    } else if (projectId === "solar-power") {
      setSimInput("");
    } else if (projectId === "hand-gesture") {
      setSimInput("");
    }
  };

  const runSystemSimulation = () => {
    if (!simProject) return;
    setIsSimulating(true);
    
    if (simProject === "smartdesk-ai") {
      setSimLog(prev => [...prev, "Opening input microphone stream: OK", "Reading user webcam device parameters...", "Skeletal Mesh detection matching: STABLE"]);
      setTimeout(() => {
        setSimLog(prev => [...prev, "Found posture deviation: [Left Angle: 14° | Head drop: -3.5cm]", "Issuing micro-vibration alarm triggers.", "Writing telemetry payload to database."]);
        setSimResults({
          attentionScore: "94.2%",
          neckStrainState: "Correction Alert Sent",
          systemLatency: "94ms (Edge-Compiled)"
        });
        setIsSimulating(false);
      }, 1500);
    } 
    
    else if (simProject === "talentscout-ai") {
      setSimLog(prev => [...prev, `Uploading target document: ${simInput || "candidate_portfolio.docx"}`, "Compiling vector embeddings via transformer weights...", "Comparing skill indices tags matching: " + candidateTag]);
      setTimeout(() => {
        setSimLog(prev => [...prev, "Matched candidate keys score: 98.4%", "Running automated interview prompt checklist...", "Generating final performance audit."]);
        setSimResults({
          matchAccuracy: "96.5% Matching Index",
          suggestedRank: "Tier-1 / Senior Technical",
          recommendedAction: "Proceed to Live Panel Offer"
        });
        setIsSimulating(false);
      }, 1600);
    }
    
    else if (simProject === "solar-power") {
      setSimLog(prev => [...prev, `Reading barometric variables: [Temp: ${solarTemp}°C, Cloud Density: ${solarCloud}%]`, "Evaluating ensemble regression nodes (XGBoost, Random Forest)...", "Compilating 36h solar charging forecasts..."]);
      setTimeout(() => {
        // Simple predictable calculation mimicking model weights regression
        const predictedKwh = Math.round((solarTemp * 15.4) * (1 - solarCloud / 120));
        setSimLog(prev => [...prev, "Ensemble forest node weights evaluation complete.", `Model prediction accuracy: 96.8%`]);
        setSimResults({
          projectedOutput: `${predictedKwh} kWh`,
          batteryEfficiencyGain: "+18.2% battery optimal charge",
          gridLoadState: "Safe margin threshold (Green)"
        });
        setIsSimulating(false);
      }, 1400);
    }
    
    else if (simProject === "hand-gesture") {
      setSimLog(prev => [...prev, "Tracking MediaPipe skeletal hand vertices...", "Establishing virtual cursor mapping boundary parameters.", "Reading mouse delta coordinate matrices..."]);
      setTimeout(() => {
        setSimLog(prev => [...prev, "Skeletal hand mapped. Gesture parsed: DOUBLE_CLICK", "System navigation input dispatched cleanly."]);
        setSimResults({
          coordinateDelta: "Δx: 12.5px | Δy: -4.2px",
          coordinateStatus: "STABLE",
          cpuUsage: "3.2% (Low overhead active)"
        });
        setIsSimulating(false);
      }, 1200);
    }
  };

  // Beautiful CSS/SVG styled abstract illustrations fitting each project
  const renderProjectIllustration = (id: string) => {
    if (id === "smartdesk-ai") {
      return (
        <div className="absolute inset-0 bg-[#0A0A0A] flex flex-col justify-between p-4 font-mono select-none overflow-hidden text-xs">
          <div className="flex justify-between text-[#FF5A1F] opacity-60">
            <span>SYS_AUDIO_STREAM</span>
            <span>PCM: 16KHZ</span>
          </div>
          {/* Animated Waveform */}
          <div className="flex items-center justify-center space-x-1 h-20">
            {[3, 8, 4, 12, 10, 6, 2, 7, 14, 5, 11, 4, 9, 3].map((val, idx) => (
              <span
                key={idx}
                className="w-1 bg-[#FF5A1F] rounded animate-bounce"
                style={{ height: `${val * 4}px`, animationDelay: `${idx * 0.08}s` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-zinc-600 text-[10px]">
            <span>ATTN_INDEX: 94%</span>
            <span>LATENCY: 94ms</span>
          </div>
        </div>
      );
    }
    if (id === "talentscout-ai") {
      return (
        <div className="absolute inset-0 bg-[#0E0E0E] flex flex-col justify-between p-4 font-mono overflow-hidden text-[10px]">
          <div className="text-zinc-500 flex items-center justify-between border-b border-white/5 pb-2">
            <span>TALENTSCOUT_DB</span>
            <span>TAG_RECRUITMENT</span>
          </div>
          <div className="space-y-2 my-auto text-left">
            <div className="flex justify-between items-center bg-zinc-800/40 p-1.5 rounded border border-white/5">
              <span className="text-zinc-400">PDF_PARSE.sh</span>
              <span className="text-emerald-400 font-bold">MATCH_98%</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-800/40 p-1.5 rounded border border-white/5">
              <span className="text-zinc-400">AUTOMATED_CHAT</span>
              <span className="text-brand-orange font-bold">READY</span>
            </div>
          </div>
          <div className="flex justify-between text-[9px] text-zinc-600 border-t border-white/5 pt-2">
            <span>TOTAL_PARSED: 1,200</span>
            <span>SYS_OK</span>
          </div>
        </div>
      );
    }
    if (id === "solar-power") {
      return (
        <div className="absolute inset-0 bg-[#0B0B0B] flex flex-col justify-between p-4 font-mono overflow-hidden text-[10px]">
          <div className="text-zinc-500 flex justify-between">
            <span>GRID_TELEMETRY</span>
            <span>MODEL: XGBOOST</span>
          </div>
          {/* Custom SVG line Chart */}
          <div className="my-auto flex items-end justify-center h-20">
            <svg viewBox="0 0 100 40" className="w-full h-full text-brand-orange opacity-80" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M 0 35 Q 15 15 30 25 T 60 5 T 90 20 L 100 15" />
              {/* Reference grid coordinates */}
              <line x1="0" y1="35" x2="100" y2="35" stroke="rgba(255,255,255,0.05)" />
              <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" />
            </svg>
          </div>
          <div className="flex justify-between text-[9px] text-[#FF5A1F]">
            <span>FORECAST: +18.4%</span>
            <span>ACCURACY: 96.5%</span>
          </div>
        </div>
      );
    }
    // Hand Gesture Mouse Controller representation
    return (
      <div className="absolute inset-0 bg-[#0A0A0A] flex flex-col justify-between p-4 font-mono overflow-hidden text-[10px]">
        <div className="text-zinc-500 flex justify-between">
          <span>MEDIAPIPE_PALM</span>
          <span>CV_COORDS</span>
        </div>
        {/* skeletal mesh wireframe */}
        <div className="relative flex-grow flex items-center justify-center my-1">
          <svg className="w-24 h-24 text-[#FF5A1F]/30" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Skeletal connections */}
            <circle cx="48" cy="74" r="3" fill="#FF5A1F" /> {/* wrist */}
            <line x1="48" y1="74" x2="30" y2="54" />
            <line x1="48" y1="74" x2="42" y2="45" />
            <line x1="48" y1="74" x2="55" y2="45" />
            <line x1="48" y1="74" x2="68" y2="52" />

            <circle cx="30" cy="54" r="2.5" fill="#FF5A1F" />
            <circle cx="42" cy="45" r="2.5" fill="#FF5A1F" />
            <circle cx="55" cy="45" r="2.5" fill="#FF5A1F" />
            <circle cx="68" cy="52" r="2.5" fill="#FF5A1F" />

            {/* Fingertips */}
            <line x1="30" y1="54" x2="18" y2="34" />
            <line x1="42" y1="45" x2="38" y2="22" />
            <line x1="55" y1="45" x2="58" y2="18" />
            <line x1="68" y1="52" x2="78" y2="32" />

            <circle cx="18" cy="34" r="2" fill="#FFBB00" className="animate-ping" />
            <circle cx="38" cy="22" r="2" fill="#FFBB00" />
            <circle cx="58" cy="18" r="2" fill="#FFBB00" />
            <circle cx="78" cy="32" r="2" fill="#FFBB00" />
          </svg>
        </div>
        <div className="flex justify-between text-[9px] text-zinc-600">
          <span>SYS_CURSOR: CONVERTED</span>
          <span>CPU: &lt;4%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-brand-cream/40 dark:bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4 max-w-xl text-left">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 px-3 py-1 rounded">
              PORTFOLIO_RELEASE
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-black dark:text-white tracking-tight">
              Featured Creations
            </h2>
            <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 font-light">
              A meticulously curated selection of automated machine learning solutions, computer vision nodes, and interactive tools built in full-stack Node environments.
            </p>
          </div>
          
          <div className="font-mono text-xs text-brand-orange border border-brand-orange/30 rounded-lg px-4 py-2 bg-brand-orange/5 hidden lg:block">
            DEPLOYMENT: <span className="font-bold">ALL_ONLINE_ACTIVE</span>
          </div>
        </div>

        {/* Projects Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project: Project) => (
            <div
              key={project.id}
              className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-[#FF5A1F]/35 hover:-translate-y-1.5 transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-brand-orange/5 rounded-full blur-2xl -z-10" />

              {/* Card visual illustration top header area */}
              <div className="h-48 relative border-b border-white/5 overflow-hidden">
                {renderProjectIllustration(project.id)}
                
                {/* Tech hover overlay indicator */}
                <div className="absolute inset-0 bg-[#FF5A1F]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-white text-center">
                  <Sparkles className="h-6 w-6 text-white mb-2 animate-pulse" />
                  <p className="text-sm font-bold tracking-wide">Interactive AI Twin Sandbox Available</p>
                  <p className="text-xs text-brand-cream/80 max-w-[200px] mt-1">Tap 'Simulate Engine' to test live forecast regressions or mesh calculations</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-brand-orange tracking-widest bg-brand-orange/10 px-2.5 py-1 rounded">
                    {project.tags[0]}
                  </span>
                  
                  <h3 className="font-heading text-lg font-bold text-white tracking-wide mt-3 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                  
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mt-3">
                    {project.description}
                  </p>
                </div>

                {/* Technology tags */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono bg-white/5 text-zinc-300 px-2.5 py-0.5 rounded border border-white/5 hover:border-[#FF5A1F]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar Footer */}
              <div className="px-6 py-4 bg-[#0A0A0A] border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => startDemoSimulation(project.id)}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-heading font-semibold text-[11px] px-3 py-2 rounded-lg flex items-center space-x-1 transition-all active:scale-95 cursor-pointer"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>Interactive Sim</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openCaseStudy(project)}
                    className="text-[11px] font-mono text-zinc-400 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg hover:border-white transition-all cursor-pointer"
                  >
                    Case Study
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Simulation Sandbox Modal */}
        {isDemoModalOpen && simProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="bg-[#0B0B0B] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col font-mono text-xs text-zinc-300">
              
              {/* Terminal Head */}
              <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                  <span className="font-bold text-white">SIMULATOR_CORE_STREAM_v0.9</span>
                </div>
                <button
                  onClick={() => setIsDemoModalOpen(false)}
                  className="text-zinc-500 hover:text-white font-bold transition-colors cursor-pointer"
                >
                  [CLOSE_X]
                </button>
              </div>

              {/* Terminal instructions dashboard */}
              <div className="p-5 bg-[#070707] space-y-4">
                <div className="p-3.5 bg-zinc-900/50 rounded-lg border border-white/5 space-y-1 text-[11px]">
                  <p className="font-bold text-[#FF5A1F] uppercase flex items-center gap-1.5 font-heading">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Selected: {PROJECTS_DATA.find(p => p.id === simProject)?.title}</span>
                  </p>
                  <p className="text-zinc-400 leading-normal">
                    This browser-sandbox tests Harmandeep's model execution routes. Adjust input values and hit compilation.
                  </p>
                </div>

                {/* Variable adjustment inputs */}
                <div className="space-y-3 pt-2">
                  {simProject === 'smartdesk-ai' && (
                    <div className="space-y-1">
                      <label className="text-zinc-400">POSTURE_INPUT_DATA:</label>
                      <input
                        type="text"
                        className="w-full bg-[#111] border border-white/5 p-2 rounded focus:outline-none text-brand-orange text-xs"
                        value={simInput}
                        onChange={(e) => setSimInput(e.target.value)}
                      />
                    </div>
                  )}

                  {simProject === 'talentscout-ai' && (
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-zinc-400">TARGET_PORTFOLIO_FILENAME:</label>
                        <input
                          type="text"
                          className="w-full bg-[#111] border border-white/5 p-2 rounded focus:outline-none text-brand-orange text-xs"
                          value={simInput}
                          onChange={(e) => setSimInput(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-zinc-400">TARGET_RECRUITMENT_VECTORS_TAG:</label>
                        <div className="flex gap-2">
                          {["AI Model", "React", "Docker", "FastAPI"].map(tg => (
                            <button
                              key={tg}
                              onClick={() => setCandidateTag(tg)}
                              className={`px-3 py-1.5 rounded transition-all ${candidateTag === tg ? "bg-[#FF5A1F] text-white" : "bg-zinc-800/75 text-zinc-400"}`}
                            >
                              {tg}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {simProject === 'solar-power' && (
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] text-zinc-400 mb-1">
                          <span className="flex items-center gap-1">
                            <Sliders className="h-3 w-3" />
                            <span>ATMOSPHERE_TEMPERATURE:</span>
                          </span>
                          <span className="text-white">{solarTemp}°C</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="45"
                          value={solarTemp}
                          onChange={(e) => setSolarTemp(Number(e.target.value))}
                          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] text-zinc-400 mb-1">
                          <span className="flex items-center gap-1">
                            <Activity className="h-3 w-3" />
                            <span>CLOUD_COVERAGE_INDEX:</span>
                          </span>
                          <span className="text-white">{solarCloud}% Density</span>
                        </div>
                        <input
                          type="range"
                          max="100"
                          value={solarCloud}
                          onChange={(e) => setSolarCloud(Number(e.target.value))}
                          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                        />
                      </div>
                    </div>
                  )}

                  {simProject === 'hand-gesture' && (
                    <div className="p-4 bg-zinc-900/60 rounded border border-white/5 text-center flex flex-col items-center justify-center space-y-2 h-24">
                      <div className="h-2.5 w-2.5 rounded-full bg-brand-orange animate-ping" />
                      <p className="text-zinc-400 text-[11px]">Move cursor dynamically in modal frame boundary</p>
                      <p className="text-[10px] text-brand-orange/70">X-coord stabilization calculations active</p>
                    </div>
                  )}

                  <button
                    onClick={runSystemSimulation}
                    disabled={isSimulating}
                    className="w-full py-2.5 rounded bg-brand-orange hover:bg-brand-orange/90 font-bold text-white text-center transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSimulating ? "EVALUATING MODEL NODES..." : "RUN MODEL SIMULATION"}
                  </button>
                </div>

                {/* Console readout feed log lines */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <p className="text-zinc-500 font-bold text-[11px]">CONSOLE_TELEMETRY:</p>
                  <div className="bg-[#030303] border border-white/5 rounded-lg p-3 h-28 overflow-y-auto scrollbar-thin text-[10px] leading-relaxed space-y-1 text-zinc-400 flex flex-col justify-start text-left">
                    {simLog.map((log, lIdx) => (
                      <p key={lIdx} className={lIdx === 0 ? "text-zinc-600" : ""}>&gt; {log}</p>
                    ))}
                    {isSimulating && <span className="animate-pulse text-[#FF5A1F]">&gt; Loading weights regressions...</span>}
                  </div>
                </div>

                {/* Simulated computed values results */}
                {simResults && (
                  <div className="p-4 bg-gradient-to-r from-brand-orange/10 to-transparent border border-brand-orange/20 rounded-xl space-y-2 animate-fade-in text-left">
                    <p className="font-heading font-bold text-brand-orange text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Model Inference Success</span>
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-1 text-[11px]">
                      {Object.entries(simResults).map(([key, val]: [string, any]) => (
                        <div key={key} className="space-y-0.5">
                          <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-wide">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <p className="text-white font-mono font-semibold">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* Detailed Case Study Modal layout representation */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="bg-[#121212] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col p-6 sm:p-8 relative text-left">
              
              <button
                onClick={closeCaseStudy}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white text-xs font-mono bg-white/5 px-2.5 py-1 rounded border border-white/15 hover:border-white/30 transition-all cursor-pointer"
              >
                [CLOSE_X]
              </button>

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-orange uppercase bg-white/5 border border-[#FF5A1F]/25 px-2.5 py-1 rounded">
                    CASE_BLUEPRINT
                  </span>
                  
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="border-t border-b border-white/5 py-4 space-y-2">
                  <p className="text-xs text-zinc-300 leading-relaxed font-light">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="space-y-3.5">
                  <h4 className="font-heading text-sm font-bold text-brand-orange tracking-wider uppercase">
                    Core Functional Modules
                  </h4>
                  
                  <div className="space-y-2.5">
                    {selectedProject.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                        <span className="font-light leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 mt-4 p-4 rounded-xl flex items-center space-x-3.5">
                  <div className="p-2.5 bg-brand-orange/10 rounded-lg text-brand-orange flex-shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Core Measured KPI Outcome</span>
                    <p className="text-xs text-brand-cream/90 mt-0.5">{selectedProject.results}</p>
                  </div>
                </div>

                {/* Modal actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono bg-white/5 border border-white/5 text-zinc-300 px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white font-heading font-semibold text-xs px-5 py-2.5 rounded-lg flex items-center space-x-1.5 transition-all shadow"
                  >
                    <Github className="h-4 w-4" />
                    <span>Explore Codebase</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
