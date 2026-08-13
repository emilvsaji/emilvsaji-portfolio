"use client";

import React from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] font-mono">
      {/* Full-width hairline divider */}
      <div className="border-t border-white/[0.08]" />

      {/* Centered icon row */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex items-center justify-center gap-3">
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
          href="https://github.com/emilvsaji"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
          aria-label="GitHub"
        >
          <GitHubIcon className="w-3.5 h-3.5" />
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
    </footer>
  );
}
