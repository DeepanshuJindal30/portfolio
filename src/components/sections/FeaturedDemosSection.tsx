import { featuredShowcases } from "@/data/projects";
import { DemoShowcaseCard } from "@/components/ui/DemoShowcaseCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedDemosSection() {
  return (
    <section
      id="featured-demos"
      className="section-padding"
      aria-labelledby="featured-demos-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Built & Shipped"
          title="Live Demos"
          description="Watch the products in action — minimal setup, maximum visual proof."
        />

        <div className="space-y-8 md:space-y-10">
          {featuredShowcases.map((project, index) => (
            <DemoShowcaseCard
              key={project.id}
              project={project}
              index={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
