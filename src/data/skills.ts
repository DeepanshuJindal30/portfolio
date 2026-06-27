export interface SkillOrbitCategory {
  id: string;
  label: string;
  color: string;
  emissive: string;
  skills: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

/** Visual orbit categories — 6 nodes for 3D + mobile UI */
export const skillOrbitCategories: SkillOrbitCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#38bdf8",
    emissive: "#0ea5e9",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Chakra UI"],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#a78bfa",
    emissive: "#7c3aed",
    skills: ["Node.js", "FastAPI", "ASP.NET Core", "REST APIs", "Microservices", "JWT"],
  },
  {
    id: "data",
    label: "Data & Cache",
    color: "#34d399",
    emissive: "#059669",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Supabase"],
  },
  {
    id: "ai",
    label: "AI / ML",
    color: "#fbbf24",
    emissive: "#d97706",
    skills: ["LLMs", "RAG", "MCP", "LangChain", "Gemini", "PyTorch", "YOLOv8"],
  },
  {
    id: "mobile",
    label: "Mobile",
    color: "#f472b6",
    emissive: "#db2777",
    skills: ["React Native", "Expo", "EAS Build", "Android APK", "Mobile UX"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#fb923c",
    emissive: "#ea580c",
    skills: ["Docker", "AWS", "Azure", "CI/CD", "GitHub Actions", "Splunk"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Chakra UI",
      "Responsive UI",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      ".NET Web API",
      "C#",
      "FastAPI",
      "Python",
      "REST APIs",
      "Microservices",
      "API Gateway",
      "JWT",
      "Dapper",
      "EF Core",
    ],
  },
  {
    id: "mern",
    title: "MERN Stack",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "Expo Router",
      "EAS Build",
      "Android APK",
      "Supabase",
      "Mobile UX",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Query Optimization",
      "Redis Caching",
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML / GenAI",
    skills: [
      "LLMs",
      "RAG",
      "MCP",
      "Agentic AI",
      "LangChain",
      "Gemini",
      "GenAI",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "YOLOv8",
      "Hugging Face",
      "Stable Diffusion",
      "GANs",
      "Diffusion Models",
      "FinRL",
      "Streamlit",
      "FAISS",
    ],
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    skills: [
      "Kafka",
      "Redis",
      "Event-Driven Architecture",
      "Caching",
      "Rate Limiting",
      "Circuit Breakers",
      "Idempotent APIs",
      "DLQ Handling",
      "Multi-Tenant Systems",
      "High Throughput APIs",
    ],
  },
  {
    id: "devops",
    title: "DevOps / Cloud",
    skills: [
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Git",
      "AWS",
      "AWS S3",
      "AWS Lambda",
      "Azure",
      "Azure DevOps",
      "Bitbucket",
      "Feature Flags",
      "Swagger",
      "Postman",
    ],
  },
  {
    id: "observability",
    title: "Observability & Reliability",
    skills: [
      "Splunk",
      "Dynatrace",
      "Logging",
      "Monitoring",
      "SLA-Based Systems",
      "LoadRunner",
      "Performance Testing",
    ],
  },
  {
    id: "core",
    title: "Core Engineering",
    skills: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "OOP",
      "Design Patterns",
      "Object-Oriented Design",
    ],
  },
  {
    id: "competitive",
    title: "Competitive Programming",
    skills: [
      "LeetCode Guardian (2166)",
      "CodeChef 5★ (2003)",
      "HackerRank 5★",
      "600+ DSA Problems",
      "Problem Solving",
    ],
  },
];

export const competitiveProgramming = {
  leetcode: { platform: "LeetCode", rating: "Guardian", maxRating: 2166 },
  codechef: { platform: "CodeChef", rating: "5★", maxRating: 2003 },
  problems: { count: "600+", label: "DSA Problems Solved" },
  hackerrank: { platform: "HackerRank", rating: "5★" },
};
