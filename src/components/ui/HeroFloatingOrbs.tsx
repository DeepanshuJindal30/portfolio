"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroFloatingOrbs() {
  const prefersReducedMotion = useReducedMotion();

  const orbs = [
    { size: 120, x: "10%", y: "20%", delay: 0, color: "rgba(249,115,22,0.25)" },
    { size: 80, x: "75%", y: "15%", delay: 1.2, color: "rgba(251,191,36,0.2)" },
    { size: 60, x: "85%", y: "60%", delay: 0.6, color: "rgba(249,115,22,0.18)" },
    { size: 100, x: "5%", y: "70%", delay: 1.8, color: "rgba(251,146,60,0.15)" },
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none [perspective:800px]"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-sm"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at 30% 30%, ${orb.color}, transparent 70%)`,
            boxShadow: `0 0 40px ${orb.color}`,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotateX: [0, 15, 0],
                  rotateY: [0, -12, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
