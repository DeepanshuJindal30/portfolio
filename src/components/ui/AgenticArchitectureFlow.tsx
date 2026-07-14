"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRightLeft,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  Database,
  FileCode2,
  FileSearch,
  FolderKanban,
  Gauge,
  GitBranch,
  Link2,
  Mic,
  MonitorPlay,
  Play,
  RotateCcw,
  ShieldCheck,
  Ticket,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  agenticArchitectureGroups,
  agenticArchitectureLanes,
  agenticArchitectureHighlights,
  agenticFlowSequence,
  agenticStackRail,
  type AgenticNodeIcon,
} from "@/data/agenticArchitecture";
import { cn } from "@/lib/utils";

const nodeIcons: Record<AgenticNodeIcon, LucideIcon> = {
  jira: Ticket,
  splunk: BarChart3,
  video: Mic,
  bridge: ArrowRightLeft,
  extract: FileSearch,
  llm: Bot,
  validate: ShieldCheck,
  correlate: Link2,
  bruno: FolderKanban,
  vugen: FileCode2,
  controller: Gauge,
  run: MonitorPlay,
  checkpoint: RotateCcw,
};

const laneIcons: Record<string, LucideIcon> = {
  sources: Database,
  bridge: ArrowRightLeft,
  orchestrate: Bot,
  generate: FileCode2,
  execute: Play,
};

const railIcons = {
  llm: Bot,
  api: Workflow,
  desktop: CheckCircle2,
} as const;

const railTone = {
  violet: {
    border: "border-violet-500/25",
    bg: "bg-violet-500/5",
    title: "text-violet-200",
    icon: "text-violet-400",
  },
  sky: {
    border: "border-sky-500/25",
    bg: "bg-sky-500/5",
    title: "text-sky-200",
    icon: "text-sky-400",
  },
  emerald: {
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/5",
    title: "text-emerald-200",
    icon: "text-emerald-400",
  },
} as const;

