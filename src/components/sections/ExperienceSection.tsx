import { experience } from "@/data/experience";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Career" title="Experience" align="center" />
        <ExperienceTimeline items={experience} />
      </div>
    </section>
  );
}
