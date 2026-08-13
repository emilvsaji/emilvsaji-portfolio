"use client";

import React from "react";
import Image from "next/image";

interface HighlightItem {
  id: string;
  title: string;
  category: string;
  credential: string;
  year: string;
  description: string;
  image: string;
  fallbackTheme: string;
}

const highlights: HighlightItem[] = [
  {
    id: "asthra",
    title: "ASTHRA 10.0 National Technical Fest",
    category: "Pixel Rush — UI/UX Design Competition",
    credential: "1ST PLACE",
    year: "2025",
    description:
      "Won the national-level UI/UX design competition, judged on design systems, UX heuristics, and rapid visual prototyping.",
    image: "/highlights/asthra.jpg",
    fallbackTheme: "from-amber-950/40 via-zinc-900 to-zinc-950",
  },
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge",
    category: "Global Hackathon",
    credential: "GLOBAL PARTICIPANT",
    year: "2025",
    description:
      "Built an open-source web app using NASA Earth observation datasets in a 48-hour challenge — one of 57,000+ participants across 160+ countries.",
    image: "/highlights/nasa.jpg",
    fallbackTheme: "from-indigo-950/40 via-zinc-900 to-zinc-950",
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

        {/* Vertical Stack */}
        <div className="space-y-4 font-mono">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flat-card rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/20"
            >
              {/* Image Area — same proportions as FeaturedProjects */}
              <div
                className={`relative h-48 md:h-64 bg-gradient-to-br ${item.fallbackTheme} border-b border-white/[0.08] overflow-hidden`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 896px"
                  onError={() => {}}
                />
                {/* Subtle dot pattern visible through semi-transparent images */}
                <div className="absolute inset-0 bg-dot-subtle opacity-20 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Credential tag + year — same style as tech-stack pills */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-white/[0.06] px-2 py-0.5 rounded">
                    {item.credential}
                  </span>
                  <span className="text-[11px] text-[#71717a]">{item.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#f5f5f5] mb-1">
                  {item.title}
                </h3>

                {/* Category */}
                <p className="text-xs text-sky-400/90 font-medium mb-2">
                  {item.category}
                </p>

                {/* One-sentence description */}
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
