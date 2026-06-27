"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#050508]" />
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: ["0px 0px", "64px 64px"],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />
    </div>
  );
}
