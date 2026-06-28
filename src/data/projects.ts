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
    },
  },
];

export const enterpriseProjects: ProductionProject[] = [
  {
    id: "agentic-ai-perf",
    title: "Agentic AI Performance Testing Platform",
    logo: "adp",
    description:
      "Built an end-to-end agentic AI platform that converts Jira tickets into executable performance testing assets such as API validations, LoadRunner VuGen scripts, and controller scenarios.",
    impact: [
      "Reduced script creation time from 5 days to 3 hours (90% reduction)",
      "Reduced manual QA effort by 60–80% across 4 engineering teams",
      "Created structured validation and reporting workflow with idempotent execution",
    ],
    architecture: {
      steps: [
        "Jira / Splunk / Excel",
        "LLM + RAG + MCP",
        "Canonical API Model",
        "Validation Engine",
        "Artifact Generation",
        "Execution + Reporting",
      ],
    },
    technologies: [
      "FastAPI",
      "React",
      "TypeScript",
      "Kafka",
      "LLMs",
      "RAG",
      "MCP",
      "LoadRunner",
      "Docker",
      "Redis",
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
