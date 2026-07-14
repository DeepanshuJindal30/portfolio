"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Expand, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const PREVIEW_SRC = `${base}/images/agentic-architecture-preview.webp`;
const FULL_SRC = `${base}/images/agentic-architecture.webp`;

interface ArchitectureDiagramImageProps {
  className?: string;
}

export function ArchitectureDiagramImage({
  className,
}: ArchitectureDiagramImageProps) {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className={cn("mt-3", className)}>
        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
          Full system diagram
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "group relative w-full overflow-hidden rounded-xl border border-white/10",
            "bg-black/40 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            "hover:border-accent/35 transition-colors"
          )}
          aria-label="Open full Agentic AI architecture diagram"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PREVIEW_SRC}
            alt="Agentic AI end-to-end workflow preview"
            className="w-full h-auto max-h-[180px] sm:max-h-[220px] object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
            loading="lazy"
            decoding="async"
            width={1200}
            height={675}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <span className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
            <span className="text-[11px] sm:text-xs text-zinc-200 font-medium truncate">
              Agentic AI · End-to-end workflow
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/15 border border-accent/30 rounded-full px-2 py-1 shrink-0">
              <ZoomIn className="w-3 h-3" aria-hidden="true" />
              Expand
            </span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Agentic AI architecture diagram"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              aria-label="Close diagram"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl border border-white/15 bg-[#0a0a0c] shadow-2xl overflow-hidden"
              initial={
                prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, scale: 0.96, y: 8 }
              }
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
            >
              <div className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 border-b border-white/10 shrink-0">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    Agentic AI · End-to-end workflow
                  </p>
                  <p className="text-[10px] text-zinc-500 font-mono truncate">
                    Jira / Traffic discovery → LoadRunner Controller
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={FULL_SRC}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 hover:text-white px-2 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <Expand className="w-3 h-3" aria-hidden="true" />
                    Open
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="overflow-auto flex-1 p-2 sm:p-3 bg-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FULL_SRC}
                  alt="Full Agentic AI end-to-end architecture diagram"
                  className="w-full h-auto rounded-lg"
                  decoding="async"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
