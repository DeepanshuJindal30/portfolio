export interface Achievement {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
  logo?: string;
  url?: string;
  countUp?: {
    end: number;
    prefix?: string;
    suffix?: string;
    staticText?: string;
  };
}

export const achievements: Achievement[] = [
  {
    id: "adp",
    label: "Current Role",
    value: "SDE-I @ ADP",
    description: "Payroll & tax systems at enterprise scale",
    icon: "briefcase",
    logo: "adp",
    url: "https://www.linkedin.com/in/deepanshu-jindal-65a163204/",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    value: "Guardian 2166",
    description: "Elite competitive programming tier",
    icon: "trophy",
    logo: "leetcode",
    url: "https://leetcode.com/Deepanshu_Jindal/",
    countUp: { end: 2166, prefix: "Guardian " },
  },
  {
    id: "codechef",
    label: "CodeChef",
    value: "5★ · 2003",
    description: "Top 1% competitive programming",
    icon: "star",
    logo: "codechef",
    url: "https://www.codechef.com/users/deepanshu_30",
    countUp: { end: 2003, prefix: "5★ · " },
  },
  {
    id: "papers",
    label: "Research",
    value: "7 IEEE Papers",
    description: "IEEE-SCOPUS published · Best Paper CCICT'24",
    icon: "book-open",
    logo: "ieee",
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
    countUp: { end: 7, suffix: " IEEE Papers" },
  },
  {
    id: "patents",
    label: "Innovation",
    value: "2 Patents",
    description: "AI & healthcare technology patents",
    icon: "lightbulb",
    logo: "patent",
    url: "https://drive.google.com/file/d/1iRJaoJPVe8h8PBBiYsnCcdwBM5lKyykB/view?usp=sharing",
    countUp: { end: 2, suffix: " Patents" },
  },
  {
    id: "dsa",
    label: "DSA Practice",
    value: "600+ Problems",
    description: "Structured algorithmic mastery",
    icon: "code",
    logo: "leetcode",
    url: "https://leetcode.com/Deepanshu_Jindal/",
    countUp: { end: 600, suffix: "+ Problems" },
  },
  {
    id: "fullstack",
    label: "Engineering",
    value: "Full-Stack + AI",
    description: "Web, backend, mobile & GenAI systems",
    icon: "layers",
    logo: "github",
    url: "https://github.com/DeepanshuJindal30",
  },
  {
    id: "mobile",
    label: "Product",
    value: "Mobile Builder",
    description: "React Native apps with production APKs",
    icon: "smartphone",
    logo: "appurva",
    url: "https://github.com/DeepanshuJindal30/Appurva-Herbals",
  },
];
