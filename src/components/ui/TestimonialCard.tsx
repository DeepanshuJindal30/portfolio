"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { siteConfig } from "@/data/site";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  className?: string;
}

export function TestimonialCard({ className }: TestimonialCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={cn(
        "w-full max-w-sm mx-auto lg:mx-0",
        "lg:absolute lg:-bottom-8 lg:left-4 lg:right-auto lg:max-w-sm lg:z-20",
        className
      )}
    >
      <Tilt3D intensity={10}>
        <div className="glass-card-warm rounded-2xl p-4 sm:p-5 shadow-glow-sm">
          <Quote
            className="w-7 h-7 sm:w-8 sm:h-8 text-accent/60 mb-2 sm:mb-3"
            aria-hidden="true"
          />
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-3 sm:mb-4">
            &ldquo;Rare depth — payroll systems at 3M+ scale, agentic AI that
            ships, and IEEE-published research. A builder who delivers end to
            end.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-full border-2 border-accent/30">
              <ProfileImage
                src={siteConfig.avatar}
                alt=""
                className="h-full w-full object-cover"
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
      </Tilt3D>
    </motion.div>
  );
}
