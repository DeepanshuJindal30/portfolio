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
          title="AI / ML / Research Projects"
          description="From RAG chatbots and generative AI to reinforcement learning and computer vision — personal builds, research, and open-source."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {personalProjects.map((project, index) => (
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
