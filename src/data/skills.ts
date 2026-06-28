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
    skills: ["React Native", "Expo", "EAS Build", "Android", "Mobile UX"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#fb923c",
    emissive: "#ea580c",
    skills: ["Docker", "AWS", "Azure", "CI/CD", "GitHub Actions", "Splunk"],
  },
];

/** Simple Icons slug + brand color for CDN logos */
export const techIconMap: Record<
  string,
  { slug: string; color: string; label: string }
> = {
  React: { slug: "react", color: "61DAFB", label: "React" },
  "Next.js": { slug: "nextdotjs", color: "FFFFFF", label: "Next.js" },
  TypeScript: { slug: "typescript", color: "3178C6", label: "TypeScript" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4", label: "Tailwind" },
  Redux: { slug: "redux", color: "764ABC", label: "Redux" },
  "Chakra UI": { slug: "chakraui", color: "319795", label: "Chakra UI" },
  "Node.js": { slug: "nodedotjs", color: "339933", label: "Node.js" },
  FastAPI: { slug: "fastapi", color: "009688", label: "FastAPI" },
  "ASP.NET Core": { slug: "dotnet", color: "512BD4", label: ".NET" },
  "REST APIs": { slug: "openapiinitiative", color: "6BA539", label: "REST" },
  Microservices: { slug: "docker", color: "2496ED", label: "Microservices" },
  JWT: { slug: "jsonwebtokens", color: "FFFFFF", label: "JWT" },
  "SQL Server": { slug: "microsoftsqlserver", color: "CC2927", label: "SQL Server" },
  PostgreSQL: { slug: "postgresql", color: "4169E1", label: "PostgreSQL" },
  MongoDB: { slug: "mongodb", color: "47A248", label: "MongoDB" },
  Redis: { slug: "redis", color: "FF4438", label: "Redis" },
  Kafka: { slug: "apachekafka", color: "FFFFFF", label: "Kafka" },
  Supabase: { slug: "supabase", color: "3FCF8E", label: "Supabase" },
  LLMs: { slug: "openai", color: "412991", label: "LLMs" },
  RAG: { slug: "langchain", color: "1C3C3C", label: "RAG" },
  MCP: { slug: "anthropic", color: "D4A574", label: "MCP" },
  LangChain: { slug: "langchain", color: "1C3C3C", label: "LangChain" },
  Gemini: { slug: "googlegemini", color: "8E75B2", label: "Gemini" },
  PyTorch: { slug: "pytorch", color: "EE4C2C", label: "PyTorch" },
  YOLOv8: { slug: "ultralytics", color: "FFFFFF", label: "YOLOv8" },
  "React Native": { slug: "react", color: "61DAFB", label: "React Native" },
  Expo: { slug: "expo", color: "FFFFFF", label: "Expo" },
  "EAS Build": { slug: "expo", color: "FFFFFF", label: "EAS" },
  Android: { slug: "android", color: "3DDC84", label: "Android" },
  "Mobile UX": { slug: "figma", color: "F24E1E", label: "Mobile UX" },
  Docker: { slug: "docker", color: "2496ED", label: "Docker" },
  AWS: { slug: "amazonwebservices", color: "FF9900", label: "AWS" },
  Azure: { slug: "microsoftazure", color: "0078D4", label: "Azure" },
  "CI/CD": { slug: "githubactions", color: "2088FF", label: "CI/CD" },
  "GitHub Actions": { slug: "githubactions", color: "2088FF", label: "GitHub Actions" },
  Splunk: { slug: "splunk", color: "FFFFFF", label: "Splunk" },
  Python: { slug: "python", color: "3776AB", label: "Python" },
  JavaScript: { slug: "javascript", color: "F7DF1E", label: "JavaScript" },
  Streamlit: { slug: "streamlit", color: "FF4B4B", label: "Streamlit" },
  FAISS: { slug: "meta", color: "0467DF", label: "FAISS" },
  TensorFlow: { slug: "tensorflow", color: "FF6F00", label: "TensorFlow" },
  OpenCV: { slug: "opencv", color: "5C3EE8", label: "OpenCV" },
};

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
