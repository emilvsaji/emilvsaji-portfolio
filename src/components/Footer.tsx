"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#0a0a0a] border-t border-white/[0.08] font-mono">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold text-[#f5f5f5] flex items-center justify-center sm:justify-start gap-1.5">
              <span>Emil V Saji</span>
              <span className="text-zinc-700">•</span>
              <span className="text-[#71717a] font-normal">© 2026</span>
            </p>
            <p className="text-[11px] text-[#71717a] mt-0.5">
              Full-Stack Developer · Kerala, India
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <a
                href="https://github.com/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com/in/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
                aria-label="X / Twitter"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:emilsaji48@gmail.com"
                className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="h-3.5 w-px bg-white/[0.08]"></div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[11px] text-[#a1a1aa] hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] px-2.5 py-1 rounded-md transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

