"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";
import { BrandLogoBadge, type BrandId } from "@/components/ui/BrandLogo";
import { SkillBadge } from "./SkillBadge";
import { cn } from "@/lib/utils";

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative" role="list">
      <div
        className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block"
        aria-hidden="true"
      />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            role="listitem"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative md:pl-14",
              "rounded-2xl p-6 md:p-8 glass-card gradient-border"
            )}
          >
            <div
              className="hidden md:flex absolute left-3 top-8 w-3 h-3 rounded-full bg-accent border-2 border-background ring-4 ring-accent/20"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                {item.logo ? (
                  <BrandLogoBadge brand={item.logo as BrandId} size={44} />
                ) : (
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                    <span className="text-accent text-sm font-bold" aria-hidden="true">
                      {item.company.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-accent font-medium">{item.company}</p>
                </div>
              </div>
              <span
                className={cn(
                  "text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full",
                  item.type === "full-time"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : item.type === "internship"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      : "bg-accent/10 text-accent border border-accent/20"
                )}
              >
                {item.period}
              </span>
            </div>

            {item.location && (
              <p className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {item.location}
              </p>
            )}

            <ul className="space-y-2 mb-5" role="list">
              {item.highlights.slice(0, 3).map((highlight) => (
                <li
                  key={highlight}
                  className="text-sm text-zinc-400 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-accent mt-1 shrink-0" aria-hidden="true">
                    ▸
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            {item.scale && (
              <div className="mb-5 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
                  Scale & Constraints
                </h4>
                <div className="flex flex-wrap gap-3">
                  {item.scale.map((s) => (
                    <span key={s} className="text-sm text-zinc-300 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 items-center">
              {item.technologies.map((tech) => (
                <SkillBadge key={tech} label={tech} />
              ))}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-muted ml-1 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  View Certificate
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
