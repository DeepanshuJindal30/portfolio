"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { techIconMap } from "@/data/skills";
import { cn } from "@/lib/utils";

interface TechIconProps {
  skill: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
  active?: boolean;
}

/** Local SVG marks for icons that fail on Simple Icons CDN */
const localIcons: Record<string, { bg: string; mark: React.ReactNode }> = {
  "SQL Server": {
    bg: "#CC2927",
    mark: (
      <g fill="white">
        <ellipse cx="24" cy="14" rx="12" ry="5" />
        <path d="M12 14v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8c0 2.8-5.4 5-12 5s-12-2.2-12-5z" />
        <path d="M12 22v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8c0 2.8-5.4 5-12 5s-12-2.2-12-5z" />
      </g>
    ),
  },
  LLMs: {
    bg: "#10A37F",
    mark: (
      <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 30c0-6 3.5-10 8-12 4.5 2 8 6 8 12" />
        <circle cx="24" cy="16" r="5" fill="white" stroke="none" />
        <path d="M14 18h-3M37 18h-3M24 8V5M18 10l-2-2M30 10l2-2" />
      </g>
    ),
  },
  LangChain: {
    bg: "#1C3C3C",
    mark: (
      <g fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="14" cy="24" r="5" />
        <circle cx="24" cy="14" r="5" />
        <circle cx="34" cy="24" r="5" />
        <circle cx="24" cy="34" r="5" />
        <path d="M18 20l3-3M30 20l-3-3M18 28l3 3M30 28l-3 3" />
      </g>
    ),
  },
  Gemini: {
    bg: "#8E75B2",
    mark: (
      <path
        fill="white"
        d="M24 8c0 8.8-7.2 16-16 16 8.8 0 16 7.2 16 16 0-8.8 7.2-16 16-16-8.8 0-16-7.2-16-16z"
      />
    ),
  },
  RAG: {
    bg: "#1C3C3C",
    mark: (
      <g fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="18" cy="18" r="6" />
        <path d="M22.5 22.5L30 30" />
        <path d="M28 16h8M32 12v8" />
      </g>
    ),
  },
  MCP: {
    bg: "#D97706",
    mark: (
      <g fill="white">
        <rect x="10" y="18" width="8" height="12" rx="2" />
        <rect x="20" y="14" width="8" height="16" rx="2" />
        <rect x="30" y="10" width="8" height="20" rx="2" />
      </g>
    ),
  },
  "REST APIs": {
    bg: "#6BA539",
    mark: (
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        API
      </text>
    ),
  },
  Microservices: {
    bg: "#2496ED",
    mark: (
      <g fill="white">
        <rect x="10" y="10" width="10" height="10" rx="2" />
        <rect x="28" y="10" width="10" height="10" rx="2" />
        <rect x="10" y="28" width="10" height="10" rx="2" />
        <rect x="28" y="28" width="10" height="10" rx="2" />
        <path d="M20 15h8M15 20v8M33 20v8M20 33h8" stroke="white" strokeWidth="1.5" />
      </g>
    ),
  },
  "EAS Build": {
    bg: "#000000",
    mark: (
      <path fill="white" d="M14 34L24 10l10 24H14zm4-3h12L24 16 18 31z" />
    ),
  },
  "Mobile UX": {
    bg: "#F24E1E",
    mark: (
      <g fill="white">
        <rect x="16" y="8" width="16" height="32" rx="3" />
        <rect x="19" y="12" width="10" height="20" rx="1" fill="#F24E1E" />
        <circle cx="24" cy="36" r="1.5" fill="#F24E1E" />
      </g>
    ),
  },
  YOLOv8: {
    bg: "#111111",
    mark: (
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        YOLO
      </text>
    ),
  },
  FAISS: {
    bg: "#0467DF",
    mark: (
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        FAISS
      </text>
    ),
  },
  JWT: {
    bg: "#000000",
    mark: (
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        JWT
      </text>
    ),
  },
};

function LocalSvgIcon({
  skill,
  size,
  className,
  active,
}: {
  skill: string;
  size: number;
  className?: string;
  active?: boolean;
}) {
  const local = localIcons[skill];
  if (!local) return null;
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 overflow-hidden transition-transform duration-300",
        active && "scale-110 border-accent/40 shadow-glow-sm",
        className
      )}
      style={{ width: size, height: size, background: local.bg }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-full w-full p-1">
        {local.mark}
      </svg>
    </div>
  );
}

function FallbackIcon({
  label,
  size,
  className,
}: {
  label: string;
  size: number;
  className?: string;
}) {
  const abbr = label
    .split(/[\s./]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-secondary/15 border border-white/15 font-mono font-bold text-white",
        className
      )}
      style={{ width: size, height: size, fontSize: Math.max(10, size * 0.28) }}
      aria-hidden="true"
    >
      {abbr}
    </div>
  );
}

function CdnIcon({
  slug,
  color,
  label,
  size,
  className,
  active,
  onFail,
}: {
  slug: string;
  color: string;
  label: string;
  size: number;
  className?: string;
  active?: boolean;
  onFail: () => void;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt={label}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={onFail}
      className={cn(
        "rounded-xl bg-zinc-900/80 p-1.5 object-contain border border-white/10 transition-transform duration-300",
        active && "scale-110 border-accent/40 shadow-glow-sm",
        className
      )}
    />
  );
}

export function TechIcon({
  skill,
  size = 44,
  className,
  showLabel = false,
  active = false,
}: TechIconProps) {
  const meta = techIconMap[skill];
  const prefersReducedMotion = useReducedMotion();
  const [cdnFailed, setCdnFailed] = useState(false);
  const hasLocal = Boolean(localIcons[skill]);

  let icon: React.ReactNode;
  if (hasLocal) {
    icon = (
      <LocalSvgIcon
        skill={skill}
        size={size}
        className={className}
        active={active}
      />
    );
  } else if (meta && !cdnFailed) {
    icon = (
      <CdnIcon
        slug={meta.slug}
        color={meta.color}
        label={meta.label}
        size={size}
        className={className}
        active={active}
        onFail={() => setCdnFailed(true)}
      />
    );
  } else {
    icon = <FallbackIcon label={skill} size={size} className={className} />;
  }

  if (!showLabel) return icon;

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {icon}
      <span className="text-[10px] font-mono text-zinc-500 text-center max-w-[72px] truncate">
        {meta?.label ?? skill}
      </span>
    </motion.div>
  );
}

interface SkillIconGridProps {
  skills: string[];
  activeColor?: string;
}

export function SkillIconGrid({ skills, activeColor }: SkillIconGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-5">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, scale: 0.6, rotateY: -90 }
          }
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: i * 0.05, duration: 0.35, type: "spring" }}
          className="flex justify-center"
          style={{ perspective: 600 }}
        >
          <TechIcon skill={skill} size={48} showLabel active={!!activeColor} />
        </motion.div>
      ))}
    </div>
  );
}
