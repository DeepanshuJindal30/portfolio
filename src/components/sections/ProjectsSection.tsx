import { productionProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectsSection() {
  const [featured, ...rest] = productionProjects;

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Production Systems"
          title="Featured Production Projects"
          description="Case-study style deep dives into enterprise systems I've designed and shipped."
        />

        {featured && <FeaturedProjectCard project={featured} />}

        <div className="grid grid-cols-1 gap-6 md:gap-8 mt-8">
          {rest.map((project, index) => (
            <GlowCard key={project.id} className="glass-card gradient-border">
              <ProjectCard project={project} index={index + 1} variant="nested" />
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
