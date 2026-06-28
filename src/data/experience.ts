export type ExperienceMetricIcon =
  | "server"
  | "brain"
  | "zap"
  | "gauge"
  | "users"
  | "cloud"
  | "book"
  | "award"
  | "rocket";

export interface ExperienceMetric {
  icon: ExperienceMetricIcon;
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type: "full-time" | "internship" | "other";
  logo?: string;
  tagline: string;
  metrics?: ExperienceMetric[];
  technologies: string[];
  link?: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "adp-sde",
    company: "ADP (Automatic Data Processing, Inc.)",
    role: "Software Engineer I · Member Technical",
    period: "Dec 2025 — Present",
    location: "Hyderabad, India (Hybrid)",
    type: "full-time",
    logo: "adp",
    tagline:
      "Payroll & tax APIs at scale · Agentic AI platform · Unified tax migration",
    metrics: [
      { icon: "server", value: "3M+", label: "Payrolls / month" },
      { icon: "gauge", value: "99.99%", label: "SLA" },
      { icon: "zap", value: "<100ms", label: "p99 latency" },
      { icon: "brain", value: "90%", label: "Setup time cut" },
    ],
    technologies: [
      "Node.js",
      "FastAPI",
      "Kafka",
      "Redis",
      "LLMs",
      "RAG",
      "Splunk",
      "Docker",
    ],
  },
  {
    id: "adp-intern",
    company: "ADP (Automatic Data Processing, Inc.)",
    role: "Software Engineer Intern",
    period: "Jul 2025 — Nov 2025",
    location: "Hyderabad, India (Hybrid)",
    type: "internship",
    logo: "adp",
    tagline: "Full-stack portal · AWS automation · PES data portal POC",
    metrics: [
      { icon: "server", value: "10K+", label: "Daily requests" },
      { icon: "zap", value: "60%", label: "DB load cut" },
      { icon: "cloud", value: "90%", label: "Manual effort saved" },
    ],
    technologies: [
      "ASP.NET Core",
      "React",
      "SQL Server",
      "Redis",
      "AWS",
      "JWT",
    ],
    link: "https://drive.google.com/file/d/1aM2JT2qNjE4OsQrocBAUqvcJiizPxd0K/view?usp=sharing",
  },
  {
    id: "ieee",
    company: "IEEE",
    role: "Research Contributor & Student Member",
    period: "Dec 2021 — Jan 2023",
    location: "Chandigarh University",
    type: "other",
    logo: "ieee",
    tagline: "7 IEEE-SCOPUS papers · Best Paper @ CCICT'24",
    metrics: [
      { icon: "book", value: "7", label: "IEEE papers" },
      { icon: "award", value: "Best", label: "Paper award" },
    ],
    technologies: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    link: "https://cict23.bmiet.net/proceedings/pdfs/CCICT2024-1sjBvpXHlRhMfe9ll1wlwn/746200a578/746200a578.pdf",
  },
  {
    id: "internshala",
    company: "Internshala",
    role: "Campus Ambassador",
    period: "Feb 2023 — May 2023",
    location: "Remote",
    type: "other",
    logo: "internshala",
    tagline: "Tech upskilling outreach & campus growth",
    metrics: [
      { icon: "users", value: "120+", label: "New signups" },
      { icon: "rocket", value: "Outreach", label: "Campus growth" },
    ],
    technologies: ["Community", "Outreach", "Leadership"],
  },
];
