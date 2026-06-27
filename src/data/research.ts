export interface ResearchPaper {
  id: string;
  title: string;
  venue?: string;
  year?: string;
  topics: string[];
  url?: string;
  github?: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "kalpchitra-paper",
    title:
      "Multilingual Cross-Modal Image Synthesis with Text-Guided Generative AI",
    venue: "IEEE · Best Paper Award CCICT'24",
    year: "2024",
    topics: ["Generative AI", "Diffusion Models", "Cross-Modal"],
    url: "https://cict23.bmiet.net/proceedings/pdfs/CCICT2024-1sjBvpXHlRhMfe9ll1wlwn/746200a578/746200a578.pdf",
    github:
      "https://github.com/DeepanshuJindal30/Multilingual-Cross-Modal-Image-Synthesis-with-Text-Guided-Generative-AI-",
  },
  {
    id: "adversarial",
    title:
      "Adversarial Attacks on Network Intrusion Detection Systems Using Machine Learning",
    venue: "IEEE-SCOPUS",
    year: "2024",
    topics: ["Adversarial ML", "Cybersecurity", "NIDS"],
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
  },
  {
    id: "food-calorie-paper",
    title:
      "Advancing Food Calorie Detection with YOLO and Advanced Image Processing",
    venue: "IEEE-SCOPUS",
    year: "2024",
    topics: ["Computer Vision", "YOLO", "Healthcare"],
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
    github: "https://github.com/DeepanshuJindal30/Food-Calorie-estimation",
  },
  {
    id: "blockchain-chapter",
    title:
      'Book Chapter — "Empowering Transparency: The Blockchain Revolution in Data Security and Integrity"',
    venue: "Book Chapter",
    year: "2024",
    topics: ["Blockchain", "Data Security", "Integrity"],
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
  },
  {
    id: "cnn-lstm",
    title: "Deep Learning in Financial Markets: CNN-LSTM Approach",
    venue: "IEEE-SCOPUS",
    year: "2023",
    topics: ["Deep Learning", "Finance", "CNN-LSTM"],
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
  },
  {
    id: "drl-paper",
    title:
      "Predicting Stock Market Trends Using Deep Reinforcement Learning",
    venue: "IEEE-SCOPUS",
    year: "2023",
    topics: ["Reinforcement Learning", "Finance", "Trading"],
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
    github:
      "https://github.com/DeepanshuJindal30/Deep-Reinforcement-Learning-Based-Trading-Strategy",
  },
  {
    id: "data-extraction",
    title: "Automated Data Extraction from Unstructured Text Using ML",
    venue: "IEEE-SCOPUS",
    year: "2023",
    topics: ["NLP", "Machine Learning", "Data Extraction"],
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
  },
  {
    id: "malware",
    title:
      "Mathematical Fortification of Cybersecurity: Malware Detection",
    venue: "IEEE-SCOPUS",
    year: "2023",
    topics: ["Cybersecurity", "ML", "Malware Detection"],
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
  },
];

export interface Patent {
  id: string;
  title: string;
  type: "utility" | "design";
  year?: string;
  topics: string[];
  url?: string;
}

export const patents: Patent[] = [
  {
    id: "brain-signals",
    title: "Brain Signals Transformation into Audio for Epilepsy Disease",
    type: "utility",
    year: "2024",
    topics: ["AI", "Healthcare", "Signal Processing"],
    url: "https://drive.google.com/drive/folders/1j-Hh_jtBfgh-NpqmuoSQEZ7_N8egiSTs?usp=drive_link",
  },
  {
    id: "neck-pain",
    title:
      "AI Based Neck Pain Remover and Drowsiness Alert Device in a Car",
    type: "design",
    year: "2024",
    topics: ["AI", "Healthcare", "Automotive Safety"],
    url: "https://drive.google.com/drive/folders/1xNQHB9OwpsjYBPpfvhW_FQ2Qv_KuebYA?usp=drive_link",
  },
];
