"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  Mail,
  Sparkles,
  Check,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";
import { useToast } from "./Toast";

export default function Hero() {
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("emilsaji48@gmail.com");
    setCopied(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
          {/* Text Content */}
          <div className="flex-1 space-y-4">
            {/* Title & Subheading */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f5] font-mono">
                Hi, I&apos;m Emil V Saji
              </h1>
              <p className="mt-2 text-base sm:text-lg font-medium text-[#f5f5f5] font-mono">
                21yo Full-Stack Web Developer from Kerala, India
              </p>
            </div>

            {/* Bio */}
            <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed max-w-xl font-mono">
              Specializing in React, Next.js, Node.js, and clean database architectures. Building robust web products with high performance and clean aesthetics.
            </p>

            {/* Icon / Pill Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 font-mono">
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#f5f5f5] text-xs font-medium border border-white/[0.12] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#a1a1aa]" />
                <span>Resume</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#a1a1aa] hover:text-[#f5f5f5] border border-white/[0.08] hover:border-white/20 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#a1a1aa] hover:text-[#f5f5f5] border border-white/[0.08] hover:border-white/20 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#a1a1aa] hover:text-[#f5f5f5] border border-white/[0.08] hover:border-white/20 transition-colors"
                aria-label="X / Twitter Profile"
                title="X / Twitter"
              >
                <XIcon className="w-4 h-4" />
              </a>

              {/* Email Button */}
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#a1a1aa] hover:text-[#f5f5f5] border border-white/[0.08] hover:border-white/20 transition-colors cursor-pointer"
                aria-label="Copy Email"
                title="Click to copy email (emilsaji48@gmail.com)"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Mail className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Profile Photo / Avatar Frame */}
          <div className="shrink-0 relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl border border-white/[0.12] bg-zinc-900 p-1 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/profile.png"
                alt="Emil V Saji"
                width={144}
                height={144}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>

            {/* Quick Badge */}
            <div className="absolute -bottom-2.5 -right-2 bg-zinc-900 border border-white/[0.12] rounded-md px-2 py-0.5 flex items-center gap-1 text-[10px] font-mono text-[#f5f5f5] shadow-lg">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              <span>1st Place UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

