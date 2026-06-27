export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
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
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "C#",
      "FastAPI",
      "REST APIs",
      "Dapper",
      "JWT",
      "Microservices",
      "Distributed Systems",
    ],
  },
  {
    id: "mern",
    title: "MERN",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "EAS Build",
      "Android APK",
      "Supabase",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    skills: [
      "LLMs",
      "RAG",
      "MCP",
      "GenAI",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "YOLOv8",
      "Hugging Face",
      "GANs",
      "Diffusion Models",
    ],
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    skills: [
      "Kafka",
      "Redis",
      "API Gateway",
      "Caching",
      "Rate Limiting",
      "Event-Driven Systems",
    ],
  },
  {
    id: "devops",
    title: "DevOps / Cloud",
    skills: [
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Git",
      "AWS",
      "Azure",
      "Azure DevOps",
      "Bitbucket",
      "CI/CD",
      "Swagger",
      "Postman",
    ],
  },
  {
    id: "observability",
    title: "Observability",
    skills: [
      "Splunk",
      "Dynatrace",
      "Logging",
      "Monitoring",
      "SLA-Based Systems",
    ],
  },
];

export const competitiveProgramming = {
  leetcode: { platform: "LeetCode", rating: "Guardian", maxRating: 2166 },
  codechef: { platform: "CodeChef", rating: "5★", maxRating: 2031 },
  problems: { count: "500+", label: "DSA Problems Solved" },
  hackerrank: { platform: "HackerRank", rating: "5★" },
};
