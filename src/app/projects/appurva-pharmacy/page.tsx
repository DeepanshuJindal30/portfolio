import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, Github } from "lucide-react";
import { appurvaPharmacyCaseStudy } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { AnimatedGrid } from "@/components/layout/AnimatedGrid";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${appurvaPharmacyCaseStudy.title} — Case Study | Deepanshu Jindal`,
  description: appurvaPharmacyCaseStudy.tagline,
};

export default function AppurvaPharmacyCaseStudyPage() {
  const study = appurvaPharmacyCaseStudy;

  return (
    <>
      <AnimatedGrid />
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Portfolio
          </Link>

          <header className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-3">
              Case Study
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {study.title}
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {study.tagline}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {study.links.github && (
                <Button
                  href={study.links.github}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  GitHub Repo
                </Button>
              )}
              {study.links.apk && (
                <Button
                  href={withBasePath(study.links.apk)}
                  variant="primary"
                  download="Appurva-Pharmacy.apk"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download APK
                </Button>
              )}
            </div>
          </header>

          <div className="space-y-12">
            <section aria-labelledby="problem-heading">
              <h2
                id="problem-heading"
                className="text-xl font-semibold text-white mb-4"
              >
                Problem
              </h2>
              <p className="text-zinc-400 leading-relaxed">{study.problem}</p>
            </section>

            <section aria-labelledby="solution-heading">
              <h2
                id="solution-heading"
                className="text-xl font-semibold text-white mb-4"
              >
                Solution
              </h2>
              <p className="text-zinc-400 leading-relaxed">{study.solution}</p>
            </section>

            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-xl font-semibold text-white mb-4"
              >
                Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3" role="list">
                {study.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-zinc-400 flex items-start gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/5"
                  >
                    <span className="text-cyan-500 shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="tech-heading">
              <h2
                id="tech-heading"
                className="text-xl font-semibold text-white mb-4"
              >
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <SkillBadge key={tech} label={tech} variant="accent" />
                ))}
              </div>
            </section>

            <section aria-labelledby="architecture-heading">
              <h2
                id="architecture-heading"
                className="text-xl font-semibold text-white mb-4"
              >
                Architecture
              </h2>
              <div className="rounded-xl p-6 bg-black/30 border border-white/5 space-y-3">
                {study.architecture.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="text-xs font-mono text-indigo-400 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-zinc-300">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="screenshots-heading">
              <h2
                id="screenshots-heading"
                className="text-xl font-semibold text-white mb-6"
              >
                Screenshots
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {study.screenshots.map((screenshot, i) => (
                  <div
                    key={screenshot}
                    className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-zinc-900"
                  >
                    <Image
                      src={screenshot}
                      alt={`${study.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="challenges-heading">
              <h2
                id="challenges-heading"
                className="text-xl font-semibold text-white mb-4"
              >
                Challenges
              </h2>
              <ul className="space-y-2" role="list">
                {study.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="text-sm text-zinc-400 flex items-start gap-2"
                  >
                    <span className="text-amber-500 mt-0.5" aria-hidden="true">
                      ▸
                    </span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="future-heading">
              <h2
                id="future-heading"
                className="text-xl font-semibold text-white mb-4"
              >
                Future Improvements
              </h2>
              <ul className="space-y-2" role="list">
                {study.futureImprovements.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-400 flex items-start gap-2"
                  >
                    <span className="text-emerald-500 mt-0.5" aria-hidden="true">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
