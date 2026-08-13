"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HighlightItem {
  id: string;
  title: string;
  credential: string;
  credentialSub?: string;
  year: string;
  description: string;
  image: string;
  fallbackTheme: string;
}

const highlights: HighlightItem[] = [
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge",
    credential: "GLOBAL PARTICIPANT",
    year: "2025",
    description:
      "Built an open-source web app using NASA Earth observation datasets — one of 57,000+ participants across 160+ countries.",
    image: "/highlights/nasa.jpg",
    fallbackTheme: "from-indigo-950/60 via-zinc-900 to-zinc-900",
  },
  {
    id: "asthra",
    title: "ASTHRA 10.0 — Pixel Rush",
    credential: "1ST PLACE WINNER",
    year: "2025",
    description:
      "Won 1st place in the national-level UI/UX design competition, judged on design systems, UX heuristics, and rapid visual prototyping.",
    image: "/highlights/asthra.jpg",
    fallbackTheme: "from-amber-950/60 via-zinc-900 to-zinc-900",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5] font-mono">
            Highlights
          </h2>
          <p className="text-xs sm:text-sm text-[#71717a] font-mono mt-1">
            Some of my small wins.
          </p>
        </div>

        {/* Vertical stack — single column */}
        <div className="space-y-4 font-mono">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flat-card rounded-xl p-4 border border-white/[0.08] hover:border-white/20 flex flex-row items-center gap-4 sm:gap-5"
            >
              {/* Square thumbnail — left side */}
              <div
                className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-gradient-to-br ${item.fallbackTheme} overflow-hidden shrink-0 border border-white/[0.08]`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="112px"
                />
              </div>

              {/* Content — right side */}
              <div className="flex-1 min-w-0 space-y-1.5">
                {/* Credential pill + year */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-white/[0.06] px-2 py-0.5 rounded">
                    {item.credential}
                  </span>
                  <span className="text-[11px] text-[#71717a]">{item.year}</span>
                </div>

                {/* Title with arrow */}
                <h3 className="text-sm sm:text-base font-bold text-[#f5f5f5] flex items-center gap-1.5 flex-wrap">
                  {item.title}
                  <ArrowRight className="w-3.5 h-3.5 text-[#71717a] shrink-0" />
                </h3>

                {/* Single-sentence description */}
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
