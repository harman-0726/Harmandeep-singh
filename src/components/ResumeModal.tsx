import React, { useRef } from "react";
import { X, Printer, Mail, Phone, MapPin, Linkedin, Github, Download, Check, Copy } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText("01harmandeep@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    const printContent = printRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      // Set title temporarily for correct file name on save PDF
      const originalTitle = document.title;
      document.title = "Harmandeep_Singh_Resume";

      window.print();

      document.title = originalTitle;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop with elegant blur */}
      <div 
        className="fixed inset-0 bg-brand-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Hub */}
      <div className="relative bg-brand-cream dark:bg-[#0E0E0E] border border-zinc-200 dark:border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in-up z-10 text-left">
        
        {/* Sticky Action bar */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between bg-zinc-50 dark:bg-[#121212] shrink-0">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <h3 className="font-heading text-sm font-bold tracking-wider text-brand-black dark:text-white uppercase">
              Harmandeep_Singh_Resume.pdf
            </h3>
          </div>
          
          <div className="flex items-center space-x-2.5">
            <button
              onClick={handleCopyLink}
              title="Copy Email"
              className="p-2 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 transition-colors text-xs flex items-center gap-1 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Copy Mail</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-brand-orange text-white hover:bg-brand-orange/95 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 cursor-pointer"
              aria-label="Close modal dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Container - Custom styled for perfect paper preview */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 select-text bg-white dark:bg-[#151515]" ref={printRef}>
          {/* Printable document page layer */}
          <div className="max-w-3xl mx-auto text-brand-black dark:text-zinc-100 font-sans print-section leading-relaxed">
            
            {/* Header Block */}
            <div className="text-center md:text-left border-b-2 border-brand-orange/80 pb-6 mb-6">
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-none">
                Harmandeep Singh
              </h1>
              <p className="text-brand-orange font-mono text-sm uppercase tracking-wide font-bold mt-1.5">
                AI Engineer &amp; Backend Developer
              </p>
              
              {/* Contact Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                  <span>01harmandeep@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                  <span>+91 9888497672</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                  <span>Punjab, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                  <a href="https://www.linkedin.com/in/harmandeep-singh-287322356/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-orange transition-colors">
                    linkedin.com/in/harmandeep-singh-r
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                  <a href="https://github.com/harman-0726" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-orange transition-colors">
                    github.com/harman-0726
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-6 space-y-2">
              <h2 className="text-xs uppercase font-mono font-extrabold tracking-widest text-brand-orange border-b border-zinc-200 dark:border-white/10 pb-1">
                Professional Profile
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 font-light">
                Energetic, detail-oriented Computer Science Engineering student specializing in Advanced Python development, machine learning regressions, and custom API microservices. Proven success engineering scalable prediction engines, offline voice companions, and reliable relational database architectures with clean architectural integrity.
              </p>
            </div>

            {/* Experience Profile */}
            <div className="mb-6 space-y-3">
              <h2 className="text-xs uppercase font-mono font-extrabold tracking-widest text-brand-orange border-b border-zinc-200 dark:border-white/10 pb-1">
                Professional Experience &amp; Internship
              </h2>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-start text-sm">
                    <strong>2B Innovations</strong>
                    <span className="text-xs font-mono text-zinc-500">Jan 2026 - May 2026</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-zinc-600 dark:text-zinc-400 italic mt-0.5">
                    <span>Python with AI Intern</span>
                    <span>Mohali, Punjab</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400 mt-1 space-y-1 font-light">
                    <li>Completed a dedicated internship focusing on advanced Python development and AI model processing steps.</li>
                    <li>Integrated real-time computer vision matrices with OpenCV for video stream capture and feature analysis.</li>
                    <li>Developed high-throughput, asynchronous backend endpoints and route parameters using FastAPI.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Profile */}
            <div className="mb-6 space-y-3">
              <h2 className="text-xs uppercase font-mono font-extrabold tracking-widest text-[#FF5A1F] border-b border-zinc-200 dark:border-white/10 pb-1">
                Education
              </h2>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <strong className="text-zinc-900 dark:text-white font-bold">Rayat Bahra University</strong>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">Aug 2022 - May 2026</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#FF5A1F] dark:text-brand-orange font-semibold mt-0.5">
                    <span>Bachelor of Technology in Computer Science &amp; Engineering &mdash; 7.36 CGPA</span>
                    <span className="font-mono text-zinc-500 font-normal">Mohali, Punjab</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start text-sm">
                    <strong>Sumitra Devi Arya Senior Secondary School, India</strong>
                    <span className="text-xs font-mono text-zinc-500">Completed 2022</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-zinc-600 dark:text-zinc-400 italic mt-0.5">
                    <span>Senior Secondary Education (Class XII CBSE Board)</span>
                    <span>Punjab</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start text-sm">
                    <strong>Sumitra Devi Arya Senior Secondary School, India</strong>
                    <span className="text-xs font-mono text-zinc-500">Completed 2020</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-zinc-600 dark:text-zinc-400 italic mt-0.5">
                    <span>High School Education (Class X CBSE Board)</span>
                    <span>Punjab</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Project Core */}
            <div className="mb-6 space-y-4">
              <h2 className="text-xs uppercase font-mono font-extrabold tracking-widest text-brand-orange border-b border-zinc-200 dark:border-white/10 pb-1">
                Key Technical Projects
              </h2>

              <div className="space-y-4">
                {/* Solar forecasting */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-start text-sm">
                    <strong>Solar Power Forecasting System</strong>
                    <span className="text-xs font-mono text-zinc-500">Spring 2026</span>
                  </div>
                  <p className="text-xs font-mono text-brand-orange font-semibold">
                    Python | FastAPI | Streamlit | Scikit-Learn | Pandas | NumPy
                  </p>
                  <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-1 font-light">
                    <li>Developed an end-to-end Machine Learning web hub predicting solar panel outputs based on barometric pressure and historical panel coefficients.</li>
                    <li>engineered complete feature processing pipeline with Pandas/NumPy, achieving over 90% regression forecast accuracy metrics.</li>
                    <li>Created an interactive Streamlit UI and packaged high-frequency FastAPI backend microservices.</li>
                  </ul>
                </div>

                {/* SmartDesk AI */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-start text-sm">
                    <strong>SmartDesk AI Voice Companion (SPARK)</strong>
                    <span className="text-xs font-mono text-zinc-500">Fall 2025</span>
                  </div>
                  <p className="text-xs font-mono text-brand-orange font-semibold">
                    Python | Speech Recognition | pyttsx3 | Weather &amp; News APIs | OS commands
                  </p>
                  <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-1 font-light">
                    <li>Designed an offline-ready voice room system capturing wake triggers to run system actions.</li>
                    <li>Integrated pyttsx3 text-to-speech for local real-time, zero-network system responses.</li>
                    <li>Implemented custom module routers query-binding live Weather endpoints and News registries.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills Map */}
            <div className="space-y-2">
              <h2 className="text-xs uppercase font-mono font-extrabold tracking-widest text-brand-orange border-b border-zinc-200 dark:border-white/10 pb-1">
                Technical Skills Spectrum
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
                <div className="flex gap-2">
                  <span className="font-mono text-zinc-500 w-24 shrink-0 font-bold">Languages:</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-light">Python (Advanced), Java, SQL</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-zinc-500 w-24 shrink-0 font-bold">Backend:</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-light">FastAPI, Streamlit, RESTful APIs, Microservices</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-zinc-500 w-24 shrink-0 font-bold">ML / AI:</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-light">Scikit-learn, Regression, Classification, Pandas, NumPy</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-zinc-500 w-24 shrink-0 font-bold">Databases:</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-light">MySQL, Relational Databases</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-zinc-500 w-24 shrink-0 font-bold">Tools / Ops:</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-light">Docker, Git &amp; GitHub, Jupyter Notebook, VS Code</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-zinc-500 w-24 shrink-0 font-bold">Concepts:</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-light">Object-Oriented Programming, Data Structures &amp; Algorithms</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Global Print Layout CSS override injections */}
        <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-section, .print-section * {
              visibility: visible;
            }
            .print-section {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              padding: 0 !important;
              margin: 0 !important;
              color: black !important;
              background: white !important;
            }
            a {
              text-decoration: none !important;
              color: black !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
