export interface ProofItem {
  label: string;
  href?: string;
}

export const siteConfig = {
  name: "Deepanshu Jindal",
  title:
    "Deepanshu Jindal | SDE-I @ ADP | Full-Stack & AI Systems Engineer",
  description:
    "Software Engineer building scalable full-stack systems, distributed backends, agentic AI platforms, and production mobile apps. SDE-I @ ADP · 2× Patents · 7 IEEE Papers · LeetCode Guardian (2166).",
  url: "https://deepanshujindal30.github.io/portfolio",
  ogImage: "/og-image.svg",
  email: "deepanshujindal.dev@gmail.com",
  phone: "+91-9760315073",
  location: "Hyderabad, Telangana, India",
  github: "https://github.com/DeepanshuJindal30",
  linkedin: "https://www.linkedin.com/in/deepanshu-jindal-65a163204/",
  leetcode: "https://leetcode.com/Deepanshu_Jindal/",
  codechef: "https://www.codechef.com/users/deepanshu_30",
  resume: "/resume.pdf",
  avatar: "https://avatars.githubusercontent.com/u/87767438?v=4",
  badge:
    "SDE-I @ ADP · Payroll & Tax at Scale · Agentic AI · Distributed Systems",
  heroGreeting: "Hey, I am",
  heroFirstName: "Deepanshu",
  heroRole: "Software Engineer",
  subheadline:
    "I build payroll systems processing 3M+ transactions/month and ship agentic AI platforms that cut engineering workflows from days to hours.",
  proofStrip: [
    { label: "SDE-I @ ADP", href: "https://www.linkedin.com/in/deepanshu-jindal-65a163204/" },
    { label: "LeetCode 2166", href: "https://leetcode.com/Deepanshu_Jindal/" },
    { label: "CodeChef 5★", href: "https://www.codechef.com/users/deepanshu_30" },
    { label: "7 IEEE Papers", href: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4" },
    { label: "2 Patents", href: "https://drive.google.com/file/d/1iRJaoJPVe8h8PBBiYsnCcdwBM5lKyykB/view?usp=sharing" },
    { label: "600+ DSA", href: "https://leetcode.com/Deepanshu_Jindal/" },
  ] satisfies ProofItem[],
  systemStatus: [
    "Payroll APIs",
    "Kafka Pipelines",
    "Agentic AI",
    "React Native",
    "99.99% SLA",
  ],
  about: `I'm a Software Engineer at ADP working on payroll and tax infrastructure processing 3M+ payrolls/month across 500K+ businesses — operating under strict SLA, compliance, and correctness constraints.

I build high-throughput distributed APIs with Redis caching, Kafka event pipelines, circuit breakers, and rate limiting. I also ship agentic AI systems powered by LLMs, RAG, and MCP orchestration that automate complex engineering workflows — reducing setup time from days to hours.

Beyond enterprise systems, I'm a published IEEE-SCOPUS researcher with 7 papers and 2 patents, Academic Topper at Chandigarh University (CGPA 8.9), and a competitive programmer — LeetCode Guardian (2166) and CodeChef 5★ (2003) with 600+ DSA problems solved.`,
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  links: {
    papersFolder:
      "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
    patentsOverview:
      "https://drive.google.com/file/d/1iRJaoJPVe8h8PBBiYsnCcdwBM5lKyykB/view?usp=sharing",
    utilityPatentFolder:
      "https://drive.google.com/drive/folders/1j-Hh_jtBfgh-NpqmuoSQEZ7_N8egiSTs?usp=drive_link",
    designPatentFolder:
      "https://drive.google.com/drive/folders/1xNQHB9OwpsjYBPpfvhW_FQ2Qv_KuebYA?usp=drive_link",
    bestPaperAward:
      "https://cict23.bmiet.net/proceedings/pdfs/CCICT2024-1sjBvpXHlRhMfe9ll1wlwn/746200a578/746200a578.pdf",
    bestPaperLinkedIn:
      "https://www.linkedin.com/posts/deepanshu-jindal-65a163204_bestpaperaward-ccict2024-machinelearning-activity-7200571392419848192-dT1Z",
    academicTopper:
      "https://drive.google.com/file/d/17y8wXhSG7NOrWqoqXZgcay449UTkD87E/view?usp=drive_link",
    adpInternCertificate:
      "https://drive.google.com/file/d/1aM2JT2qNjE4OsQrocBAUqvcJiizPxd0K/view?usp=sharing",
    hackerrank: "https://www.hackerrank.com/profile/deepanshu_jindal",
  },
};
