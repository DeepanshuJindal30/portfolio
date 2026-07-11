"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { proofStrip } from "@/data/achievements";
import { BrandLogoBadge, type BrandId } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

export function MetricsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="metrics"
      className="relative py-8 sm:py-10"
      aria-label="Key achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className={cn(
            "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm",
            "px-3 py-3 sm:px-4 sm:py-3.5"
          )}
        >
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent mb-3 text-center sm:text-left sm:mb-2.5 px-1">
            Track record
          </p>

          <ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-1"
            role="list"
          >
            {proofStrip.map((item) => {
              const brand = item.logo as BrandId | undefined;
              const Wrapper = item.url ? "a" : "div";
              const linkProps = item.url
                ? {
                    href: item.url,
                    target: "_blank" as const,
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <li key={item.id}>
                  <Wrapper
                    {...linkProps}
                    className={cn(
                      "group flex items-center gap-2.5 rounded-xl px-2.5 py-2 h-full",
                      "border border-transparent hover:border-white/10 hover:bg-white/[0.04]",
                      "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      item.url && "cursor-pointer"
                    )}
                  >
                    {brand ? (
                      <BrandLogoBadge
                        brand={brand}
                        size={28}
                        className="shrink-0 shadow-none"
                      />
                    ) : null}
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1">
                        <span className="block text-sm font-semibold text-white leading-tight truncate">
                          {item.value}
                        </span>
                        {item.url && (
                          <ExternalLink
                            className="w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500 truncate">
                        {item.label}
                      </span>
                    </span>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
