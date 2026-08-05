"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { enterpriseProjects } from "@/data/projects";
import { researchPapers, patents } from "@/data/research";
import { siteConfig } from "@/data/site";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { BrandLogoBadge, type BrandId } from "@/components/ui/BrandLogo";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ResearchCard } from "@/components/ui/ResearchCard";
import { PatentCard } from "@/components/ui/PatentCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "enterprise", label: "ADP Enterprise" },
  { id: "research", label: "Research & Patents" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ProfessionalWorkSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabId>("enterprise");
  const [featured, ...rest] = enterpriseProjects;
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="enterprise"
      className="section-padding !py-12 sm:!py-16 md:!py-20"
      aria-labelledby="professional-work-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Professional Work"
          title="ADP Enterprise & Research"
          description="Enterprise systems at ADP, plus IEEE publications and patents."
          align="center"
        />

        <div
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10"
          role="tablist"
          aria-label="Professional work categories"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`work-tab-${tab.id}`}
                aria-controls={`work-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-accent text-white border-accent shadow-glow-sm"
                    : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-accent/30 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "enterprise" ? (
            <motion.div
              key="enterprise"
              id="work-panel-enterprise"
              role="tabpanel"
              aria-labelledby="work-tab-enterprise"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Enterprise Systems @ ADP
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Payroll, tax APIs, and agentic AI at scale.
                </p>
              </div>

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
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, height: 0 }
                      }
                      animate={{ opacity: 1, height: "auto" }}
                      exit={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: 0, height: 0 }
                      }
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
                              <h4 className="text-sm font-semibold text-white leading-snug">
                                {project.title}
                              </h4>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-3">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.slice(0, 4).map((tech) => (
                                <SkillBadge
                                  key={tech}
                                  label={tech}
                                  variant="accent"
                                />
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="research"
              id="work-panel-research"
              role="tabpanel"
              aria-labelledby="work-tab-research"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div id="research" className="scroll-mt-24">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Research &amp; Patents
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1 max-w-2xl mx-auto">
                    7 IEEE-SCOPUS papers, Best Paper @ CCICT&apos;24, and 2 AI
                    &amp; healthcare patents.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <Button
                    href={siteConfig.links.papersFolder}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    All Papers (Drive)
                  </Button>
                  <Button
                    href={siteConfig.links.patentsOverview}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Patents Overview
                  </Button>
                  <Button
                    href={siteConfig.links.bestPaperAward}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Best Paper CCICT&apos;24
                  </Button>
                </div>

                <h4 className="text-sm font-mono uppercase tracking-widest text-accent mb-5">
                  Research Publications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14">
                  {researchPapers.map((paper, index) => (
                    <ResearchCard
                      key={paper.id}
                      paper={paper}
                      index={index}
                    />
                  ))}
                </div>

                <h4 className="text-sm font-mono uppercase tracking-widest text-amber-400 mb-5">
                  Patents
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {patents.map((patent, index) => (
                    <PatentCard
                      key={patent.id}
                      patent={patent}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
