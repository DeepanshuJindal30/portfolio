"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/ui/HeroIllustration";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { HeroFloatingOrbs } from "@/components/ui/HeroFloatingOrbs";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-14 sm:pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroFloatingOrbs />
      <div
        className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 w-full relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-stone-400 mb-2 font-display">
                {siteConfig.heroGreeting}{" "}
                <span className="text-accent font-semibold">
                  {siteConfig.heroFirstName}
                </span>
              </p>
              <h1
                id="hero-heading"
                className="font-display text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white mb-4 sm:mb-6"
              >
                {siteConfig.heroRole}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-stone-400 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                {siteConfig.subheadline}
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Button
                href="#contact"
                variant="primary"
                className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base hover:scale-[1.03] transition-transform shadow-glow-sm"
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
            className="relative order-1 lg:order-2 flex flex-col items-center gap-6 lg:gap-0 lg:pb-32"
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
