import dynamic from "next/dynamic";
import { AnimatedGrid } from "@/components/layout/AnimatedGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/ExperienceSection").then(
      (m) => m.ExperienceSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then(
      (m) => m.ProjectsSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const EnterpriseProjectsSection = dynamic(
  () =>
    import("@/components/sections/EnterpriseProjectsSection").then(
      (m) => m.EnterpriseProjectsSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const ResearchSection = dynamic(
  () =>
    import("@/components/sections/ResearchSection").then(
      (m) => m.ResearchSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const CredentialsSection = dynamic(
  () =>
    import("@/components/sections/CredentialsSection").then(
      (m) => m.CredentialsSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/SkillsSection").then(
      (m) => m.SkillsSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (m) => m.ContactSection
    ),
  { loading: () => <SectionSkeleton /> }
);

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
        <EnterpriseProjectsSection />
        <ResearchSection />
        <CredentialsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
