"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Globe, CheckCircle } from "lucide-react";

interface RoleItem {
  company: string;
  role: string;
  period: string;
  location: string;
  mode: "Remote" | "Hybrid" | "On-site" | "Freelance";
  description: string[];
  techStack: string[];
}

const workHistory: RoleItem[] = [
  {
    company: "InnoByte Services",
    role: "Web Developer Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    mode: "Remote",
    description: [
      "Designed and developed scalable frontend components and integrated backend APIs.",
      "Optimized client-side rendering speed, state management, and mobile responsiveness.",
      "Collaborated with senior engineers in code reviews, bug fixes, and feature releases.",
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    company: "ApexPlanet Software Pvt Ltd",
    role: "Web Developer Intern",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
    mode: "Remote",
    description: [
      "Engineered dynamic web modules and integrated secure RESTful endpoints.",
      "Assisted in database schema optimizations, SQL query improvements, and form validations.",
      "Implemented responsive UI layouts and tested cross-browser compatibility.",
    ],
    techStack: ["Node.js", "PHP", "MySQL", "JavaScript", "HTML5/CSS3"],
  },
  {
    company: "CatchMyBus",
    role: "Full Stack Developer (Freelance)",
    period: "Nov 2025 – Dec 2025",
    location: "India",
    mode: "Freelance",
    description: [
      "Architected and deployed a mobile-responsive bus search, live schedule, and route tracking web app.",
      "Implemented real-time database synchronizations and stateful search filters for commuters.",
      "Deployed production build to Vercel with high performance and mobile-first UX.",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Firebase", "Tailwind CSS"],
  },
];

export default function WorkTimeline() {
  return (
    <section id="experience" className="py-16 border-t border-slate-100 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-blue-100/70 text-blue-600">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Work Experience
            </h2>
            <p className="text-sm text-slate-500">
              My engineering journey, internships, and freelance deployments
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-10">
          {workHistory.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 group-hover:scale-110 transition-all shadow-xs" />

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <span className="font-semibold text-blue-600">{item.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                      {item.mode}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono font-medium text-slate-600 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-md transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
