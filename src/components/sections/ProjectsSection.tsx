"use client";

import { ArrowRight } from "lucide-react";
import { featuredShowcases, moreProjects } from "@/data/projects";
import { AppurvaPharmacyShowcase } from "@/components/sections/AppurvaPharmacyShowcase";
import { DemoShowcaseCard } from "@/components/ui/DemoShowcaseCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";

/** Homepage highlights only — full catalogue on /projects */
const HOME_SHOWCASE_IDS = ["jobpilot", "agentmesh"] as const;

interface ProjectsSectionProps {
  mode?: "home" | "full";
}

export function ProjectsSection({ mode = "home" }: ProjectsSectionProps) {
  const homeShowcases = featuredShowcases.filter((p) =>
    (HOME_SHOWCASE_IDS as readonly string[]).includes(p.id)
  );
  const otherShowcases = featuredShowcases.filter(
    (p) => !(HOME_SHOWCASE_IDS as readonly string[]).includes(p.id)
  );

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="My Work"
          title={mode === "home" ? "Featured Projects" : "All Projects"}
          description={
            mode === "home"
              ? "Top products here. ADP enterprise work opens from Experience · Research is in the nav."
              : "Pharmacy app, JobPilot, AgentMesh, herbals, DocuSense, and more AI/ML builds."
          }
          align="center"
        />

        {mode === "home" ? (
          <>
            <div className="space-y-8 md:space-y-10 mb-8">
              {homeShowcases.map((project, index) => (
                <DemoShowcaseCard
                  key={project.id}
                  project={project}
                  index={index}
                  reversed={index % 2 === 1}
                />
              ))}
            </div>
            <AppurvaPharmacyShowcase />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={withBasePath("/projects")} variant="outline">
                View all projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button href={withBasePath("/work/adp")} variant="ghost">
                ADP Enterprise
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <AppurvaPharmacyShowcase />
            <div className="space-y-8 md:space-y-10 mb-12 md:mb-16">
              {[...homeShowcases, ...otherShowcases].map((project, index) => (
                <DemoShowcaseCard
                  key={project.id}
                  project={project}
                  index={index}
                  reversed={index % 2 === 1}
                />
              ))}
            </div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-accent text-center mb-6 md:mb-8">
              More AI / ML projects
            </h3>
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
          </>
        )}
      </div>
    </section>
  );
}
