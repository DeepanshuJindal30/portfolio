export interface Pillar {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export const pillars: Pillar[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Engineering",
    description:
      "Building performant, type-safe web applications with modern React ecosystems and enterprise-grade APIs.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      ".NET Core",
      "REST APIs",
    ],
    icon: "monitor",
  },
  {
    id: "backend",
    title: "Backend & Distributed Systems",
    description:
      "Designing scalable backend architectures with caching, event-driven patterns, and production observability.",
    technologies: [
      "Kafka",
      "Redis",
      "SQL Server",
      "Scalable APIs",
      "API Gateway",
      "Caching",
      "Observability",
    ],
    icon: "server",
  },
  {
    id: "ai",
    title: "AI / ML / Agentic AI",
    description:
      "Shipping intelligent systems — from RAG pipelines and LLM agents to computer vision and deep learning models.",
    technologies: [
      "LLMs",
      "RAG",
      "MCP",
      "GenAI",
      "ML",
      "DL",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "YOLO",
    ],
    icon: "brain",
  },
  {
    id: "mobile",
    title: "Mobile App & Product Engineering",
    description:
      "End-to-end mobile product development with React Native, Expo builds, and real-world delivery flows.",
    technologies: [
      "React Native",
      "Expo",
      "EAS Build",
      "Supabase",
      "Android APK",
      "Product Flows",
      "Admin Dashboards",
    ],
    icon: "smartphone",
  },
];
