import { AnimatedGrid } from "@/components/layout/AnimatedGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MobileSection } from "@/components/sections/MobileSection";
import { AiMlSection } from "@/components/sections/AiMlSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CompetitiveProgrammingSection } from "@/components/sections/CompetitiveProgrammingSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <AnimatedGrid />
      <Navbar />
      <main>
        <HeroSection />
        <MetricsSection />
        <PillarsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <MobileSection />
        <AiMlSection />
        <ResearchSection />
        <CompetitiveProgrammingSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
