"use client";

import React from "react";
import { Trophy, Award, Rocket, Sparkles, ExternalLink } from "lucide-react";

interface AchievementItem {
  title: string;
  category: string;
  badge: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const achievements: AchievementItem[] = [
  {
    title: "ASTHRA 10.0 National Technical Fest",
    category: "Pixel Rush (UI/UX Design Competition)",
    badge: "1st Place Winner 🏆",
    year: "2025",
    description:
      "Secured 1st place in the national-level UI/UX design competition, evaluated on design systems, human-centered UX heuristics, interactive wireframes, and rapid visual prototyping.",
    icon: <Trophy className="w-6 h-6 text-amber-500" />,
    accent: "border-amber-200 bg-amber-50/40",
  },
  {
    title: "NASA Space Apps Challenge",
    category: "Global Hackathon",
    badge: "Global Participant 🚀",
    year: "Oct 2025",
    description:
      "Collaborated as a global hackathon participant in the world's largest annual space and science hackathon, engineering innovative open-source solutions utilizing NASA Earth observation datasets.",
    icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    accent: "border-indigo-200 bg-indigo-50/40",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-blue-100/70 text-blue-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Highlights & Achievements
            </h2>
            <p className="text-sm text-slate-500">
              Recognitions, hackathons, and design competitions
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all flex flex-col justify-between border ${item.accent}`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white shadow-2xs border border-slate-200/80">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 mb-2 shadow-2xs">
                  {item.badge}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  {item.category}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  National / Global Level
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
