import {
  personalProjects,
  additionalPersonalProjects,
} from "@/data/projects";
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
          description="Quick links to other AI, ML, and research builds."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {personalProjects
            .filter((project) => !project.showcased)
            .map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="compact"
            />
          ))}
        </div>

        {additionalPersonalProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
            {additionalPersonalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + personalProjects.length}
                variant="compact"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
