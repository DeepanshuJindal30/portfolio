import type { Metadata } from "next";
import { AnimatedGrid } from "@/components/layout/AnimatedGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkTabs } from "@/components/ui/WorkTabs";
import { AdpEnterpriseContent } from "@/components/sections/AdpEnterpriseContent";

export const metadata: Metadata = {
  title: "ADP Enterprise Work | Deepanshu Jindal",
  description:
    "Enterprise systems at ADP — LR Agentic AI, Unified Tax API, and payroll backends.",
};

export default function AdpWorkPage() {
  return (
    <>
      <AnimatedGrid />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkTabs />
          <AdpEnterpriseContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
