import type { Metadata } from "next";
import { docusenseCaseStudy } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/ui/CaseStudyTemplate";

export const metadata: Metadata = {
  title: `${docusenseCaseStudy.title} — Case Study | Deepanshu Jindal`,
  description: docusenseCaseStudy.tagline,
};

export default function DocusenseCaseStudyPage() {
  return (
    <CaseStudyTemplate study={docusenseCaseStudy} demoLayout="browser" />
  );
}
