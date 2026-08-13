"use client";

import React from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 font-mono">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5]">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#71717a] mt-1">
            Have a project, role, or collaboration in mind? Reach out directly.
          </p>
        </div>

        {/* Invitation sentence */}
        <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-5">
          Need help with a project, or just want to say hi?{" "}
          <a
            href="https://linkedin.com/in/emilvsaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5f5f5] hover:text-white underline underline-offset-2 transition-colors"
          >
            DM on LinkedIn
          </a>{" "}
          — I typically reply within a day.
        </p>

        {/* Icon link row — no card wrapper */}
        <div className="flex items-center gap-1.5">
          <a
            href="https://linkedin.com/in/emilvsaji"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/emilvsaji"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://twitter.com/emilvsaji"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
            aria-label="X / Twitter"
            title="X / Twitter"
          >
            <XIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:emilsaji48@gmail.com"
            className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-900 transition-colors"
            aria-label="Email"
            title="emilsaji48@gmail.com"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
