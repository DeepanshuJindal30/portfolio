"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  ImageIcon,
  Play,
} from "lucide-react";
import { mobileApps } from "@/data/projects";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AppScreenshotGallery } from "@/components/ui/AppScreenshotGallery";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { AppurvaLogo } from "@/components/ui/AppurvaLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { withBasePath } from "@/lib/utils";

export function MobileSection() {
  const prefersReducedMotion = useReducedMotion();
  const app = mobileApps[0];

  return (
    <section
      id="mobile"
      className="section-padding"
      aria-labelledby="mobile-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Mobile App"
          title="Appurva Pharmacy"
          align="center"
        />

        <motion.article
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-card gradient-border overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-secondary mb-3">
                React Native · Expo · Supabase
              </span>
              <div className="flex items-center gap-3 mb-4">
                <AppurvaLogo height={48} />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {app.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {app.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {app.technologies.map((tech) => (
                  <SkillBadge key={tech} label={tech} variant="accent" />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
                <Link
                  href="/projects/appurva-pharmacy"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 bg-white text-black hover:bg-zinc-200 border border-white/20 shadow-lg shadow-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                {app.links?.apk && (
                  <Button
                    href={withBasePath(app.links.apk)}
                    variant="outline"
                    download="Appurva-Pharmacy.apk"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download APK
                  </Button>
                )}
                {app.links?.github && (
                  <Button
                    href={app.links.github}
                    variant="ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    GitHub Repo
                  </Button>
                )}
                <Button href="#app-demo-video" variant="ghost">
                  <Play className="w-4 h-4" aria-hidden="true" />
                  Watch Demo
                </Button>
                <Button href="#app-screenshots" variant="ghost">
                  <ImageIcon className="w-4 h-4" aria-hidden="true" />
                  Screenshots
                </Button>
              </div>
            </div>

            <div
              id="app-demo-video"
              className="relative p-6 sm:p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-accent/5 to-accent-secondary/5 order-1 lg:order-2 min-h-[320px] sm:min-h-[380px]"
            >
              <PhoneMockup
                screenshots={app.screenshots}
                alt={app.title}
                videoSrc={app.demoVideo}
              />
            </div>
          </div>
        </motion.article>

        {app.screenshotGallery && app.screenshotGallery.length > 0 && (
          <motion.div
            id="app-screenshots"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-12"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-6 text-center">
              App Screenshots
            </h3>
            <AppScreenshotGallery screenshots={app.screenshotGallery} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
