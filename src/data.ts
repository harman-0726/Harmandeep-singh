export interface Skill {
  name: string;
  level: number; // Percentage
  description: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  results: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  avatarUrl: string;
}

export interface ServicePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  type: "work" | "education" | "award";
  description: string;
  tags: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
  slug: string;
  content: string;
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 95, description: "Advanced system scripting, clean data pipelines, and algorithms", iconName: "Terminal" },
      { name: "OpenCV", level: 92, description: "Real-time image profiling, feature mapping, and matrix calculations", iconName: "Camera" },
      { name: "MediaPipe", level: 88, description: "Tracking skeletal hand coordinates, joint angles, and biometric triggers", iconName: "BrainCircuit" },
      { name: "Scikit-Learn", level: 85, description: "Statistical machine learning models, ensembled regressions, and data preprocessing", iconName: "Sliders" },
      { name: "Pandas & NumPy", level: 90, description: "High-performance data manipulation, telemetry analysis, and statistical processing", iconName: "Database" },
    ],
  },
  {
    id: "backend-db",
    title: "Backend & Systems",
    skills: [
      { name: "FastAPI", level: 92, description: "Asynchronous performance, automated OpenAPI generation, and clean microservices", iconName: "Zap" },
      { name: "SQL & Relational DBs", level: 86, description: "Optimized MySQL and SQLite queries, schemas, and relational parameters", iconName: "Database" },
    ],
  },
  {
    id: "tools-devops",
    title: "Developer Tools & Environment",
    skills: [
      { name: "f-docker", level: 85, description: "Isolated backend containerizer and sandboxed virtualization runtime envs", iconName: "Layers" },
      { name: "Google Colab", level: 88, description: "Interactive machine learning experimentations, code scripts, and models evaluation", iconName: "Code" },
      { name: "GitHub", level: 93, description: "Remote code repository hosting, automated workspace pipelines, and code versions", iconName: "Github" },
      { name: "Git", level: 90, description: "Version history management, local staging commits, and branch synchronization", iconName: "GitBranch" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "smartdesk-ai",
    title: "SmartDesk AI Assistant",
    subtitle: "Voice-Controlled Ambient Desk Companion",
    description: "An offline-first voice-controlled AI assistant tracking face posture, executing ambient commands, and automating configurations through speech recognition and APIs.",
    longDescription: "SmartDesk AI represents a speech and vision assistant. Built as a voice-controlled room/assistant setup integrating Weather and News APIs, custom text-to-speech feedback, speech recognition models, and a modular architecture for seamless feature extensions.",
    tags: ["Python", "Speech Recognition", "pyttsx3", "APIs", "MediaPipe"],
    features: [
      "Natural speech recognition with pyttsx3 feedback",
      "Seamless Weather and News API real-time retrieval",
      "Robust modular system architecture",
      "Low latency custom voice commanding"
    ],
    imageUrl: "smartdesk_preview",
    githubUrl: "https://github.com/harman-0726/SPARK",
    liveUrl: "#demo",
    results: "Designed as an offline voice hub with low overhead and optimized natural speech controls."
  },
  {
    id: "talentscout-ai",
    title: "TalentScout AI Hiring Assistant",
    subtitle: "Automated Intelligent Hiring Workflow Optimizer",
    description: "An automated agency-grade workflow optimizer that parses resume databases, evaluates portfolio codes, and facilitates mock developer screening trials.",
    longDescription: "TalentScout AI automates top-of-funnel recruiting by running candidate resumes through deep transformer models. The system evaluates portfolio files on GitHub directly, verifies structural patterns, and runs micro-interview simulations with candidate feedback pipelines.",
    tags: ["Python", "FastAPI", "LlamaIndex", "MySql", "Rest APIs"],
    features: [
      "Resume parsing supporting pdf, docx, and txt files",
      "Aesthetic grading of structural code conventions on client portfolios",
      "Automated conversational interview screens powered by Gemini",
      "Detailed candidate scoring metrics map for hiring managers"
    ],
    imageUrl: "talentscout_preview",
    githubUrl: "https://github.com/harman-0726",
    liveUrl: "#demo",
    results: "Shortened screening phases from weeks to hours; logged a 94% approval rating from pilot launch engineering leads."
  },
  {
    id: "solar-power",
    title: "Solar Power Forecasting System",
    subtitle: "Highly-Accurate ML Energy Forecasting",
    description: "An end-to-end Machine Learning model predicting solar energy generation with real-time weather analytics, built on Python and FastAPI.",
    longDescription: "This advanced system predicts solar energy generation utilizing real-time weather parameters. It leverages Scikit-Learn regression algorithms with Pandas and NumPy feature engineering to achieve a correlation accuracy benchmark of ~0.90 R2, supported by a fast streamlined FastAPI backend API.",
    tags: ["Python", "FastAPI", "Streamlit", "Scikit-Learn", "Pandas", "NumPy"],
    features: [
      "Ensemble regressions and feature engineering pipelines",
      "High correlation forecasting (~0.90 R2 accuracy)",
      "Interactive Streamlit visualization dashboard interface",
      "Fully containerized using Docker for portable cloud deployments"
    ],
    imageUrl: "solar_power_preview",
    githubUrl: "https://github.com/harman-0726/-Solar-Power-Forecast-App",
    liveUrl: "#demo",
    results: "Delivered state of art charging forecasting supporting grid stability with highly accurate metrics."
  },
  {
    id: "hand-gesture",
    title: "Hand Gesture Mouse Controller",
    subtitle: "Zero-Hardware Spatial Gesture Mouse Navigation",
    description: "A hardware-free spatial computing system mapping facial focus and skeletal hand mapping to control OS cursor vectors smoothly.",
    longDescription: "This machine learning tool interfaces with standard webcams to replace input hardware. Utilizing MediaPipe hand skeletons and customizable OpenCV coordinate stabilizers, it tracks fingertip vectors, scroll operations, drag behaviors, and cursor precision clicks.",
    tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    features: [
      "No-latency palm coordinates stabilization model",
      "Intuitive coordinate zoom and virtual scroll bindings",
      "Low CPU overhead optimization (<4% background core usage)",
      "Adjustable mouse speed and smoothing coefficients"
    ],
    imageUrl: "hand_gesture_preview",
    githubUrl: "https://github.com/harman-0726",
    liveUrl: "#demo",
    results: "Created an intuitive, accessible interface for motor-impaired testers, showing similar click accuracy to physical trackpads."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [];

export const SERVICES_DATA: ServicePlan[] = [];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "time-1",
    year: "Jan 2026 - May 2026",
    role: "Python with AI Intern",
    company: "2B Innovations",
    type: "work",
    description: "Hands-on engineering internship specializing in Python application frameworks and intelligent systems. Leveraged OpenCV for keypoint tracking filters and developed fast, scalable, well-structured backend JSON microservices leveraging modern FastAPI tools.",
    tags: ["Python", "OpenCV", "FastAPI", "APIs", "Machine Learning"]
  },
  {
    id: "time-2",
    year: "2022 - 2026",
    role: "Bachelor of Technology, Computer Science & Engineering (7.36 CGPA)",
    company: "Rayat Bahra University, Mohali District, India",
    type: "education",
    description: "Specialized in Python programming, machine learning regressions, data structures and algorithms, and secure backend database architectures. Graduated with a cumulative 7.36 CGPA.",
    tags: ["Python", "DSA", "FastAPI", "Scikit-Learn", "Java", "SQL", "7.36 CGPA"]
  },
  {
    id: "time-3",
    year: "2020 - 2022",
    role: "Senior Secondary Education (Class XII, CBSE Board)",
    company: "Sumitra Devi Arya Senior Secondary School",
    type: "education",
    description: "Completed Grade 12 Class XII (CBSE Board Examinations) with a strong academic focus on Physics, Chemistry, and advanced Mathematics.",
    tags: ["CBSE Board", "Mathematics", "Physics", "Computer Fundamentals"]
  },
  {
    id: "time-4",
    year: "2018 - 2020",
    role: "High School Education (Class X, CBSE Board)",
    company: "Sumitra Devi Arya Senior Secondary School",
    type: "education",
    description: "Completed Grade 10 Class X (CBSE Board Examinations) with excellent foundational achievements across analytics, sciences, and primary scholastic tracks.",
    tags: ["CBSE Board", "Mathematics", "Sciences", "Analytical Foundations"]
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    title: "Building Voice-Activated Desktop AI Assistants with Python & React",
    excerpt: "Learn how to build a low-latency, fully modular voice companion system that analyzes skeletal postures and listens offline.",
    category: "AI & Full-Stack",
    readTime: "6 min read",
    date: "June 2, 2026",
    imageUrl: "blog_desktop_ai",
    slug: "building-voice-desktop-ai",
    content: "Deploying intelligent ambient applications directly alongside physical desks requires lightweight local models. This article outlines the architectural blueprint of Harmandeep's SmartDesk AI assistant. We explore using local pyaudio streams for fast triggers, training custom model layers for robust neck angle calculations to limit posture strain, and mounting asynchronous server-side APIs to send analytics to a sleek React dashboard."
  },
  {
    id: "art-2",
    title: "The 2026 Computer Vision Roadmap: From Matrix Operations to YOLOv11",
    excerpt: "A comprehensive developer guide detailing modern visual models, real-time matrix filters, and skeletal pose pipelines.",
    category: "Computer Vision",
    readTime: "8 min read",
    date: "May 18, 2026",
    imageUrl: "blog_cv_roadmap",
    slug: "computer-vision-roadmap",
    content: "Computer vision is shifting from classic OpenCV matrix manipulations of structural color channels to deep spatial skeletal understanding. This breakdown summarizes core milestones to master: mathematical edge profiling, custom YOLO model finetuning, and keypoint stabilization matrices. We discuss performance tweaks to run inference smoothly on low-power CPU hardware."
  },
  {
    id: "art-3",
    title: "Architectural Deep Dive: Moving from FastAPI to Asynchronous REST Hubs",
    excerpt: "Why FastAPI's async event loop shines for handling real-time model inferences compared to traditional Flask frameworks.",
    category: "Backend Architecture",
    readTime: "5 min read",
    date: "April 29, 2026",
    imageUrl: "blog_fastapi_async",
    slug: "fastapi-async-architecture",
    content: "In modern software stacks, backend performance directly impacts model responsiveness. When a client-side device sends camera frames to a server, multi-threading bottlenecks can stall standard Python web services. FastAPI utilizes modern ASGI servers to run hundreds of non-blocking I/O queries simultaneously, making it the perfect bridge for neural network inference engines."
  }
];
