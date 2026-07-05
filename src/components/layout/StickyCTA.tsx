"use client";

import { useEffect, useState } from "react";
import { Download, Mail } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { cn, withBasePath } from "@/lib/utils";

export function StickyCTA() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "fixed bottom-4 left-1/2 -translate-x-1/2 z-[90]",
            "flex items-center gap-2 px-2 py-2 rounded-full",
            "bg-zinc-950/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
          )}
          role="group"
          aria-label="Quick actions"
        >
          <a
            href={withBasePath(siteConfig.resume)}
            download="Deepanshu-Jindal-Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/15 border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
