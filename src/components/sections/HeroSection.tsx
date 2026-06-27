"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/ui/HeroIllustration";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-stone-400 mb-2 font-display">
                {siteConfig.heroGreeting}{" "}
                <span className="text-accent font-semibold">
                  {siteConfig.heroFirstName}
                </span>
              </p>
              <h1
                id="hero-heading"
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]"
              >
                {siteConfig.heroRole}
              </h1>
              <p className="text-base md:text-lg text-stone-400 leading-relaxed mb-8 max-w-lg">
                {siteConfig.subheadline}
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                href="#contact"
                variant="primary"
                className="rounded-full px-8 py-3 text-base hover:scale-[1.03] transition-transform shadow-glow-sm"
              >
                Hire me
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="icon"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 pb-24 md:pb-32"
          >
            <HeroIllustration
              avatar={siteConfig.avatar}
              name={siteConfig.name}
            />
            <TestimonialCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
