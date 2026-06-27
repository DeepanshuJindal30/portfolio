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
        <SectionHeader
          label="Career"
          title="Experience"
          description="Building enterprise payroll, tax, and AI systems at ADP with scale and compliance at the core."
        />
        <ExperienceTimeline items={experience} />
      </div>
    </section>
  );
}
