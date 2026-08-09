"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  mode: string;
  bullets?: string[];
  skills?: string[];
  renderLogo: () => React.ReactNode;
}

const workItems: TimelineItem[] = [
  {
    id: "innobyte",
    title: "InnoByte Services",
    subtitle: "Web Developer Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    mode: "Internship",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "State Management"],
    bullets: [
      "Developed dynamic user interfaces using React.js, JavaScript, and Tailwind CSS.",
      "Built reusable React components to improve scalability and maintainability of web applications.",
      "Implemented responsive layouts and modern UI practices using Tailwind CSS.",
      "Integrated frontend components with APIs and backend services.",
      "Improved application performance by optimizing component rendering and state management.",
    ],
    renderLogo: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2 text-white">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      </div>
    ),
  },
  {
    id: "apexplanet",
    title: "ApexPlanet Software Pvt Ltd",
    subtitle: "Web Developer Intern",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
    mode: "Internship",
    skills: ["HTML5", "CSS3", "JavaScript", "UI Components", "API Integration"],
    bullets: [
      "Developed responsive webpages using HTML, CSS, and JavaScript ensuring cross-browser compatibility and mobile responsiveness.",
      "Implemented modern UI components and interactive elements to enhance user experience.",
      "Optimized page loading performance and improved frontend responsiveness.",
      "Collaborated with designers and backend developers to integrate APIs and dynamic content.",
      "Participated in debugging and testing processes to ensure stable and reliable web applications.",
    ],
    renderLogo: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2 text-white">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M12 3a14 14 0 0 0 0 18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
        </svg>
      </div>
    ),
  },
  {
    id: "catchmybus-work",
    title: "CatchMyBus",
    subtitle: "Full Stack Developer",
    period: "Nov 2025 – Dec 2025",
    location: "Independent Contractor",
    mode: "Freelance",
    skills: ["React", "TypeScript", "Node.js", "Firebase", "Geolocation"],
    bullets: [
      "Architected and deployed a mobile-responsive bus search, live schedule, and route tracking web app.",
      "Integrated real-time Firebase database synchronizations with interactive maps.",
      "Engineered route search filters, live schedules, and accessible UI components.",
    ],
    renderLogo: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2 text-white">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="15" rx="2" />
          <path d="M8 20v2" />
          <path d="M16 20v2" />
          <circle cx="7.5" cy="15.5" r="1.5" />
          <circle cx="16.5" cy="15.5" r="1.5" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>
    ),
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
    bullets: [
      "Core curriculum in Software Engineering, Data Structures, Web Systems, and Database Management Systems.",
      "Focused on Full-Stack Web Development, Object-Oriented Programming, and Computer Architecture.",
    ],
    renderLogo: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shrink-0 shadow-sm overflow-hidden text-white font-bold text-base font-mono">
        MG
      </div>
    ),
  },
  {
    id: "holycross",
    title: "Holy Cross HSS",
    subtitle: "Higher Secondary (Computer Science)",
    period: "2021 - 2023",
    location: "Kottayam, Kerala",
    mode: "On Site",
    bullets: [
      "Academic foundation in Computer Science, C++ / Python programming fundamentals, Mathematics, and Physics.",
      "Completed Higher Secondary Board Examination with Distinction (92%).",
    ],
    renderLogo: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center shrink-0 shadow-sm overflow-hidden text-white font-bold text-base font-mono">
        HC
      </div>
    ),
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
          {/* Pixel Character Sitting on the Top Left Edge */}
          <div className="absolute -top-8 left-8 sm:left-12 z-20 pointer-events-none select-none">
            <svg
              width="36"
              height="36"
              viewBox="0 0 16 16"
              className="drop-shadow-md"
              style={{ imageRendering: "pixelated" }}
            >
              {/* Hair */}
              <rect x="5" y="1" width="6" height="2" fill="#4b5563" />
              <rect x="4" y="2" width="8" height="3" fill="#374151" />
              <rect x="3" y="3" width="2" height="4" fill="#1f2937" />
              <rect x="11" y="3" width="2" height="4" fill="#1f2937" />
              {/* Face */}
              <rect x="5" y="4" width="6" height="4" fill="#fcd34d" />
              {/* Eyes */}
              <rect x="6" y="5" width="1" height="1" fill="#111827" />
              <rect x="9" y="5" width="1" height="1" fill="#111827" />
              {/* Body */}
              <rect x="4" y="8" width="8" height="4" fill="#1e293b" />
              <rect x="7" y="8" width="2" height="3" fill="#f8fafc" />
              <rect x="6" y="8" width="1" height="4" fill="#334155" />
              <rect x="9" y="8" width="1" height="4" fill="#334155" />
              {/* Sitting legs */}
              <rect x="4" y="12" width="8" height="2" fill="#0f172a" />
              <rect x="3" y="13" width="3" height="2" fill="#1e293b" />
              <rect x="10" y="13" width="3" height="2" fill="#1e293b" />
            </svg>
          </div>

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
                      {item.renderLogo()}

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
                    <div className="px-4 sm:px-6 pb-5 pt-1 pl-16 sm:pl-20 border-t border-white/[0.04] bg-white/[0.01] font-mono">
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

