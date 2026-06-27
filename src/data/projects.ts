export interface ProjectArchitecture {
  steps: string[];
}

export interface ProductionProject {
  id: string;
  title: string;
  description: string;
  impact?: string[];
  architecture?: ProjectArchitecture;
  technologies: string[];
  category: "production" | "ai-ml" | "mobile";
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
    apk?: string;
    screenshots?: string;
  };
  featured?: boolean;
}

export interface MobileApp extends ProductionProject {
  features: string[];
  screenshots: string[];
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
  challenges: string[];
  futureImprovements: string[];
  links: {
    github?: string;
    apk?: string;
  };
}

export const productionProjects: ProductionProject[] = [
  {
    id: "agentic-ai-perf",
    title: "Agentic AI Performance Testing Platform",
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
    category: "production",
    featured: true,
  },
  {
    id: "unified-tax-api",
    title: "Unified Tax API / Payroll Backend System",
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
    category: "production",
    featured: true,
  },
  {
    id: "pes-data-portal",
    title: "PES Data Portal / Trustee Initiative POC",
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
    category: "production",
    featured: true,
  },
];

export const mobileApps: MobileApp[] = [
  {
    id: "appurva-pharmacy",
    title: "Appurva Pharmacy",
    description:
      "A Tata 1mg / Zomato / Blinkit-inspired pharmacy ordering app where users can browse healthcare products, upload prescriptions, add items to cart, choose delivery or self-pickup, and place orders.",
    features: [
      "Product catalog with medicine & healthcare categories",
      "Search, filters & detailed product pages",
      "Cart, checkout & prescription upload",
      "Order placement, history & status tracking",
      "Admin order, stock & product management",
      "Delivery and self-pickup flow",
      "Supabase backend with Android APK via Expo/EAS",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "EAS Build",
      "Android APK",
    ],
    category: "mobile",
    screenshots: [
      "/app-screenshots/home.svg",
      "/app-screenshots/catalog.svg",
      "/app-screenshots/cart.svg",
      "/app-screenshots/admin.svg",
    ],
    links: {
      caseStudy: "/projects/appurva-pharmacy",
      github: "https://github.com/DeepanshuJindal30/Appurva-Herbals",
      apk: "/appurva-pharmacy.apk",
      screenshots: "/app-screenshots/",
    },
    featured: true,
  },
];

export const aiMlProjects: ProductionProject[] = [
  {
    id: "docusense",
    title: "DocuSense PDF Chatbot",
    description:
      "RAG-based PDF chatbot for document question answering with FAISS vector search — reduced query latency by 25% through optimized chunking and indexing.",
    technologies: [
      "Streamlit",
      "Gemini Pro",
      "LangChain",
      "FAISS",
      "PyPDF2",
      "Docker",
    ],
    category: "ai-ml",
    links: {
      live: "https://chat-with-pdf-file.streamlit.app/",
      github: "https://github.com/DeepanshuJindal30/Swipe-Assignment-Task",
    },
  },
  {
    id: "kalpchitra",
    title: "KalpChitra.AI",
    description:
      "Multilingual cross-modal image synthesis using Stable Diffusion and GPT-3 with Kafka-backed async inference queue — Best Paper Award at CCICT'24.",
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
    links: {
      live: "https://kalpa-chitra.netlify.app/",
      github: "https://github.com/DeepanshuJindal30/KalpChitra.AI",
    },
  },
  {
    id: "drl-stock",
    title: "DRL Stock Market Prediction",
    description:
      "Deep reinforcement learning trading strategy using Dow 30 data, technical indicators, and backtesting.",
    technologies: [
      "FinRL",
      "Stable-Baselines3",
      "PPO",
      "DDPG",
      "A2C",
      "Python",
    ],
    category: "ai-ml",
    links: {
      live: "https://stock-visualiser.streamlit.app/",
      github:
        "https://github.com/DeepanshuJindal30/Deep-Reinforcement-Learning-Based-Trading-Strategy",
    },
  },
  {
    id: "food-calorie",
    title: "Food Calorie Detection with YOLOv8",
    description:
      "Computer vision system for food detection and calorie estimation using volumetric image analysis.",
    technologies: ["YOLOv8", "OpenCV", "CNN", "Image Processing"],
    category: "ai-ml",
    links: {
      github: "https://github.com/DeepanshuJindal30/Food-Calorie-estimation",
    },
  },
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
  {
    id: "image-generator",
    title: "IMAGINATE HUB — Text-to-Image Streamlit App",
    description:
      "Streamlit app with six cutting-edge text-to-image models for instant visual generation from user prompts.",
    technologies: ["Streamlit", "Stable Diffusion", "Python", "Computer Vision"],
    category: "ai-ml",
    links: {
      live: "https://image-generator-app.streamlit.app/",
      github: "https://github.com/DeepanshuJindal30/image-generator-streamlit",
    },
  },
];

