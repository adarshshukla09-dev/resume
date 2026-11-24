import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Adarsh Shukla",
  initials: "AS",
  url: "http://localhost:3000",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra",
  description:
    "Aspiring Full Stack Developer | AI & Generative AI. Computer Engineering student at PCCOER building practical web, mobile, and AI-powered applications.",
  summary:
    "I'm a Computer Engineering student at PCCOER, Ravet, Pune, passionate about Full Stack Web Development, Artificial Intelligence (AI), and Generative AI. I focus on developing my programming and software engineering skills while exploring modern technologies—including React Native, RAG, LLMs, API integration, and database management—to build practical, user-friendly applications. Currently actively looking for internship opportunities in Full Stack, Software, Web, and AI Engineering.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adarshshukla09887@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adarshshukla09-dev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adarsh-shukla-24b173364",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:adarshshukla09887@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance Full-Stack & AI Engineering",
      badges: [],
      href: "#",
      location: "Pune, India",
      title: "Full-Stack & AI Developer",
      logoUrl: "",
      start: "2025",
      end: "Present",
      description:
        "Building full-stack web apps, mobile tools, and AI/RAG workflows using TypeScript, Next.js App Router, React Native, Expo, FastAPI, Fastify, PostgreSQL, Drizzle ORM, LangChain, LangGraph, and Qdrant/ChromaDB. Delivered custom client work including an orthopedic clinic showcase with Next.js and Three.js, a granite product catalog, and logistics landing page concepts.",
    },
  ],
  education: [
    {
      school:
        "Pimpri Chinchwad College of Engineering & Research (PCCOER), Ravet",
      href: "#",
      degree: "Bachelor of Technology, Computer Science",
      logoUrl: "",
      start: "September 2025",
      end: "August 2029",
    },
  ],
  projects: [
    {
      title: "aPYQs",
      href: "#",
      dates: "September 2026",
      active: true,
      description:
        "React Native mobile app for browsing previous year exam questions, styled with NativeWind with custom app icons and splash screens.",
      technologies: ["React Native", "Expo", "NativeWind", "TypeScript"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "rn-terminal",
      href: "#",
      dates: "September 2026",
      active: true,
      description:
        "Android terminal emulator component built in React Native using xterm.js inside react-native-webview.",
      technologies: ["React Native", "TypeScript", "xterm.js", "WebView"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "academy-saas",
      href: "#",
      dates: "August 2026",
      active: true,
      description:
        "Multi-tenant academy management SaaS foundation built with Next.js App Router, Supabase SSR with Google OAuth, and Neon PostgreSQL.",
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Neon"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "cortex-hub",
      href: "#",
      dates: "July 2026",
      active: true,
      description:
        "AI agent workspace with dynamic agent creation forms and modular third-party connectors.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Drizzle ORM",
        "Better Auth",
        "shadcn/ui",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "ai-auto-whatsappChannel & micro-waha",
      href: "#",
      dates: "June 2026",
      active: true,
      description:
        "Automated WhatsApp Channel broadcaster built with LangGraph.js, Vercel AI SDK, Groq, MongoDB, Fastify, and Baileys, deployed on Render and triggered via GitHub Actions for exam prep posts.",
      technologies: [
        "TypeScript",
        "LangGraph.js",
        "Vercel AI SDK",
        "Fastify",
        "MongoDB",
        "GitHub Actions",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "food-recomender",
      href: "#",
      dates: "June 2026",
      active: true,
      description:
        "Food label analyzer and healthier alternative recommender using TypeScript, Python, LangGraph, Gemini, Groq, and Streamlit.",
      technologies: ["TypeScript", "Python", "LangGraph", "Streamlit"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Corrective RAG (CRAG)",
      href: "#",
      dates: "May 2026",
      active: true,
      description:
        "Corrective RAG retrieval pipeline combining LangGraph, ChromaDB, Gemini, and web search fallback.",
      technologies: ["Python", "LangGraph", "ChromaDB", "RAG"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Munim-ji",
      href: "#",
      dates: "March 2026",
      active: true,
      description:
        "Udhar ledger and credit management app with customer accounts, transaction tracking, live sales, and printable PDF invoices.",
      technologies: ["TypeScript", "Next.js", "PostgreSQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Flow.",
      href: "#",
      dates: "February 2026",
      active: true,
      description: "Daily habit and task tracker with progress analytics.",
      technologies: ["Next.js", "TypeScript", "Drizzle ORM", "Better Auth"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "WiFi CSI RESCUE (Team DOMINATRS)",
      dates: "August 2026",
      location: "PCCOER, Ravet, Pune",
      description:
        "Built a non-visual disaster-response human-presence sensing prototype using ESP32 Wi-Fi Channel State Information (CSI), ML inference, and a live monitoring dashboard alongside teammates Sukrut and Aryan.",
      image: "",
      links: [],
    },
  ],
} as const;
