import dynamic from "next/dynamic";
import { AnimatedGrid } from "@/components/layout/AnimatedGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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

const FeaturedDemosSection = dynamic(
  () =>
    import("@/components/sections/FeaturedDemosSection").then(
      (m) => m.FeaturedDemosSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const MobileSection = dynamic(
  () =>
    import("@/components/sections/MobileSection").then(
      (m) => m.MobileSection
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

const CompetitiveProgrammingSection = dynamic(
  () =>
    import("@/components/sections/CompetitiveProgrammingSection").then(
      (m) => m.CompetitiveProgrammingSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const EducationSection = dynamic(
  () =>
    import("@/components/sections/EducationSection").then(
      (m) => m.EducationSection
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
        <FeaturedDemosSection />
        <MobileSection />
        <ProjectsSection />
        <EnterpriseProjectsSection />
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
