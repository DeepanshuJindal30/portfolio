"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { SkillOrbitCategory } from "@/data/skills";
import { TechIcon } from "@/components/ui/TechIcon";
import { cn } from "@/lib/utils";

interface SkillsOrbitVisualProps {
  categories: SkillOrbitCategory[];
  activeId: string;
  activeSkills: string[];
  className?: string;
}

export function SkillsOrbitVisual({
  categories,
  activeId,
  activeSkills,
  className,
}: SkillsOrbitVisualProps) {
  const prefersReducedMotion = useReducedMotion();
  const active =
    categories.find((c) => c.id === activeId) ?? categories[0];

  const orbitSkills = activeSkills.slice(0, 6);

  return (
    <div
      className={cn(
        "relative w-full aspect-square max-w-[400px] mx-auto",
        className
      )}
      aria-hidden="true"
    >
      {/* Atmosphere glow */}
      <motion.div
        key={`glow-${active.id}`}
        className="absolute inset-[6%] rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        style={{
          background: `radial-gradient(circle, ${active.color}55 0%, transparent 68%)`,
        }}
      />

      {/* Slow rotating rings */}
      {[16, 28, 40].map((inset, i) => (
        <motion.div
          key={inset}
          className="absolute rounded-full border border-dashed"
          style={{
            inset: `${inset}%`,
            borderColor: `${active.color}${i === 1 ? "66" : "28"}`,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : { rotate: i % 2 === 0 ? 360 : -360 }
          }
          transition={{
            duration: 32 + i * 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Center core */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          key={active.id}
          initial={prefersReducedMotion ? false : { scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          <motion.div
            className="w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center border"
            style={{
              background: `linear-gradient(145deg, ${active.color}dd, ${active.emissive}aa)`,
              borderColor: `${active.color}aa`,
              boxShadow: `0 0 32px ${active.color}55`,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.05, 1] }
            }
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider text-center px-1 leading-tight">
              {active.label}
            </span>
            <span className="text-[8px] text-white/75 font-mono mt-0.5">
              {orbitSkills.length} tools
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Category markers on outer rim */}
      {categories.map((cat, i) => {
        const angle = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 47;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        const isActive = cat.id === activeId;

        return (
          <motion.div
            key={cat.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: isActive ? [1.05, 1.15, 1.05] : 1 }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={cn(
                "w-7 h-7 rounded-md flex items-center justify-center border text-[7px] font-bold uppercase transition-all duration-300",
                isActive ? "text-white" : "text-white/60 opacity-60"
              )}
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${cat.color}99, ${cat.emissive}66)`
                  : "rgba(255,255,255,0.05)",
                borderColor: isActive
                  ? `${cat.color}cc`
                  : "rgba(255,255,255,0.1)",
                boxShadow: isActive ? `0 0 14px ${cat.color}66` : undefined,
              }}
            >
              {cat.label.slice(0, 2)}
            </div>
          </motion.div>
        );
      })}

      {/* Orbiting tech icons — actually rotate around center */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          className="absolute inset-0 z-30"
          initial={prefersReducedMotion ? false : { opacity: 0, rotate: -25 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 25 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0"
            animate={
              prefersReducedMotion ? undefined : { rotate: 360 }
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {orbitSkills.map((skill, i) => {
              const count = orbitSkills.length || 1;
              const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
              const radius = 30 + (i % 2) * 5;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;

              return (
                <div
                  key={skill}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {/* Counter-rotate so icons stay upright */}
                  <motion.div
                    animate={
                      prefersReducedMotion ? undefined : { rotate: -360 }
                    }
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="rounded-xl p-0.5"
                      style={{
                        boxShadow: `0 0 18px ${active.color}44`,
                        background: "rgba(10,10,12,0.75)",
                      }}
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : { y: [0, -4, 0] }
                      }
                      transition={{
                        duration: 2.2 + i * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={
                        prefersReducedMotion ? undefined : { scale: 1.15 }
                      }
                    >
                      <TechIcon skill={skill} size={38} />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Soft conic sweep */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-[18%] rounded-full pointer-events-none mix-blend-screen"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${active.color}28 50deg, transparent 100deg)`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}
