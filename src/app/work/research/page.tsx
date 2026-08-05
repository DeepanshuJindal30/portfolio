import type { Metadata } from "next";
import { AnimatedGrid } from "@/components/layout/AnimatedGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkTabs } from "@/components/ui/WorkTabs";
import { ResearchPatentsContent } from "@/components/sections/ResearchPatentsContent";

export const metadata: Metadata = {
  title: "Research & Patents | Deepanshu Jindal",
  description:
    "IEEE-SCOPUS publications, Best Paper CCICT'24, and AI & healthcare patents.",
};

export default function ResearchWorkPage() {
  return (
    <>
      <AnimatedGrid />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkTabs />
          <ResearchPatentsContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
