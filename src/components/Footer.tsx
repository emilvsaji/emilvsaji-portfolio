"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-800 flex items-center justify-center sm:justify-start gap-1">
              <span>Emil V Saji</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-normal">© 2026</span>
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Full-Stack Developer · Kerala, India
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:emilsaji48@gmail.com"
                className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-slate-200"></div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
