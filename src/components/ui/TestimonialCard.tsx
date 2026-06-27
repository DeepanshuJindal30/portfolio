"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function TestimonialCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute -bottom-4 left-0 right-0 md:left-4 md:right-auto md:max-w-sm z-30"
    >
      <div className="glass-card-warm rounded-2xl p-5 shadow-glow-sm">
        <Quote
          className="w-8 h-8 text-accent/60 mb-3"
          aria-hidden="true"
        />
        <p className="text-sm text-stone-300 leading-relaxed mb-4">
          &ldquo;Rare depth — payroll systems at 3M+ scale, agentic AI that
          ships, and IEEE-published research. A builder who delivers end to
          end.&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/30 shrink-0">
            <Image
              src={siteConfig.avatar}
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              Engineering Focus
            </p>
            <p className="text-xs text-stone-500">
              Full-Stack · AI Systems · Mobile
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