function AnimatedConnector({
  active,
  color,
  vertical = false,
}: {
  active: boolean;
  color: string;
  vertical?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative shrink-0 flex items-center justify-center",
        vertical ? "h-6 w-full" : "w-6 md:w-8 h-auto self-center"
      )}
      aria-hidden="true"
    >
      <div
        className={cn("absolute rounded-full", vertical ? "w-px h-full" : "h-px w-full")}
        style={{
          background: `linear-gradient(${vertical ? "180deg" : "90deg"}, transparent, ${color}77, transparent)`,
        }}
      />
      {!prefersReducedMotion && (
        <motion.span
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
            width: vertical ? 4 : 7,
            height: vertical ? 7 : 4,
          }}
          animate={
            vertical
              ? { y: ["-35%", "35%"], opacity: active ? [0.35, 1, 0.35] : 0.3 }
              : { x: ["-35%", "35%"], opacity: active ? [0.35, 1, 0.35] : 0.3 }
          }
          transition={{
            duration: active ? 0.85 : 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

function FlowNodeCard({
  label,
  detail,
  phase,
  color,
  icon,
  tools,
  index,
  active,
}: {
  label: string;
  detail: string;
  phase?: string;
  color: string;
  icon: AgenticNodeIcon;
  tools?: string[];
  index: number;
  active: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = nodeIcons[icon] ?? Workflow;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: active ? 1.04 : 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="relative min-w-[148px] max-w-[170px] flex-1"
    >
      {active && !prefersReducedMotion && (
        <motion.div
          className="absolute -inset-1 rounded-xl blur-md"
          style={{ background: `${color}30` }}
          animate={{ opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          "relative rounded-xl border bg-zinc-950/90 px-2.5 py-2.5 backdrop-blur-sm transition-all",
          active && "shadow-lg"
        )}
        style={{
          borderColor: active ? `${color}aa` : `${color}44`,
          boxShadow: active ? `0 0 18px ${color}28` : undefined,
        }}
      >
        <div className="flex items-start gap-2 mb-1.5">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border"
            style={{
              borderColor: `${color}55`,
              background: `${color}18`,
              color,
            }}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            {phase && (
              <span
                className="inline-block text-[8px] font-mono uppercase tracking-wider mb-0.5 px-1 py-px rounded"
                style={{ color, background: `${color}18` }}
              >
                {phase}
              </span>
            )}
            <p className="text-[11px] font-semibold text-white leading-tight">
              {label}
            </p>
          </div>
        </div>
        <p className="text-[9px] text-zinc-500 leading-snug line-clamp-2 mb-1.5">
          {detail}
        </p>
        {tools && tools.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-[8px] font-mono px-1.5 py-0.5 rounded border border-white/10 text-zinc-400 bg-white/[0.03]"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CompactPreview({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {agenticArchitectureGroups.map((group, i) => {
        const active = activeIndex % agenticArchitectureGroups.length === i;
        const Icon = laneIcons[group.id] ?? Workflow;
        return (
          <div key={group.id} className="flex items-center gap-1.5">
            <motion.span
              className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
              animate={{
                borderColor: active ? `${group.color}99` : `${group.color}33`,
                backgroundColor: active ? `${group.color}22` : `${group.color}0D`,
                color: group.color,
                scale: active ? 1.04 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-3 h-3" aria-hidden="true" />
              {group.label}
            </motion.span>
            {i < agenticArchitectureGroups.length - 1 && (
              <span className="text-zinc-600 text-[10px]" aria-hidden="true">
                →
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ExpandedPipeline({ activeNodeId }: { activeNodeId: string }) {
  const prefersReducedMotion = useReducedMotion();
  let nodeIndex = 0;

  return (
    <div className="mt-2 relative rounded-xl border border-white/8 bg-black/30 p-3 sm:p-4 overflow-hidden">
      <div className="relative z-10 flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
          <Workflow className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          Connected agentic pipeline
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/90">
          <GitBranch className="w-3 h-3" aria-hidden="true" />
          Checkpoint resume
        </div>
      </div>

      <div className="relative z-10 space-y-3">
        {agenticArchitectureLanes.map((lane, laneIndex) => {
          const LaneIcon = laneIcons[lane.id] ?? Workflow;
          return (
            <div key={lane.id}>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-md border"
                  style={{
                    borderColor: `${lane.color}55`,
                    background: `${lane.color}18`,
                    color: lane.color,
                  }}
                >
                  <LaneIcon className="h-3 w-3" aria-hidden="true" />
                </span>
                <span
                  className="text-[10px] font-mono uppercase tracking-[0.16em]"
                  style={{ color: lane.color }}
                >
                  {lane.label}
                </span>
                {lane.id === "bridge" && (
                  <span className="text-[9px] text-zinc-600 font-mono">
                    /api/workload/export
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-0">
                {lane.nodes.map((node, i) => {
                  const idx = nodeIndex++;
                  const active = activeNodeId === node.id;
                  return (
                    <div
                      key={node.id}
                      className="flex flex-col sm:flex-row items-center"
                    >
                      <FlowNodeCard
                        label={node.label}
                        detail={node.detail}
                        phase={node.phase}
                        color={lane.color}
                        icon={node.icon}
                        tools={node.tools}
                        index={idx}
                        active={active}
                      />
                      {i < lane.nodes.length - 1 && (
                        <>
                          <div className="hidden sm:block">
                            <AnimatedConnector
                              active={
                                active ||
                                activeNodeId === lane.nodes[i + 1]?.id
                              }
                              color={lane.color}
                            />
                          </div>
                          <div className="sm:hidden w-full">
                            <AnimatedConnector
                              active={active}
                              color={lane.color}
                              vertical
                            />
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {laneIndex < agenticArchitectureLanes.length - 1 && (
                <div className="flex justify-center my-0.5">
                  <AnimatedConnector
                    active={!prefersReducedMotion}
                    color={agenticArchitectureLanes[laneIndex + 1].color}
                    vertical
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mt-3 pt-3 border-t border-white/8 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {agenticStackRail.map((item) => {
          const Icon = railIcons[item.id as keyof typeof railIcons] ?? Bot;
          const tone = railTone[item.color];
          return (
            <div
              key={item.id}
              className={cn(
                "flex items-start gap-2 rounded-lg border px-2.5 py-2",
                tone.border,
                tone.bg
              )}
            >
              <Icon className={cn("w-3.5 h-3.5 shrink-0 mt-0.5", tone.icon)} />
              <div>
                <p className={cn("text-[10px] font-semibold", tone.title)}>
                  {item.title}
                </p>
                <p className="text-[9px] text-zinc-500">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <ul className="relative z-10 mt-3 space-y-1" role="list">
        {agenticArchitectureHighlights.slice(0, 2).map((item) => (
          <li
            key={item}
            className="text-[10px] text-zinc-500 flex items-start gap-1.5"
          >
            <span className="text-accent mt-0.5" aria-hidden="true">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AgenticArchitectureFlow() {
  const prefersReducedMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !inView) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % Math.max(agenticFlowSequence.length, 1));
    }, 1100);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion, inView]);

  const activeNodeId =
    agenticFlowSequence[activeIndex % agenticFlowSequence.length]?.id ?? "";

  return (
    <div
      ref={rootRef}
      aria-label="LR Agentic AI connected architecture pipeline"
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={cn(
          "w-full text-left rounded-xl border transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          expanded
            ? "border-accent/30 bg-black/25"
            : "border-white/10 bg-white/[0.03] hover:border-accent/25"
        )}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2.5">
          <div className="min-w-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              Architecture Pipeline
            </p>
            {!expanded && <CompactPreview activeIndex={activeIndex} />}
            {expanded && (
              <p className="text-xs text-zinc-400">
                Icon-rich connected flow · 13 phases
              </p>
            )}
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] text-accent hidden sm:inline">
              {expanded ? "Hide" : "Expand"}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-accent transition-transform",
                expanded && "rotate-180"
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ExpandedPipeline activeNodeId={activeNodeId} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