export const appurvaPharmacyCaseStudy: CaseStudy = {
  slug: "appurva-pharmacy",
  title: "Appurva Pharmacy",
  tagline:
    "Full-stack mobile pharmacy ordering platform with admin operations and prescription workflows.",
  problem:
    "Healthcare product ordering in local markets often lacks a unified digital experience — users need prescription uploads, real-time stock visibility, flexible delivery options, and admins need operational control over orders and inventory.",
  solution:
    "Built Appurva Pharmacy as a React Native mobile app with Supabase backend — delivering a Blinkit/Zomato-inspired UX for healthcare commerce with end-to-end order lifecycle management and a dedicated admin panel.",
  features: [
    "Browse healthcare products with categories and search",
    "Upload prescriptions for regulated medicines",
    "Cart, checkout, and order placement",
    "Delivery or self-pickup selection",
    "Order history and status tracking",
    "Admin dashboard for orders, products, and stock",
    "Prescription review and customer management",
    "Android APK distribution via Expo EAS Build",
  ],
  techStack: [
    "React Native",
    "Expo",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "EAS Build",
    "Android APK",
    "Expo Router",
  ],
  architecture: [
    "React Native mobile client (Expo)",
    "Supabase Auth & Row Level Security",
    "PostgreSQL database for products, orders, prescriptions",
    "Storage buckets for prescription images",
    "Admin role-based access control",
    "EAS Build pipeline for Android APK",
  ],
  screenshots: [
    "/app-screenshots/home.svg",
    "/app-screenshots/catalog.svg",
    "/app-screenshots/cart.svg",
    "/app-screenshots/checkout.svg",
    "/app-screenshots/orders.svg",
    "/app-screenshots/admin.svg",
  ],
  challenges: [
    "Designing prescription upload flow with validation and admin review",
    "Managing real-time stock updates across concurrent orders",
    "Building responsive UI that works across Android device sizes",
    "Configuring EAS Build for production-ready APK distribution",
    "Implementing role-based admin access with Supabase RLS",
  ],
  futureImprovements: [
    "Push notifications for order status updates",
    "Payment gateway integration (Razorpay/Stripe)",
    "iOS build and App Store deployment",
    "Real-time delivery tracking with maps",
    "AI-powered medicine interaction warnings",
    "Analytics dashboard for business insights",
  ],
  links: {
    github: "https://github.com/DeepanshuJindal30/Appurva-Herbals",
    apk: "/appurva-pharmacy.apk",
  },
};

export const competitiveProgramming = {
  platforms: [
    {
      name: "LeetCode",
      badge: "Guardian",
      rating: "2166",
      description: "Max rating — elite competitive tier",
      url: "https://leetcode.com/Deepanshu_Jindal/",
    },
    {
      name: "CodeChef",
      badge: "5★",
      rating: "2003",
      description: "Top 1% competitive programming",
      url: "https://www.codechef.com/users/deepanshu_30",
    },
    {
      name: "DSA Problems",
      badge: "600+",
      rating: "Solved",
      description: "Structured algorithmic practice",
      url: "https://leetcode.com/Deepanshu_Jindal/",
    },
    {
      name: "HackerRank",
      badge: "5★",
      rating: "Problem Solving",
      description: "Python (Basic) certified",
      url: "https://www.hackerrank.com/profile/deepanshu_jindal",
    },
  ],
};
