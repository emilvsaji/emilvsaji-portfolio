"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  subtitle: string;
  period: string;
  location: string;
  mode: string;
  brandBg: string;
  brandText: string;
  logoInitial: string;
  techStack?: string[];
}

const workItems: TimelineItem[] = [
  {
    id: "innobyte",
    title: "Web Developer Intern",
    organization: "InnoByte Services",
    subtitle:
      "Designed and developed scalable frontend components and integrated backend REST APIs. Optimized rendering speed, state management, and mobile responsiveness.",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    mode: "Remote",
    brandBg: "bg-blue-600",
    brandText: "text-white",
    logoInitial: "IB",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    id: "apexplanet",
    title: "Web Developer Intern",
    organization: "ApexPlanet Software Pvt Ltd",
    subtitle:
      "Engineered dynamic web modules, RESTful endpoints, database schema optimizations, SQL query improvements, and form validations.",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
    mode: "Remote",
    brandBg: "bg-emerald-600",
    brandText: "text-white",
    logoInitial: "AP",
    techStack: ["Node.js", "PHP", "MySQL", "JavaScript", "HTML5/CSS3"],
  },
  {
    id: "catchmybus-work",
    title: "Full Stack Developer (Freelance)",
    organization: "CatchMyBus",
    subtitle:
      "Architected and deployed a mobile-responsive bus search, live schedule, and route tracking web app with real-time Firebase database synchronizations.",
    period: "Nov 2025 – Dec 2025",
    location: "India",
    mode: "Freelance",
    brandBg: "bg-amber-600",
    brandText: "text-white",
    logoInitial: "CB",
    techStack: ["React", "TypeScript", "Node.js", "Firebase", "Tailwind CSS"],
  },
];

const educationItems: TimelineItem[] = [
  {
    id: "mgu",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "MG University, Kottayam",
    subtitle:
      "Core focus on Software Engineering, Data Structures, Web Systems, Database Management, and Object-Oriented Programming.",
    period: "2023 – 2026",
    location: "Kerala, India",
    mode: "On-site",
    brandBg: "bg-purple-600",
    brandText: "text-white",
    logoInitial: "MG",
  },
  {
    id: "holycross",
    title: "Higher Secondary (Computer Science)",
    organization: "Holy Cross HSS, Cherpunkal",
    subtitle:
      "Academic foundation in Computer Science, Algorithm logic, C++ / Python fundamentals, Mathematics, and Physics.",
    period: "2021 – 2023",
    location: "Kerala, India",
    mode: "On-site",
    brandBg: "bg-cyan-600",
    brandText: "text-white",
    logoInitial: "HC",
  },
];

export default function WorkTimeline() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const items = activeTab === "work" ? workItems : educationItems;

  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header with Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5] font-mono">
              Experience & Education
            </h2>
            <p className="text-xs sm:text-sm text-[#71717a] font-mono mt-1">
              Engineering internships, freelance deployments, and academic background
            </p>
          </div>

          {/* Two-tab toggle */}
          <div className="inline-flex p-1 rounded-lg bg-zinc-900 border border-white/[0.08] font-mono text-xs self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("work")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors ${
                activeTab === "work"
                  ? "bg-zinc-800 text-[#f5f5f5] font-semibold border border-white/10 shadow-xs"
                  : "text-[#a1a1aa] hover:text-[#f5f5f5]"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors ${
                activeTab === "education"
                  ? "bg-zinc-800 text-[#f5f5f5] font-semibold border border-white/10 shadow-xs"
                  : "text-[#a1a1aa] hover:text-[#f5f5f5]"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* List of Rows with Divider Lines */}
        <div className="divide-y divide-white/[0.08] font-mono">
          {items.map((item) => (
            <div
              key={item.id}
              className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-3 group"
            >
              {/* Left Logo + Content */}
              <div className="flex items-start gap-3.5 min-w-0">
                {/* Small square brand icon */}
                <div
                  className={`w-9 h-9 rounded-lg ${item.brandBg} ${item.brandText} flex items-center justify-center font-bold text-xs shrink-0 shadow-xs mt-0.5`}
                >
                  {item.logoInitial}
                </div>

                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base font-semibold text-[#f5f5f5]">
                      {item.title}
                    </h3>
                    <span className="text-[#71717a] text-xs">@</span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-300">
                      {item.organization}
                    </span>
                  </div>

                  <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-xl">
                    {item.subtitle}
                  </p>

                  {/* Tech stack pills */}
                  {item.techStack && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] text-zinc-400 bg-zinc-900 border border-white/[0.06] px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Metas */}
              <div className="sm:text-right shrink-0 pl-12 sm:pl-0 pt-0.5 space-y-1">
                <p className="text-xs text-[#71717a] font-mono">{item.period}</p>
                <p className="text-[11px] text-sky-400/90 font-mono flex items-center sm:justify-end gap-1">
                  <span className="text-zinc-500">{item.location}</span>
                  <span className="text-zinc-700">•</span>
                  <span>{item.mode}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

