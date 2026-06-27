export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export const education: EducationItem[] = [
  {
    id: "cu-be",
    degree: "Bachelor of Engineering — Computer Science",
    institution: "Chandigarh University, Mohali, Punjab",
    period: "Aug 2021 — May 2025",
    details: "CGPA: 8.9/10 · Academic Topper (Computer Science)",
    link: "https://drive.google.com/file/d/17y8wXhSG7NOrWqoqXZgcay449UTkD87E/view?usp=drive_link",
  },
  {
    id: "class-xii",
    degree: "Class XII — PCM with Computer Science",
    institution: "Sarvodaya Public School (CBSE), Baghpat, UP",
    period: "May 2020",
    details: "Percentage: 94%",
  },
  {
    id: "class-x",
    degree: "Class X — Information Technology",
    institution: "Sarvodaya Public School (CBSE), Baghpat, UP",
    period: "May 2018",
    details: "Percentage: 96.8%",
  },
];

export const certifications: Certification[] = [
  { id: "python", name: "Python (Basic)", issuer: "HackerRank" },
  {
    id: "ibm-ml",
    name: "IBM Introduction to Machine Learning",
    issuer: "IBM / Coursera",
  },
  {
    id: "tableau",
    name: "Data Visualization with Tableau Specialization",
    issuer: "Coursera",
  },
  {
    id: "discrete-math",
    name: "Discrete Mathematics",
    issuer: "Coursera",
  },
  {
    id: "azure-de",
    name: "Microsoft Azure for Data Engineering",
    issuer: "Microsoft",
  },
];
