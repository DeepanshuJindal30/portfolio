import type { Metadata } from "next";
import { AnimatedGrid } from "@/components/layout/AnimatedGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "All Projects | Deepanshu Jindal",
  description:
    "JobPilot, AgentMesh, Appurva Pharmacy, Herbals, DocuSense, and more.",
};

export default function AllProjectsPage() {
  return (
    <>
      <AnimatedGrid />
      <Navbar />
      <main className="pt-8">
        <ProjectsSection mode="full" />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
