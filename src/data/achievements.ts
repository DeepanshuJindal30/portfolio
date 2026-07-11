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

/** Compact hero proof strip — unique signals only (no Skills/Experience overlap) */
export const proofStrip: Achievement[] = [
  {
    id: "adp",
    label: "Role",
    value: "SDE-I @ ADP",
    description: "Payroll & tax at scale",
    icon: "briefcase",
    logo: "adp",
    url: "https://www.linkedin.com/in/deepanshu-jindal-65a163204/",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    value: "Guardian 2166",
    description: "Elite CP tier",
    icon: "trophy",
    logo: "leetcode",
    url: "https://leetcode.com/Deepanshu_Jindal/",
  },
  {
    id: "codechef",
    label: "CodeChef",
    value: "5★ · 2003",
    description: "Top 1%",
    icon: "star",
    logo: "codechef",
    url: "https://www.codechef.com/users/deepanshu_30",
  },
  {
    id: "papers",
    label: "Research",
    value: "7 IEEE",
    description: "SCOPUS · Best Paper",
    icon: "book-open",
    logo: "ieee",
    url: "https://drive.google.com/drive/u/1/folders/1PVf49c1CzqOH0FoLb0FYPgNoEej8z4g4",
  },
  {
    id: "patents",
    label: "Patents",
    value: "2 Patents",
    description: "AI & healthcare",
    icon: "lightbulb",
    logo: "patent",
    url: "https://drive.google.com/file/d/1iRJaoJPVe8h8PBBiYsnCcdwBM5lKyykB/view?usp=sharing",
  },
  {
    id: "dsa",
    label: "Practice",
    value: "600+ Problems",
    description: "DSA mastery",
    icon: "code",
    logo: "leetcode",
    url: "https://leetcode.com/Deepanshu_Jindal/",
  },
];

/** @deprecated Prefer proofStrip — kept for any legacy imports */
export const achievements = proofStrip;
