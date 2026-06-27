"use client";

import { motion } from "framer-motion";

interface HeroSkillDeskProps {
  visible: boolean;
}

export function HeroSkillDesk({ visible }: HeroSkillDeskProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 24,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute right-0 bottom-4 sm:bottom-6 z-40 w-[min(100%,220px)] sm:w-56"
      aria-hidden={!visible}
    >
      <div className="rounded-xl border border-white/15 bg-zinc-950/85 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
        <div className="px-3 py-2 border-b border-white/10 bg-accent/10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent-muted">
            What I Do
          </p>
        </div>
        <div className="p-3 space-y-2.5">
          <div className="rounded-lg border border-dashed border-white/15 p-2.5">
            <p className="text-xs font-semibold text-white">Develop</p>
            <p className="text-[10px] text-stone-400 mt-1 leading-relaxed">
              React, .NET, Node, AI systems — production scale.
            </p>
          </div>
          <div className="rounded-lg border border-dashed border-white/15 p-2.5">
            <p className="text-xs font-semibold text-white">Ship</p>
            <p className="text-[10px] text-stone-400 mt-1 leading-relaxed">
              Mobile apps, agentic AI, payroll at 3M+ tx/mo.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
