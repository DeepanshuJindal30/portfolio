export interface ProjectArchitecture {
  steps: string[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  technologies: string[];
  demoVideo: string;
  layout: "browser" | "phone";
  poster?: string;
  screenshots?: string[];
  links: {
    live?: string;
    github?: string;
    apk?: string;
    caseStudy?: string;
  };
}

export interface ProductionProject {
  id: string;
  title: string;
  description: string;
  impact?: string[];
  architecture?: ProjectArchitecture;
  technologies: string[];
  category: "production" | "ai-ml" | "mobile" | "enterprise";
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
    apk?: string;
    screenshots?: string;
  };
  featured?: boolean;
  showcased?: boolean;
  logo?: string;
}

export interface AppScreenshot {
  src: string;
  label: string;
}

export const appurvaPharmacyScreenshots: AppScreenshot[] = [
  { src: "/app-screenshots/home.jpg", label: "Home" },
  { src: "/app-screenshots/categories.jpg", label: "Categories" },
  { src: "/app-screenshots/cart.jpg", label: "Cart" },
  { src: "/app-screenshots/orders.jpg", label: "Orders" },
  { src: "/app-screenshots/profile.jpg", label: "Profile" },
  { src: "/app-screenshots/admin-dashboard.jpg", label: "Admin Dashboard" },
];

export interface MobileApp extends ProductionProject {
  features: string[];
  screenshots: string[];
  screenshotGallery?: AppScreenshot[];
  demoVideo?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architecture: string[];
  screenshots: string[];
  screenshotGallery?: AppScreenshot[];
  demoVideo?: string;
  challenges: string[];
  futureImprovements: string[];
  links: {
    github?: string;
    apk?: string;
    live?: string;
  };
}

export const featuredShowcases: ShowcaseProject[] = [
  {
    id: "appurva-herbals",
    title: "Appurva Herbals",
    tagline:
      "Visual-first doctor catalogue — 15 products, search, filters & one-tap WhatsApp enquiry.",
    category: "Product · Next.js · Vercel",
    technologies: ["Next.js", "Chakra UI", "Framer Motion", "NextAuth", "Vercel"],
    demoVideo: "/videos/appurva-herbals-demo.mp4",
    layout: "browser",
    poster: "/app-screenshots/catalog.png",
    links: {
      live: "https://appurvaherbals.vercel.app",
      github: "https://github.com/DeepanshuJindal30/Appurva-Herbals",
      caseStudy: "/projects/appurva-herbals",
    },
  },
  {
    id: "docusense",
    title: "DocuSense PDF Chatbot",
    tagline:
      "Upload PDFs, chat with your documents — Gemini + LangChain RAG pipeline.",
    category: "AI · Streamlit · RAG",
    technologies: ["Streamlit", "Gemini", "LangChain", "FAISS", "Docker"],
    demoVideo: "/videos/docusense-demo.mp4",
    layout: "browser",
    links: {
      live: "https://gmultichat.streamlit.app/",
      github: "https://github.com/DeepanshuJindal30/chatwithpdf1",
      caseStudy: "/projects/docusense",
    },
  },
];

export const enterpriseProjects: ProductionProject[] = [
  {
    id: "agentic-ai-perf",
    title: "LR Agentic AI — LoadRunner Automation Platform",
    logo: "adp",
    description:
      "Production agentic platform at ADP that reads Jira performance tickets, extracts 10–40 API endpoints via multi-strategy parsing, validates them live against IPE/IAT/FIT environments, and auto-generates Bruno collections, VuGen C scripts, and LoadRunner Controller scenarios — with LLM-guided clarification and checkpoint-resume.",
    impact: [
      "~90% reduction in load-test workflow setup time (days → hours)",
      "Adopted by multiple internal ADP performance engineering teams",
      "13-phase state machine with resume from validation, Bruno, or VuGen checkpoints",
      "AI clarification loop catches payload mismatches & auth issues before execution",
    ],
    architecture: {
      steps: [
        "Jira Fetch & Extract",
        "LLM Clarify + Validate",
        "Bruno + VuGen Generate",
        "Execute + Controller",
      ],
    },
    technologies: [
      "FastAPI",
      "React",
      "Vite",
      "TypeScript",
      "OpenAI",
      "Azure OpenAI",
      "PyWinAuto",
      "Whisper",
      "Bruno",
      "VuGen",
      "LoadRunner",
      "Pydantic",
    ],
    category: "enterprise",
    featured: true,
  },
  {
    id: "unified-tax-api",
    title: "Unified Tax API / Payroll Backend System",
    logo: "adp",
    description:
      "Designed backend API architecture for unified tax withholding workflows — consolidating Federal and State APIs into a unified GET/PUT contract with backward compatibility, zero-downtime rollout, feature flags, and SLA-focused observability.",
    technologies: [
      "Node.js",
      "SQL Server",
      "API Gateway",
      "Feature Flags",
      "Redis",
      "Kafka",
      "Splunk",
      "Dynatrace",
    ],
    category: "enterprise",
    featured: true,
  },
  {
    id: "pes-data-portal",
    title: "PES Data Portal / Trustee Initiative POC",
    logo: "adp",
    description:
      "Built CRUD and authentication POCs for internal data portal workflows with clean layered architecture.",
    technologies: [
      "ASP.NET Core",
      "Dapper",
      "SQL Server",
      "React",
      "JWT",
      "Identity",
    ],
    category: "enterprise",
    featured: true,
  },
];

