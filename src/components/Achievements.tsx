"use client";

import React from "react";
import { Trophy, Rocket } from "lucide-react";

interface HighlightItem {
  id: string;
  title: string;
  category: string;
  pill: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  brandBg: string;
}

const highlights: HighlightItem[] = [
  {
    id: "asthra",
    title: "ASTHRA 10.0 National Technical Fest",
    category: "Pixel Rush (UI/UX Design Competition)",
    pill: "1ST PLACE WINNER",
    year: "2025",
    description:
      "Secured 1st place in the national-level UI/UX design competition, evaluated on design systems, human-centered UX heuristics, interactive wireframes, and rapid visual prototyping.",
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
    brandBg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge",
    category: "Global Hackathon",
    pill: "GLOBAL PARTICIPANT",
    year: "2025",
    description:
      "Collaborated as a global hackathon participant in the world's largest space and science hackathon, engineering open-source web solutions utilizing NASA Earth observation datasets.",
    icon: <Rocket className="w-5 h-5 text-indigo-400" />,
    brandBg: "bg-indigo-500/10 border-indigo-500/20",
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
              {/* Left Thumbnail / Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${item.brandBg} border flex items-center justify-center shrink-0 mt-0.5`}
              >
                {item.icon}
              </div>

              {/* Center & Right Content */}
              <div className="flex-1 min-w-0 space-y-1.5">
                {/* Top Row: Title + Pill/Year */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#f5f5f5]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-sky-400/90 font-medium">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded">
                      {item.pill}
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

