"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { enterpriseProjects } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { BrandLogoBadge, type BrandId } from "@/components/ui/BrandLogo";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function EnterpriseProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [featured, ...rest] = enterpriseProjects;
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="enterprise"
      className="section-padding !py-12 sm:!py-16 md:!py-20"
      aria-labelledby="enterprise-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Professional Work"
          title="Enterprise Systems @ ADP"
          description="Payroll, tax APIs, and agentic AI at scale."
        />

        {featured && <FeaturedProjectCard project={featured} />}

        <div className="mt-5">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            className={cn(
              "w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              showMore
                ? "border-accent/30 bg-accent/5"
                : "border-white/10 bg-white/[0.03] hover:border-accent/25"
            )}
          >
            <span className="text-sm text-zinc-300">
              More ADP work
              <span className="text-zinc-500 ml-2 font-mono text-xs">
                {rest.length} projects
              </span>
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-accent transition-transform",
                showMore && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence initial={false}>
            {showMore && (
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {rest.map((project) => (
                    <article
                      key={project.id}
                      className="rounded-xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {project.logo && (
                          <BrandLogoBadge
                            brand={project.logo as BrandId}
                            size={28}
                            className="shadow-none"
                          />
                        )}
                        <h3 className="text-sm font-semibold text-white leading-snug">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <SkillBadge key={tech} label={tech} variant="accent" />
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