/** @deprecated Use enterpriseProjects */
export const productionProjects = enterpriseProjects;

export const mobileApps: MobileApp[] = [
  {
    id: "appurva-pharmacy",
    title: "Appurva Pharmacy",
    description:
      "Production pharmacy app — 228+ medicines & wellness products, voice search, Rx upload, live order tracking, and a full admin manager dashboard. Built with React Native, Expo 56, and Supabase Realtime.",
    features: [
      "Home hub — medicines, Rx upload, pet & baby care",
      "Voice search + category filters (228+ products)",
      "Cart → Address → Delivery → Payment checkout",
      "Live order tracking synced via Supabase",
      "Admin dashboard — orders, stock, products, Rx review",
      "Google OAuth · Email OTP · Android APK v1.0.14",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Expo Speech",
      "EAS Build",
      "Android",
    ],
    category: "mobile",
    screenshots: appurvaPharmacyScreenshots.map((s) => s.src),
    screenshotGallery: appurvaPharmacyScreenshots,
    demoVideo: "/videos/appurva-pharmacy-demo.mp4",
    links: {
      caseStudy: "/projects/appurva-pharmacy",
      apk: "/appurva-pharmacy.apk",
    },
    featured: true,
  },
];

/** 2×2 grid — AI/ML projects (excludes live-demo showcases) */
export const moreProjects: ProductionProject[] = [
  {
    id: "kalpchitra",
    title: "KalpChitra.AI",
    description: "Multilingual image synthesis — Best Paper @ CCICT'24.",
    technologies: [
      "React.js",
      "Python",
      "Stable Diffusion",
      "GPT-3",
      "Kafka",
      "TensorFlow",
      "OpenCV",
    ],
    category: "ai-ml",
    featured: true,
    links: {
      live: "https://kalpa-chitra.netlify.app/",
      github: "https://github.com/DeepanshuJindal30/KalpChitra.AI",
    },
  },
  {
    id: "drl-stock",
    title: "DRL Stock Market Prediction",
    description: "Deep RL trading strategy with FinRL backtesting.",
    technologies: [
      "FinRL",
      "Stable-Baselines3",
      "PPO",
      "DDPG",
      "A2C",
      "Python",
    ],
    category: "ai-ml",
    featured: true,
    links: {
      live: "https://stock-visualiser.streamlit.app/",
      github:
        "https://github.com/DeepanshuJindal30/Deep-Reinforcement-Learning-Based-Trading-Strategy",
    },
  },
  {
    id: "food-calorie",
    title: "Food Calorie Detection with YOLOv8",
    description: "YOLOv8 food detection & calorie estimation.",
    technologies: ["YOLOv8", "OpenCV", "CNN", "Image Processing"],
    category: "ai-ml",
    featured: true,
    links: {
      github: "https://github.com/DeepanshuJindal30/Food-Calorie-estimation",
    },
  },
  {
    id: "hyperspectral",
    title: "Hyperspectral Imaging ML Model",
    description: "Neural network for crop DON detection via hyperspectral imaging.",
    technologies: ["Python", "Neural Networks", "Hyperspectral Imaging", "ML"],
    category: "ai-ml",
    links: {
      github:
        "https://github.com/DeepanshuJindal30/Hyperspectral-Imaging-ML-Model",
    },
  },
];

