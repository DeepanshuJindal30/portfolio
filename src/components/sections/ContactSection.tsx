"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
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
          className="max-w-2xl mx-auto rounded-2xl p-8 md:p-12 glass-card gradient-border text-center"
        >
          <div className="flex flex-col items-center gap-2 mb-6 text-sm text-zinc-400">
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
            Interested in full-stack engineering, distributed systems, agentic AI,
            or mobile product development? Let&apos;s connect.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
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
        </motion.div>
      </div>
    </section>
  );
}
