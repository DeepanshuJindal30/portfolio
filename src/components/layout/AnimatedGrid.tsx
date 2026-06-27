"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0908] via-[#120e0c] to-[#0a0807]" />
      <motion.div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.05) 1px, transparent 1px)
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/8 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-accent-secondary/5 blur-[100px] rounded-full" />
    </div>
  );
}
