import { enterpriseProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EnterpriseProjectsSection() {
  const [featured, ...rest] = enterpriseProjects;

  return (
    <section
      id="enterprise"
      className="section-padding"
      aria-labelledby="enterprise-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Professional Work"
          title="Enterprise Systems @ ADP"
          description="Production systems shipped at scale — payroll, tax APIs, and agentic AI platforms for 500K+ businesses."
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
