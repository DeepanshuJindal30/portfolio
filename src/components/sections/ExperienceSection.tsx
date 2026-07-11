import { experience } from "@/data/experience";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding !py-12 sm:!py-16 md:!py-20"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Career"
          title="Experience"
          description="Scroll the timeline — each role reveals as you move down."
          align="center"
        />
        <ExperienceTimeline items={experience} />
      </div>
    </section>
  );
}
