import type { Metadata } from "next";
import { agentmeshCaseStudy } from "@/data/projects";
import { CaseStudyTemplate } from "@/components/ui/CaseStudyTemplate";

export const metadata: Metadata = {
  title: `${agentmeshCaseStudy.title} — Case Study | Deepanshu Jindal`,
  description: agentmeshCaseStudy.tagline,
};

export default function AgentMeshCaseStudyPage() {
  return (
    <CaseStudyTemplate study={agentmeshCaseStudy} demoLayout="browser" />
  );
}
