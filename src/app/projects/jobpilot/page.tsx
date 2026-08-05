import type { Metadata } from "next";
import { jobpilotCaseStudy } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/ui/CaseStudyTemplate";

export const metadata: Metadata = {
  title: `${jobpilotCaseStudy.title} — Case Study | Deepanshu Jindal`,
  description: jobpilotCaseStudy.tagline,
};

export default function JobPilotCaseStudyPage() {
  return (
    <CaseStudyTemplate study={jobpilotCaseStudy} demoLayout="browser" />
  );
}
