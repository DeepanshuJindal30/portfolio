import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-white mb-1 lowercase">
              deepanshu<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-stone-500">
              Full-Stack & AI Systems Engineer
            </p>
          </div>

          <nav aria-label="Footer social links">
            <ul className="flex items-center gap-4" role="list">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-stone-500 hover:text-accent transition-colors rounded-lg hover:bg-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-stone-500 hover:text-accent transition-colors rounded-lg hover:bg-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-2 text-stone-500 hover:text-accent transition-colors rounded-lg hover:bg-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Send email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-stone-600">
            © {year} {siteConfig.name}. Crafted with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
