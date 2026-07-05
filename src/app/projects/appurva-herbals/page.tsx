import type { Metadata } from "next";
import { appurvaHerbalsCaseStudy } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/ui/CaseStudyTemplate";

export const metadata: Metadata = {
  title: `${appurvaHerbalsCaseStudy.title} — Case Study | Deepanshu Jindal`,
  description: appurvaHerbalsCaseStudy.tagline,
};

export default function AppurvaHerbalsCaseStudyPage() {
  return (
    <CaseStudyTemplate
      study={appurvaHerbalsCaseStudy}
      demoLayout="browser"
    />
  );
}
