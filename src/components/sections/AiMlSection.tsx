import { aiMlProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AiMlSection() {
  return (
    <section
      id="ai-ml"
      className="section-padding"
      aria-labelledby="ai-ml-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Intelligence"
          title="AI / ML / Research Projects"
          description="From RAG chatbots and generative AI to reinforcement learning and computer vision."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {aiMlProjects.map((project, index) => (
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
