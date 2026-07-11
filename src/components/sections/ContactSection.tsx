"use client";

import dynamic from "next/dynamic";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";

const SectionSkyDecor = dynamic(
  () =>
    import("@/components/three/SectionSkyDecor").then(
      (mod) => mod.SectionSkyDecor
    ),
  { ssr: false }
);

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "Website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {!prefersReducedMotion && (
        <SectionSkyDecor className="opacity-35 max-h-[280px] top-8 left-0 right-auto w-[min(100%,380px)]" />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Get in Touch"
          title="Contact"
          description="Open to engineering roles, collaborations, and interesting product builds."
          align="center"
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl p-6 md:p-8 glass-card gradient-border"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center lg:text-left">
              <div className="flex flex-col lg:items-start items-center gap-2 mb-6 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  {siteConfig.location}
                </span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </div>

              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Interested in full-stack engineering, distributed systems,
                agentic AI, or mobile product development? Let&apos;s connect.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <Button href={`mailto:${siteConfig.email}`} variant="primary">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {siteConfig.email}
                </Button>
                <Button
                  href={siteConfig.github}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  GitHub
                </Button>
                <Button
                  href={siteConfig.linkedin}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  LinkedIn
                </Button>
                <Button
                  href={withBasePath(siteConfig.resume)}
                  variant="ghost"
                  download="Deepanshu-Jindal-Resume.pdf"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Resume
                </Button>
              </div>

              <a
                href={`mailto:${siteConfig.email}?subject=Portfolio%20Inquiry`}
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                Send me a message
              </a>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5 space-y-3"
            >
              <p className="text-sm font-mono uppercase tracking-wider text-zinc-400">
                Quick Inquiry
              </p>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <textarea
                placeholder="Tell me about the role/project..."
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                required
              />
              <Button type="submit" variant="primary" className="w-full">
                <Send className="w-4 h-4" aria-hidden="true" />
                Send Inquiry
              </Button>
              {submitted && (
                <p className="text-xs text-emerald-400">
                  Your mail app opened with this message pre-filled.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
