import { pillars } from "@/data/pillars";
import { PillarCard } from "@/components/ui/PillarCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PillarsSection() {
  return (
    <section
      id="pillars"
      className="section-padding"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Core Competencies"
          title="Engineering Pillars"
          description="Four domains where I design, build, and ship production-grade systems."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
