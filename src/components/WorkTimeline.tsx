"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  mode: string;
  logo: string;
  bullets?: string[];
  skills?: string[];
}

const workItems: TimelineItem[] = [
  {
    id: "innobyte",
    title: "InnoByte Services",
    subtitle: "Web Developer Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    mode: "Internship",
    logo: "/logos/innobyte.png",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "State Management"],
    bullets: [
      "Developed dynamic user interfaces using React.js, JavaScript, and Tailwind CSS.",
      "Built reusable React components to improve scalability and maintainability of web applications.",
      "Implemented responsive layouts and modern UI practices using Tailwind CSS.",
      "Integrated frontend components with APIs and backend services.",
      "Improved application performance by optimizing component rendering and state management.",
    ],
  },
  {
    id: "apexplanet",
    title: "ApexPlanet Software Pvt Ltd",
    subtitle: "Web Developer Intern",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
    mode: "Internship",
    logo: "/logos/apexplanet.png",
    skills: ["HTML5", "CSS3", "JavaScript", "UI Components", "API Integration"],
    bullets: [
      "Developed responsive webpages using HTML, CSS, and JavaScript ensuring cross-browser compatibility and mobile responsiveness.",
      "Implemented modern UI components and interactive elements to enhance user experience.",
      "Optimized page loading performance and improved frontend responsiveness.",
      "Collaborated with designers and backend developers to integrate APIs and dynamic content.",
      "Participated in debugging and testing processes to ensure stable and reliable web applications.",
    ],
  },
];

const educationItems: TimelineItem[] = [
  {
    id: "mgu",
    title: "Mahatma Gandhi University",
    subtitle: "Bachelor of Computer Applications (BCA)",
    period: "2023 - 2026",
    location: "Kottayam, Kerala",
    mode: "Regular",
    logo: "/logos/mgu.png",
    bullets: [
      "Core curriculum in Software Engineering, Data Structures, Web Systems, and Database Management Systems.",
      "Focused on Full-Stack Web Development, Object-Oriented Programming, and Computer Architecture.",
    ],
  },
  {
    id: "holycross",
    title: "Holy Cross HSS",
    subtitle: "Higher Secondary (Computer Science)",
    period: "2021 - 2023",
    location: "Kottayam, Kerala",
    mode: "On Site",
    logo: "/logos/holycross.png",
    bullets: [
      "Academic foundation in Computer Science, C++ / Python programming fundamentals, Mathematics, and Physics.",
      "Completed Higher Secondary Board Examination with Distinction (92%).",
    ],
  },
];

export default function WorkTimeline() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const items = activeTab === "work" ? workItems : educationItems;

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Main Card Container */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c0e] shadow-2xl">
          {/* Top Tabs Switch */}
          <div className="p-2 border-b border-white/[0.06]">
            <div className="grid grid-cols-2 gap-1 bg-[#141416] p-1 rounded-xl border border-white/[0.04]">
              <button
                onClick={() => {
                  setActiveTab("work");
                  setExpandedId(null);
                }}
                className={`py-2 px-4 rounded-lg text-sm font-mono transition-all text-center cursor-pointer ${
                  activeTab === "work"
                    ? "bg-[#27272a] text-[#f5f5f5] font-semibold shadow-sm border border-white/10"
                    : "text-[#71717a] hover:text-[#a1a1aa]"
                }`}
              >
                Work
              </button>
              <button
                onClick={() => {
                  setActiveTab("education");
                  setExpandedId(null);
                }}
                className={`py-2 px-4 rounded-lg text-sm font-mono transition-all text-center cursor-pointer ${
                  activeTab === "education"
                    ? "bg-[#27272a] text-[#f5f5f5] font-semibold shadow-sm border border-white/10"
                    : "text-[#71717a] hover:text-[#a1a1aa]"
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="divide-y divide-white/[0.06]">
            {items.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div key={item.id} className="transition-colors">
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="px-4 sm:px-6 py-4 flex items-center justify-between gap-4 hover:bg-white/[0.015] cursor-pointer transition-colors"
                  >
                    {/* Left: Logo & Info */}
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-sm border border-white/10 overflow-hidden">
                        <Image
                          src={item.logo}
                          alt={`${item.title} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain object-center"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-[#f5f5f5] tracking-tight font-mono truncate">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#a1a1aa] font-mono mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Right: Date, Location/Mode & Expand Icon */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right space-y-0.5 font-mono">
                        <p className="text-xs sm:text-sm text-[#a1a1aa]">
                          {item.period}
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#71717a]">
                          {item.location} • {item.mode}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#71717a] transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable Details Drawer */}
                  {isExpanded && item.bullets && (
                    <div className="px-4 sm:px-6 pb-5 pt-1 pl-[4.25rem] sm:pl-[5rem] border-t border-white/[0.04] bg-white/[0.01] font-mono">
                      {/* Skills Tags */}
                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] text-zinc-300 bg-zinc-900 border border-white/[0.08] px-2 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bullets List */}
                      <ul className="space-y-1.5">
                        {item.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="text-xs text-[#a1a1aa] flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-emerald-400 font-bold mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

