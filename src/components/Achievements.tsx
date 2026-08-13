"use client";

import React from "react";
import { Trophy, Rocket } from "lucide-react";

interface HighlightItem {
  id: string;
  title: string;
  category: string;
  credential: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

const highlights: HighlightItem[] = [
  {
    id: "asthra",
    title: "ASTHRA 10.0 National Technical Fest",
    category: "Pixel Rush — UI/UX Design Competition",
    credential: "1ST PLACE",
    year: "2025",
    description:
      "Won the national-level UI/UX design competition at ASTHRA 10.0. Judged on design systems, UX heuristics, interactive wireframes, and rapid visual prototyping.",
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
  },
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge",
    category: "Global Hackathon",
    credential: "GLOBAL PARTICIPANT",
    year: "2025",
    description:
      "Built an open-source web app using NASA Earth observation datasets as part of a 48-hour team challenge. One of 57,000+ participants across 160+ countries.",
    icon: <Rocket className="w-5 h-5 text-indigo-400" />,
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
            Recognitions, hackathons, and national design competitions
          </p>
        </div>

        {/* Vertical Stack of Cards */}
        <div className="space-y-4 font-mono">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flat-card rounded-xl p-5 sm:p-6 border border-white/[0.08] hover:border-white/20 flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
            >
              {/* Left Icon */}
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1.5">
                {/* Top Row: Title + credential inline */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#f5f5f5]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-sky-400/90 font-medium mt-0.5">
                      {item.category}
                    </p>
                  </div>

                  {/* Credential — same tag style as project tech-stack */}
                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                    <span className="text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-white/[0.06] px-2 py-0.5 rounded">
                      {item.credential}
                    </span>
                    <span className="text-[11px] text-[#71717a]">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#a1a1aa] leading-relaxed pt-1">
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
