"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  ChevronDown,
  FileCode2,
  GitBranch,
  Play,
  ShieldCheck,
  Ticket,
  Workflow,
} from "lucide-react";
import {
  agenticArchitectureGroups,
  agenticArchitectureNodes,
  agenticArchitectureHighlights,
} from "@/data/agenticArchitecture";
import { cn } from "@/lib/utils";

const groupIcons: Record<string, typeof Ticket> = {
  ingest: Ticket,
  intelligence: Bot,
  generate: FileCode2,
  execute: Play,
};

function FlowConnector({
  vertical = false,
  className,
}: {
  vertical?: boolean;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden",
        vertical ? "w-px h-8 mx-auto" : "h-px w-6 md:w-10",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      {!prefersReducedMotion && (
        <motion.div
          className={cn(
            "absolute bg-accent",
            vertical ? "left-0 w-full h-2" : "top-0 h-full w-2"
          )}
          animate={{ x: vertical ? 0 : [0, 24, 0], y: vertical ? [0, 20, 0] : 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

function FlowNode({
  label,
  detail,
  color,
  index,
  compact = false,
}: {
  label: string;
  detail: string;
  color: string;
  index: number;
  compact?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (compact) {
    return (
      <span
        className="text-[10px] font-mono text-zinc-400 px-2 py-1 rounded-md border border-white/8 bg-white/[0.03] whitespace-nowrap"
        style={{ borderColor: `${color}33` }}
      >
        {label}
      </span>
    );
  }

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative min-w-[140px] max-w-[170px] flex-1"
    >
      <div
        className="relative rounded-xl border bg-zinc-950/80 px-3 py-2.5 backdrop-blur-sm transition-colors group-hover:border-white/20"
        style={{ borderColor: `${color}44` }}
      >
        <p className="text-xs font-semibold text-white mb-0.5 leading-tight">
          {label}
        </p>
        <p className="text-[10px] text-zinc-500 leading-snug line-clamp-2">
          {detail}
        </p>
      </div>
    </motion.div>
  );
}

function GroupLane({
  group,
  nodes,
  startIndex,
  compact = false,
}: {
  group: (typeof agenticArchitectureGroups)[number];
  nodes: typeof agenticArchitectureNodes;
  startIndex: number;
  compact?: boolean;
}) {
  const Icon = groupIcons[group.id] ?? Workflow;

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 shrink-0">
        <div
          className="flex h-6 w-6 items-center justify-center rounded-md border shrink-0"
          style={{
            borderColor: `${group.color}55`,
            background: `${group.color}18`,
          }}
        >
          <Icon className="h-3 w-3" style={{ color: group.color }} />
        </div>
        <span
          className="text-[10px] font-mono uppercase tracking-wider hidden sm:inline"
          style={{ color: group.color }}
        >
          {group.label}
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-2.5">
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg border"
          style={{
            borderColor: `${group.color}55`,
            background: `${group.color}18`,
          }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color: group.color }} />
        </div>
        <span
          className="text-[10px] font-mono uppercase tracking-[0.18em]"
          style={{ color: group.color }}
        >
          {group.label}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex flex-col sm:flex-row items-center">
            <FlowNode
              label={node.label}
              detail={node.detail}
              color={group.color}
              index={startIndex + i}
            />
            {i < nodes.length - 1 && (
              <>
                <FlowConnector className="hidden sm:block" />
                <FlowConnector vertical className="sm:hidden" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CompactPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-1">
      {agenticArchitectureGroups.map((group, i) => (
        <div key={group.id} className="flex items-center gap-2 sm:gap-3">
          <GroupLane
            group={group}
            nodes={[]}
            startIndex={0}
            compact
          />
          {i < agenticArchitectureGroups.length - 1 && (
            <span className="text-zinc-600 text-xs" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function AgenticArchitectureFlow() {
  const prefersReducedMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  let nodeIndex = 0;

  return (
    <div className="relative" aria-label="LR Agentic AI system architecture pipeline">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={cn(
          "w-full text-left rounded-xl border transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          expanded
            ? "border-accent/30 bg-black/30"
            : "border-white/10 bg-white/[0.03] hover:border-accent/25 hover:bg-white/[0.05]"
        )}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
              Architecture Pipeline
            </p>
            {!expanded && (
              <p className="text-sm text-zinc-400">
                Jira → Validate → Generate → Execute
                <span className="text-zinc-600"> · 13 phases · checkpoint resume</span>
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-accent hidden sm:inline">
              {expanded ? "Hide" : "View pipeline"}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-accent transition-transform duration-200",
                expanded && "rotate-180"
              )}
              aria-hidden="true"
            />
          </div>
        </div>

        {!expanded && (
          <div className="px-4 pb-3 border-t border-white/5 pt-3">
            <CompactPreview />
          </div>
        )}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id="agentic-architecture-panel"
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 relative rounded-2xl border border-white/8 bg-black/25 p-4 md:p-5">
              <div className="flex items-center justify-end mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/90">
                  <GitBranch className="w-3 h-3" aria-hidden="true" />
                  Checkpoint resume enabled
                </div>
              </div>

              <div className="space-y-5 md:space-y-6 relative z-10">
                {agenticArchitectureGroups.map((group) => {
                  const nodes = agenticArchitectureNodes.filter(
                    (n) => n.group === group.id
                  );
                  const start = nodeIndex;
                  nodeIndex += nodes.length;
                  return (
                    <GroupLane
                      key={group.id}
                      group={group}
                      nodes={nodes}
                      startIndex={start}
                    />
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-white/8 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="flex items-start gap-2 rounded-lg border border-violet-500/20 bg-violet-500/5 px-3 py-2">
                  <Bot className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-semibold text-violet-200">LLM Action Schema</p>
                    <p className="text-[10px] text-zinc-500">OpenAI / Azure · structured JSON actions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-sky-500/20 bg-sky-500/5 px-3 py-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-semibold text-sky-200">FastAPI Orchestrator</p>
                    <p className="text-[10px] text-zinc-500">React SPA · progress polling</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-semibold text-emerald-200">PyWinAuto + Whisper</p>
                    <p className="text-[10px] text-zinc-500">UI fallback · video extraction</p>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-1" role="list">
                {agenticArchitectureHighlights.map((item) => (
                  <li
                    key={item}
                    className="text-[10px] text-zinc-500 flex items-start gap-2"
                  >
                    <span className="text-accent mt-0.5" aria-hidden="true">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