export const personalProjects: ProductionProject[] = [
  {
    id: "docusense",
    title: "DocuSense PDF Chatbot",
    description: "RAG PDF chatbot with Gemini + FAISS vector search.",
    technologies: [
      "Streamlit",
      "Gemini",
      "LangChain",
      "FAISS",
      "Docker",
    ],
    category: "ai-ml",
    featured: true,
    showcased: true,
    links: {
      live: "https://gmultichat.streamlit.app/",
      github: "https://github.com/DeepanshuJindal30/chatwithpdf1",
    },
  },
  {
    id: "kalpchitra",
    title: "KalpChitra.AI",
    description: "Multilingual image synthesis — Best Paper @ CCICT'24.",
    technologies: [
      "React.js",
      "Python",
      "Stable Diffusion",
      "GPT-3",
      "Kafka",
      "TensorFlow",
      "OpenCV",
    ],
    category: "ai-ml",
    featured: true,
    links: {
      live: "https://kalpa-chitra.netlify.app/",
      github: "https://github.com/DeepanshuJindal30/KalpChitra.AI",
    },
  },
  {
    id: "drl-stock",
    title: "DRL Stock Market Prediction",
    description: "Deep RL trading strategy with FinRL backtesting.",
    technologies: [
      "FinRL",
      "Stable-Baselines3",
      "PPO",
      "DDPG",
      "A2C",
      "Python",
    ],
    category: "ai-ml",
    featured: true,
    links: {
      live: "https://stock-visualiser.streamlit.app/",
      github:
        "https://github.com/DeepanshuJindal30/Deep-Reinforcement-Learning-Based-Trading-Strategy",
    },
  },
  {
    id: "food-calorie",
    title: "Food Calorie Detection with YOLOv8",
    description: "YOLOv8 food detection & calorie estimation.",
    technologies: ["YOLOv8", "OpenCV", "CNN", "Image Processing"],
    category: "ai-ml",
    featured: true,
    links: {
      github: "https://github.com/DeepanshuJindal30/Food-Calorie-estimation",
    },
  },
];

export const additionalPersonalProjects: ProductionProject[] = [
  {
    id: "hyperspectral",
    title: "Hyperspectral Imaging ML Model",
    description:
      "Neural network model for crop DON (Deoxynivalenol) detection using hyperspectral imaging data.",
    technologies: ["Python", "Neural Networks", "Hyperspectral Imaging", "ML"],
    category: "ai-ml",
    links: {
      github:
        "https://github.com/DeepanshuJindal30/Hyperspectral-Imaging-ML-Model",
    },
  },
];

/** @deprecated Use personalProjects + additionalPersonalProjects */
export const aiMlProjects: ProductionProject[] = [
  ...personalProjects,
  ...additionalPersonalProjects,
];

export const appurvaPharmacyCaseStudy: CaseStudy = {
  slug: "appurva-pharmacy",
  title: "Appurva Pharmacy",
  tagline:
    "Full-stack mobile pharmacy platform — 228+ products, prescription workflows, live order sync, and admin operations.",
  problem:
    "Local pharmacy operations need a unified mobile experience: customers must search medicines by voice, upload prescriptions, track deliveries in real time, and admins need live control over orders, stock, products, and Rx approvals.",
  solution:
    "Built Appurva Pharmacy as a React Native + Expo 56 app with Supabase backend — Tata 1mg-inspired UX for healthcare commerce, Supabase Realtime order sync, Google OAuth & email OTP auth, and a manager dashboard for end-to-end pharmacy operations.",
  features: [
    "228+ pharmacy products seeded from Supabase catalog",
    "Voice search for medicines (Expo Speech Recognition)",
    "Prescription upload — PDF, JPG, JPEG, PNG",
    "Cart → Address → Delivery → Payment checkout flow",
    "Live order tracking with Supabase Realtime",
    "Admin dashboard — orders, stock, products, Rx, payments",
    "Coupons, UPI/COD payments, push notifications",
    "Android APK v1.0.14 via Expo EAS Build",
  ],
  techStack: [
    "React Native",
    "Expo 56",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Supabase Realtime",
    "Expo Speech Recognition",
    "EAS Build",
    "Android APK",
  ],
  architecture: [
    "React Native mobile client (Expo 56)",
    "Supabase Auth — Google OAuth & email OTP",
    "PostgreSQL — products, orders, prescriptions, coupons",
    "Supabase Storage for prescription images",
    "Row Level Security & admin role enforcement",
    "Realtime subscriptions for live order sync",
    "EAS Build pipeline for Android APK distribution",
  ],
  screenshots: appurvaPharmacyScreenshots.map((s) => s.src),
  screenshotGallery: appurvaPharmacyScreenshots,
  demoVideo: "/videos/appurva-pharmacy-demo.mp4",
  challenges: [
    "Designing Rx upload flow with pharmacist verification",
    "Real-time stock and order sync across admin & customer apps",
    "Voice search with native speech recognition on Android",
    "Multi-step checkout with delivery location attachment",
    "EAS Build configuration for production APK releases",
  ],
  futureImprovements: [
    "Razorpay payment gateway integration",
    "iOS App Store deployment",
    "Real-time delivery tracking with maps",
    "AI medicine interaction warnings",
    "Analytics dashboard for business insights",
  ],
  links: {
    apk: "/appurva-pharmacy.apk",
  },
};

