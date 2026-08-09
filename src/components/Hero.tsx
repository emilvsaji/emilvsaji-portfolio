"use client";

import React from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Download,
  MapPin,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
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
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-5">
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for full-time & freelance roles</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3 h-3 text-slate-400" />
                Kerala, India
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hey, I&apos;m{" "}
                <span className="gradient-text">Emil V Saji</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-700">
                Full-stack web developer building scalable web apps and modern UIs.
              </p>
            </div>

            {/* Bio */}
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
              Specializing in <span className="text-slate-900 font-semibold">React, Next.js, Node.js</span>, and clean database architectures. Passionate about building robust web products with crisp interactions, high performance, and clean developer aesthetics.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-sm transition-all hover:shadow-md"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium border border-slate-200 transition-colors"
                title="Click to copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-3 flex items-center gap-3 text-slate-500">
              <a
                href="https://github.com/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:emilsaji48@gmail.com"
                className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:text-rose-600 hover:bg-rose-50/50 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:8078390442"
                className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:text-emerald-600 hover:bg-emerald-50/50 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <div className="h-4 w-px bg-slate-200 mx-1"></div>
              <span className="text-xs text-slate-400 font-mono">
                emilsaji48@gmail.com
              </span>
            </div>
          </div>

          {/* Profile Photo / Avatar Frame */}
          <div className="shrink-0 relative group">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-200 shadow-md">
              <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-subtle opacity-20"></div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-2xl sm:text-3xl font-extrabold shadow-inner ring-4 ring-white/10">
                  ES
                </div>
                <span className="mt-2 text-xs font-mono tracking-wider text-blue-200 uppercase">
                  Full-Stack Dev
                </span>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm rounded-lg px-2.5 py-1 flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>1st Place UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
