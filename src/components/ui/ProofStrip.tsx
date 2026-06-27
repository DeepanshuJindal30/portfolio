"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function ProofStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-8"
      aria-label="Credentials and achievements"
    >
      {siteConfig.proofStrip.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-zinc-700 hidden sm:inline" aria-hidden="true">
              ·
            </span>
          )}
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-mono text-zinc-500 hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-xs sm:text-sm font-mono text-zinc-500">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </motion.div>
  );
}
