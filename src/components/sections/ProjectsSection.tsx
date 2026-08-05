"use client";

import { useMemo, useState } from "react";
import { featuredShowcases, moreProjects } from "@/data/projects";
import { AppurvaPharmacyShowcase } from "@/components/sections/AppurvaPharmacyShowcase";
import { DemoShowcaseCard } from "@/components/ui/DemoShowcaseCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web / Deployed" },
  { id: "ai-ml", label: "AI / ML" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const showDeployed = activeFilter === "all" || activeFilter === "web";
  const showMoreProjects = activeFilter === "all" || activeFilter === "ai-ml";
  const moreProjectList = useMemo(() => moreProjects, []);

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="My Work"
          title="Projects"
          description="Production apps, JobPilot, AgentMesh, and other deployed / AI builds."
          align="center"
        />

        <AppurvaPharmacyShowcase />

        <div
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10"
          role="tablist"
          aria-label="Filter projects below"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive ? true : false}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-accent text-white border-accent shadow-glow-sm"
                    : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-accent/30 hover:text-white"
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {showDeployed && (
          <div className="mb-12 md:mb-16" role="tabpanel">
            {activeFilter === "all" && (
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent text-center mb-6 md:mb-8">
                Deployed Projects
              </h3>
            )}
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
        )}

        {showMoreProjects && (
          <div role="tabpanel">
            {activeFilter === "all" && (
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent text-center mb-6 md:mb-8">
                More Projects
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
              {moreProjectList.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
