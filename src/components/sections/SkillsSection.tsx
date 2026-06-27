"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Toolkit"
          title="Skills"
          description="Languages, frameworks, and platforms I use to build production systems — from payroll APIs at scale to agentic AI and mobile apps."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="rounded-2xl p-5 md:p-6 glass-card gradient-border hover:border-accent/20 transition-colors"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-accent mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge
                    key={skill}
                    label={skill}
                    variant={group.id === "competitive" ? "accent" : "default"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
