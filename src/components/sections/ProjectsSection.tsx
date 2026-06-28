import { moreProjects } from "@/data/projects";
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
          label="My Work"
          title="More Projects"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {moreProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
