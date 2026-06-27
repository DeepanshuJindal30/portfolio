"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";
import { education, certifications } from "@/data/education";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function EducationSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Background"
          title="Education & Certifications"
          description="Computer Science engineering foundation with continuous upskilling in AI, cloud, and data."
        />

        <div className="space-y-4 mb-12">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl p-6 glass-card gradient-border"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                    <GraduationCap
                      className="w-4 h-4 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.degree}
                    </h3>
                    <p className="text-accent text-sm">{item.institution}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {item.period}
                </span>
              </div>
              {item.details && (
                <p className="text-sm text-zinc-400 ml-11">{item.details}</p>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 ml-11 text-xs text-accent hover:text-accent-muted transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  View Certificate
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">
          Certifications
        </h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <SkillBadge
              key={cert.id}
              label={`${cert.name} · ${cert.issuer}`}
            />
          ))}
        </div>

        <div className="mt-8">
          <a
            href={siteConfig.links.academicTopper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Academic Topper Certificate — Chandigarh University
          </a>
        </div>
      </div>
    </section>
  );
}
