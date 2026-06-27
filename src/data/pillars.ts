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
    title: "Full-Stack Web",
    description: "",
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
    title: "Distributed Systems",
    description: "",
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
    title: "AI / Agentic AI",
    description: "",
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
    title: "Mobile Products",
    description: "",
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
