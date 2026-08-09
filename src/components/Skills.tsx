"use client";

import React, { useState } from "react";
import { Layout, Server, Database, Wrench } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  skills: { name: string; level: string; note?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Layout className="w-4 h-4 text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    skills: [
      { name: "React.js", level: "Advanced", note: "Hooks, Router, State" },
      { name: "Next.js", level: "Advanced", note: "App Router, SSR, SEO" },
      { name: "JavaScript (ES6+)", level: "Advanced", note: "Async/Await, DOM" },
      { name: "Tailwind CSS", level: "Advanced", note: "Responsive, Modern UI" },
      { name: "HTML5", level: "Advanced", note: "Semantic Structure" },
      { name: "CSS3", level: "Advanced", note: "Flexbox, Grid, Animations" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: <Server className="w-4 h-4 text-indigo-400" />,
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    skills: [
      { name: "Node.js", level: "Advanced", note: "Server-side Runtime" },
      { name: "Express.js", level: "Advanced", note: "RESTful Routing" },
      { name: "REST API", level: "Advanced", note: "Architecture & CRUD" },
      { name: "PHP", level: "Proficient", note: "Full-stack Backend" },
      { name: "Python", level: "Proficient", note: "Scripting & Automation" },
      { name: "Java", level: "Intermediate", note: "Object-Oriented Logic" },
    ],
  },
  {
    id: "database",
    name: "Database Systems",
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "MySQL", level: "Advanced", note: "Relational Queries & Joins" },
      { name: "PostgreSQL", level: "Proficient", note: "Relational Modeling" },
      { name: "MongoDB", level: "Proficient", note: "NoSQL Collections" },
      { name: "Firebase", level: "Proficient", note: "Firestore & Realtime DB" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Testing",
    icon: <Wrench className="w-4 h-4 text-amber-400" />,
    iconBg: "bg-amber-500/10 border-amber-500/20",
    skills: [
      { name: "Git", level: "Advanced", note: "Version Control & Branching" },
      { name: "GitHub", level: "Advanced", note: "Actions & CI/CD Pipelines" },
      { name: "Selenium", level: "Proficient", note: "Automated QA Testing" },
      { name: "Vercel / Hosting", level: "Advanced", note: "Production Deployments" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-14 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5] font-mono">
              Skills & Technologies
            </h2>
            <p className="text-xs sm:text-sm text-[#71717a] font-mono mt-1">
              Frameworks, backend runtimes, databases, and engineering tooling
            </p>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex flex-wrap gap-1 p-1 bg-zinc-900 rounded-lg border border-white/[0.08] font-mono text-xs self-start sm:self-auto">
            {["all", "frontend", "backend", "database", "tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded-md transition-colors capitalize ${
                  activeTab === tab
                    ? "bg-zinc-800 text-[#f5f5f5] font-semibold border border-white/10"
                    : "text-[#a1a1aa] hover:text-[#f5f5f5]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="flat-card rounded-xl p-5 border border-white/[0.08] hover:border-white/20"
            >
              <div className="flex items-center gap-2.5 pb-3.5 border-b border-white/[0.08] mb-4">
                <div
                  className={`w-7 h-7 rounded-md ${category.iconBg} border flex items-center justify-center`}
                >
                  {category.icon}
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-xs sm:text-sm">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-lg bg-zinc-950/60 border border-white/[0.06] hover:border-white/15 transition-colors flex flex-col justify-between"
                  >
                    <span className="font-medium text-xs text-zinc-200">
                      {skill.name}
                    </span>
                    {skill.note && (
                      <span className="text-[10px] text-[#71717a] mt-1 truncate">
                        {skill.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

