"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050508]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-sm font-semibold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
        >
          DJ<span className="text-indigo-400">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1" role="list">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-3 py-2"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
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
          className="lg:hidden fixed inset-0 top-16 bg-[#050508]/95 backdrop-blur-xl z-40"
        >
          <ul className="flex flex-col p-6 gap-2" role="list">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-lg text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="block text-center px-4 py-3 rounded-lg bg-white text-black font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
