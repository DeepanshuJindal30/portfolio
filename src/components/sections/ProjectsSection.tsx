import { productionProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectsSection() {
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
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {productionProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
