"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";
import { education, certifications } from "@/data/education";
import { competitiveProgramming } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { BrandLogo, type BrandId } from "@/components/ui/BrandLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function CredentialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="credentials"
      className="section-padding"
      aria-labelledby="credentials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Background"
          title="Education & Competitive Programming"
          description="Engineering foundation plus structured problem-solving track record."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl p-5 sm:p-6 glass-card gradient-border"
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
                        <h4 className="text-base font-semibold text-white">
                          {item.degree}
                        </h4>
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

            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <SkillBadge
                    key={cert.id}
                    label={`${cert.name} · ${cert.issuer}`}
                  />
                ))}
              </div>
              <a
                href={siteConfig.links.academicTopper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Academic Topper — Chandigarh University
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">
              Competitive Programming
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competitiveProgramming.platforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group rounded-2xl p-5 glass-card gradient-border hover:bg-white/[0.04] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex items-center justify-between mb-3">
                    {"logo" in platform && platform.logo ? (
                      <BrandLogo brand={platform.logo as BrandId} size={36} />
                    ) : (
                      <span className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                        {platform.name.charAt(0)}
                      </span>
                    )}
                    <ExternalLink
                      className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    {platform.name}
                  </p>
                  <p className="text-xl font-bold text-white">
                    {platform.badge}{" "}
                    <span className="text-base font-medium text-accent">
                      {platform.rating}
                    </span>
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
