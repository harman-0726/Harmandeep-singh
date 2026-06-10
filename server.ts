import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK securely on the server
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not defined.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Store contact submissions in-memory during server lifecycle for live demonstration
const contactSubmissions: any[] = [];

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Submit contact form
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  const submission = {
    id: `msg_${Date.now()}`,
    name,
    email,
    subject: subject || "No Subject",
    message,
    timestamp: new Date().toISOString(),
  };
  contactSubmissions.push(submission);
  console.log("New Contact Submission:", submission);
  res.json({ success: true, message: "Message sent successfully!", id: submission.id });
});

// View all contact submissions (highly useful utility for checking contacts in live dev)
app.get("/api/contacts", (req, res) => {
  res.json(contactSubmissions);
});

// Gemini-powered chatbot representing Harmandeep Singh's interactive virtual twin
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    res.status(400).json({ error: "Message is required." });
    return;
  }

  try {
    const ai = getGeminiClient();
    if (process.env.GEMINI_API_KEY) {
      const harmandeepContext = `
You are the interactive virtual AI twin / representative of Harmandeep Singh, an elite AI Engineer and Backend Developer.
Your goal is to answer questions from recruiters, clients, founders, and other developers who are visiting his premium portfolio website.
Speak in a highly professional, confident, yet friendly and collaborative tone. Keep responses helpful and concise. Avoid overly dry or robotic writing.

Information about Harmandeep Singh:
- **Title**: AI Engineer & Backend Developer
- **Email**: 01harmandeep@gmail.com
- **Core Statement**: I build intelligent, scalable, and visually impactful software solutions, bridging high-end computer vision / machine learning algorithms with reliable backend architectures.
- **Location**: Remote / Global (Punjab, India)
- **Top Featured Projects**:
  1. *SmartDesk AI Assistant*: A voice-controlled AI assistant utilizing Python, OpenCV, FastAPI, and React. It acts as an ambient desk companion with speech triggers.
  2. *TalentScout AI Hiring Assistant*: An automated intelligent hiring workflow optimizer that sorts resumes, parses technical portfolios, and runs micro-interviews matching ideal tags.
  3. *Solar Power Prediction System*: A machine learning system utilizing random forests & XGBoost models to provide time-series forecasting of solar cell grid energy generations.
  4. *Hand Gesture Mouse Controller*: An OpenCV + MediaPipe integration that maps facial tracking and coordinate hand movements to seamlessly drive system cursor navigation without hardware interfaces.
- **Technical Skills**:
  * AI & Machine Learning: Python, TensorFlow, PyTorch, OpenCV, YOLO, Scikit-Learn, NumPy, MediaPipe
  * Web Development: React, Next.js, Node.js, Express, FastAPI, Flask, MongoDB, PostgreSQL, Drizzle ORM, Tailwind CSS
  * Tools & Cloud: Git, Docker, Linux system operations, AWS, Firebase, Vercel, esbuild, bundlers
- **Achievements**:
  * 20+ fully realized enterprise and experimental software modules shipped.
  * 500+ active GitHub contributions and open-source contributions.
  * 10+ advanced technical certifications in neural networks, computer vision, and cloud engineering.
- **Availability**: Open for premium remote positions, technical consulting, freelancing, and impactful startup partnerships.

Format your responses nicely using neat markdown. If asked on how to contact him, direct them to write in the contact form below or email directly to 01harmandeep@gmail.com.
Do not invent anything outside this scope. If you don't know the answer, politely offer to pass the query onto Harmandeep via his Contact Form!
      `.trim();

      // Format history into contents structure
      const contentsList: any[] = [];
      if (history && Array.isArray(history)) {
        history.forEach((msg: any) => {
          contentsList.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }]
          });
        });
      }
      contentsList.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contentsList,
        config: {
          systemInstruction: harmandeepContext,
          temperature: 0.7,
        }
      });

      res.json({ reply: response.text });
    } else {
      // Elegant simulated response if API key is not yet set up
      setTimeout(() => {
        let reply = `Hello! I'm Harmandeep's AI Assistant. (Note: Server is currently running on developer demo mode without an active GEMINI_API_KEY, but I am ready to serve!).\n\nHarmandeep is a highly skilled **AI Engineer & Backend Developer** who builds intelligent computer vision tools, machine learning pipelines, and robust backend applications.\n\nYou can contact him at **01harmandeep@gmail.com** or send a message using the interactive contact form on this page!`;
        const lower = message.toLowerCase();
        if (lower.includes("skill") || lower.includes("technology") || lower.includes("code")) {
          reply = `Harmandeep specializes in:\n- **AI & ML**: Python, OpenCV, YOLO, PyTorch, TensorFlow, MediaPipe\n- **Full-Stack**: React, Node.js, FastAPI, Flask, PostgreSQL, Tailwind CSS\n- **DevOps**: Docker, AWS, Git, Linux.`;
        } else if (lower.includes("project") || lower.includes("portfolio")) {
          reply = `Here are some of Harmandeep's stellar projects:\n1. **SmartDesk AI Assistant** - Voice controls + computer vision.\n2. **TalentScout AI Hiring Assistant** - Intelligent resume sorting and metrics.\n3. **Solar Power Prediction System** - Advanced forecasting models.\n4. **Hand Gesture Mouse Controller** - Real-time gesture tracking using MediaPipe.`;
        } else if (lower.includes("hire") || lower.includes("job") || lower.includes("resume") || lower.includes("work")) {
          reply = `Harmandeep is available for full-time roles, contract work, and consultancy! He brings deep expertise in model deployment, custom API design, and highly interactive user interfaces. Please drop a message in the form below or connect via **01harmandeep@gmail.com**!`;
        }
        res.json({ reply });
      }, 500);
    }
  } catch (error: any) {
    console.error("Gemini AI API Error:", error);
    res.status(500).json({ error: "Failed to communicate with AI twin.", details: error.message });
  }
});

// Vite server middleware integration or static serving
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Portfolio running at http://localhost:${PORT}`);
  });
}

setupServer();
