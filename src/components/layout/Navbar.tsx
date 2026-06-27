"use client";

import { useState, useEffect, useMemo } from "react";
import { Download, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn, withBasePath } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () => siteConfig.navLinks.map((link) => link.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClass = (href: string) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    return cn(
      "relative px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg",
      isActive
        ? "nav-link-active text-accent"
        : "text-stone-400 hover:text-white"
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="text-lg font-display font-bold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded lowercase"
        >
          deepanshu<span className="text-accent">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-2" role="list">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={withBasePath(siteConfig.resume)}
          download="Deepanshu-Jindal-Resume.pdf"
          className="hidden lg:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/15 text-stone-300 hover:text-white hover:border-accent/40 hover:bg-accent/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Download Resume
        </a>

        <button
          type="button"
          className="lg:hidden p-2 text-stone-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40"
        >
          <ul className="flex flex-col p-6 gap-2" role="list">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-lg rounded-lg transition-colors",
                    activeSection === link.href.replace("#", "")
                      ? "text-accent bg-accent/10"
                      : "text-stone-300 hover:text-white hover:bg-white/5"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <a
                href={withBasePath(siteConfig.resume)}
                download="Deepanshu-Jindal-Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/15 text-stone-300"
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
