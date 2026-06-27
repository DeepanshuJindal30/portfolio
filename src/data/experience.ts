export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type: "full-time" | "internship" | "other";
  logo?: string;
  highlights: string[];
  scale?: string[];
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
    highlights: [
      "Designed and owned high-throughput, multi-tenant backend APIs for payroll & tax platform processing 3M+ payrolls/month across 500K+ businesses with 99.99% SLA and <100ms p99 latency",
      "Built end-to-end agentic AI automation platform using Kafka-backed async pipeline and FastAPI — converting Jira tickets into performance-testing workflows, reducing setup time by 90% (5 days → 3 hours)",
      "Led migration from separate Federal and State tax-withholding APIs to a unified GET/PUT contract with backward-compatible routing and zero-downtime phased rollout",
      "Improved batch payroll processing latency by 40% (30 → 18 minutes) by optimizing backend workflows, query patterns, and execution paths",
      "Hardened service reliability with idempotent update semantics, standardized error translation, DLQ handling, and resilient downstream communication",
      "Shipped production changes safely using feature flags and pilot enablement with Splunk/Dynatrace observability",
    ],
    scale: [
      "3M+ payrolls/month",
      "500K+ businesses",
      "99.99% SLA · <100ms p99",
      "94% Redis cache-hit rate",
    ],
    technologies: [
      "Node.js",
      "FastAPI",
      "C#",
      ".NET Web API",
      "Kafka",
      "Redis",
      "SQL Server",
      "LLMs",
      "RAG",
      "MCP",
      "Splunk",
      "Dynatrace",
      "Jenkins",
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
    highlights: [
      "Engineered horizontally scalable full-stack portal (ASP.NET Core + React + Redis + MS SQL) serving 10K+ daily requests — improved scalability by 35% and reduced DB load by 60%",
      "Automated cross-service data synchronization via REST APIs and AWS (S3, Lambda), reducing manual effort by 90% (hours → 10 minutes)",
      "Enhanced data-entry workflows with address autosuggestion, server-side pagination, and debounced API calls — +45% page speed and +80% accuracy",
      "Built Trustee Initiatives / PES Data Portal CRUD systems with JWT authentication and ASP.NET Identity POCs",
    ],
    technologies: [
      "ASP.NET Core",
      "React",
      "Dapper",
      "EF Core",
      "SQL Server",
      "Redis",
      "AWS S3",
      "AWS Lambda",
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
    highlights: [
      "Contributed to IEEE Photonics and Computer Society research initiatives in AI, NLP, ML, and Computer Vision",
      "Co-authored 7 IEEE-SCOPUS research papers on generative AI, finance, cybersecurity, and computer vision",
      "Awarded Best Paper at CCICT'24 for outstanding multimodal AI research",
      "Collaborated with professors and researchers on projects driving technological advancement",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "NLP",
      "Deep Learning",
      "Research",
    ],
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
    highlights: [
      "Drove awareness of tech upskilling programs, resulting in 120+ new signups",
      "Conducted online sessions on internships, resume building, and skill development",
      "Collaborated with Internshala's growth team to boost college outreach visibility",
    ],
    technologies: ["Community Building", "Outreach", "Leadership"],
  },
];
