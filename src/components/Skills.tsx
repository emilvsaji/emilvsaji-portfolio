"use client";

import React, { useState } from "react";
import { Cpu, Layout, Server, Database, Wrench, Sparkles } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: string; note?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Layout className="w-4 h-4 text-blue-600" />,
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
    icon: <Server className="w-4 h-4 text-indigo-600" />,
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
    icon: <Database className="w-4 h-4 text-emerald-600" />,
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
    icon: <Wrench className="w-4 h-4 text-amber-600" />,
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
    <section id="skills" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-100/70 text-blue-600">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Skills & Technologies
              </h2>
              <p className="text-sm text-slate-500">
                Technologies, frameworks, databases, and development tooling
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200/80 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === "all"
                  ? "bg-white text-blue-600 shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === "frontend"
                  ? "bg-white text-blue-600 shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === "backend"
                  ? "bg-white text-blue-600 shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("database")}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === "database"
                  ? "bg-white text-blue-600 shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Database
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === "tools"
                  ? "bg-white text-blue-600 shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80"
            >
              <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-100 mb-4">
                <div className="p-1.5 rounded-lg bg-slate-100">
                  {category.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/70 hover:border-blue-200 transition-colors group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-semibold text-xs text-slate-800 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {skill.note && (
                      <span className="text-[10px] font-mono text-slate-500 mt-1 truncate">
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