export const appurvaHerbalsCaseStudy: CaseStudy = {
  slug: "appurva-herbals",
  title: "Appurva Herbals",
  tagline:
    "Doctor-facing herbal product catalogue — search, filters, and one-tap WhatsApp enquiry.",
  problem:
    "Herbal product distributors need a fast, visual catalogue for doctors and field reps — without heavy backend complexity or slow PDF brochures.",
  solution:
    "Built a Next.js catalogue with Chakra UI and Framer Motion — 15 products, category filters, search, and WhatsApp deep-links for instant enquiries. Deployed on Vercel with NextAuth-ready structure.",
  features: [
    "15 herbal products with rich imagery",
    "Search and category filters",
    "Product detail pages with dosage info",
    "One-tap WhatsApp enquiry per product",
    "Responsive layout for mobile & desktop",
    "Deployed on Vercel with CI/CD",
  ],
  techStack: [
    "Next.js",
    "Chakra UI",
    "Framer Motion",
    "NextAuth",
    "Vercel",
    "TypeScript",
  ],
  architecture: [
    "Next.js App Router frontend",
    "Static product catalogue data layer",
    "Chakra UI component system",
    "Framer Motion page transitions",
    "WhatsApp deep-link enquiry flow",
    "Vercel edge deployment",
  ],
  screenshots: ["/app-screenshots/catalog.png"],
  screenshotGallery: [
    { src: "/app-screenshots/catalog.png", label: "Product Catalogue" },
  ],
  demoVideo: "/videos/appurva-herbals-demo.mp4",
  challenges: [
    "Designing a medical-adjacent UI that feels trustworthy",
    "Optimizing image-heavy catalogue for mobile networks",
    "WhatsApp enquiry flow without a custom backend",
  ],
  futureImprovements: [
    "Admin panel for product CRUD",
    "Order tracking integration",
    "Multi-language catalogue support",
  ],
  links: {
    live: "https://appurvaherbals.vercel.app",
    github: "https://github.com/DeepanshuJindal30/Appurva-Herbals",
  },
};

export const docusenseCaseStudy: CaseStudy = {
  slug: "docusense",
  title: "DocuSense PDF Chatbot",
  tagline:
    "Upload PDFs and chat with your documents — Gemini + LangChain RAG pipeline.",
  problem:
    "Teams need to extract answers from long PDFs without manually reading every page — especially for research, compliance, and technical documentation.",
  solution:
    "Built a Streamlit app with LangChain RAG — PDF ingestion, FAISS vector search, and Gemini-powered Q&A with source-aware responses. Containerized with Docker for reproducible deployment.",
  features: [
    "Multi-PDF upload and indexing",
    "FAISS vector similarity search",
    "Gemini-powered conversational Q&A",
    "LangChain document chunking pipeline",
    "Streamlit interactive UI",
    "Dockerized deployment",
  ],
  techStack: [
    "Streamlit",
    "Google Gemini",
    "LangChain",
    "FAISS",
    "Python",
    "Docker",
  ],
  architecture: [
    "PDF upload & text extraction",
    "Document chunking (LangChain)",
    "FAISS embedding index",
    "Gemini LLM query layer",
    "Streamlit chat interface",
    "Docker container deployment",
  ],
  screenshots: [],
  demoVideo: "/videos/docusense-demo.mp4",
  challenges: [
    "Chunk size tuning for retrieval accuracy",
    "Managing context window limits with Gemini",
    "Handling large PDFs within Streamlit memory constraints",
  ],
  futureImprovements: [
    "Multi-user session persistence",
    "Citation highlighting in source PDFs",
    "Support for scanned PDFs via OCR",
  ],
  links: {
    live: "https://gmultichat.streamlit.app/",
    github: "https://github.com/DeepanshuJindal30/chatwithpdf1",
  },
};

export const competitiveProgramming = {
  platforms: [
    {
      name: "LeetCode",
      logo: "leetcode",
      badge: "Guardian",
      rating: "2166",
      description: "Max rating — elite competitive tier",
      url: "https://leetcode.com/Deepanshu_Jindal/",
    },
    {
      name: "CodeChef",
      logo: "codechef",
      badge: "5★",
      rating: "2003",
      description: "Top 1% competitive programming",
      url: "https://www.codechef.com/users/deepanshu_30",
    },
    {
      name: "DSA Problems",
      logo: "leetcode",
      badge: "600+",
      rating: "Solved",
      description: "Structured algorithmic practice",
      url: "https://leetcode.com/Deepanshu_Jindal/",
    },
    {
      name: "HackerRank",
      logo: "hackerrank",
      badge: "5★",
      rating: "Problem Solving",
      description: "Python (Basic) certified",
      url: "https://www.hackerrank.com/profile/deepanshu_jindal",
    },
  ],
};
