import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Elegant simulated offline mode if key is not declared
      const lower = message.toLowerCase();
      let reply = `Hello! I'm Harmandeep's AI representative setup. (Next.js is currently running in fallback demo mode as GEMINI_API_KEY is not defined).\n\nHarmandeep is a highly skilled **AI Engineer & Backend Developer** who builds intelligent computer vision systems, ML forecasts, and robust backend integrations.\n\nYou can reach him directly at **01harmandeep@gmail.com** or send a message via the interactive form!`;
      if (lower.includes("skill") || lower.includes("technology") || lower.includes("code")) {
        reply = `Harmandeep specializes in:\n- **AI & ML**: Python, OpenCV, YOLO, PyTorch, TensorFlow, MediaPipe\n- **Full-Stack**: React, Next.js, Node.js, FastAPI, Flask, PostgreSQL, Tailwind CSS\n- **DevOps & Infrastructure**: Docker, AWS, Git, Linux.`;
      } else if (lower.includes("project") || lower.includes("portfolio")) {
        reply = `Here are some of Harmandeep's stellar projects:\n1. **SmartDesk AI Assistant** - Voice controls + computer vision.\n2. **TalentScout AI Hiring Assistant** - Intelligent resume sorting and metrics.\n3. **Solar Power Prediction System** - Advanced forecasting models.\n4. **Hand Gesture Mouse Controller** - Real-time gesture tracking using MediaPipe.`;
      } else if (lower.includes("hire") || lower.includes("job") || lower.includes("work")) {
        reply = `Harmandeep is available for full-time roles, contract work, and consultancy! He brings deep expertise in model deployment, custom API design, and highly interactive user interfaces. Please drop a message in the form below or connect via **01harmandeep@gmail.com**!`;
      }
      return NextResponse.json({ reply });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

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
  2. *TalentScout AI Hiring Assistant*: An automated intelligent hiring workflow optimizer that sorts resumes, parses technical portfolios, and runs micro-interview simulations with candidate feedback pipelines.
  3. *Solar Power Prediction System*: A machine learning system utilizing random forests & XGBoost models to provide time-series forecasting of solar cell grid energy generations.
  4. *Hand Gesture Mouse Controller*: An OpenCV + MediaPipe integration that maps facial tracking and coordinate hand movements to seamlessly drive system cursor navigation without hardware interfaces.
- **Technical Skills**:
  * AI & Machine Learning: Python, TensorFlow, PyTorch, OpenCV, YOLO, Scikit-Learn, NumPy, MediaPipe
  * Web Development: React, Next.js, Node.js, Express, FastAPI, Flask, MongoDB, PostgreSQL, Drizzle ORM, Tailwind CSS
  * Tools & Cloud: Git, Docker, Linux system operations, AWS, Firebase, Vercel, esbuild, bundlers
- **Achievements**:
  * 20+ fully realized enterprise and experimental software modules shipped.
  * 40+ LeetCode / DSA problems solved showing strong algorithmic foundations.
  * 10+ advanced technical certifications in neural networks, computer vision, and cloud engineering.
- **Availability**: Open for premium remote positions, technical consulting, freelancing, and impactful startup partnerships.

Format your responses nicely using neat markdown. If asked on how to contact him, direct them to write in the contact form below or email directly to 01harmandeep@gmail.com.
Do not invent anything outside this scope. If you don't know the answer, politely offer to pass the query onto Harmandeep via his Contact Form!
    `.trim();

    // Format chat history
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        });
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: harmandeepContext,
        temperature: 0.7,
      },
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: any) {
    console.error("Next.JS Gemini Route Handler Error:", error);
    return NextResponse.json(
      { error: "Failed to communicate with AI twin.", details: error.message },
      { status: 500 }
    );
  }
}
