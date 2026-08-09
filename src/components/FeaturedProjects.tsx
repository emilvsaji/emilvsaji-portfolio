"use client";

import React from "react";
import { FolderGit2, ExternalLink, Sparkles, Bus, Briefcase, Compass, ShoppingBag } from "lucide-react";
import { GitHubIcon } from "./Icons";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  icon: React.ReactNode;
  accentColor: string;
  highlight: string;
  previewGraphic: {
    title: string;
    tag: string;
    subtext: string;
  };
}

const projects: ProjectItem[] = [
  {
    id: "catchmybus",
    title: "CatchMyBus",
    description:
      "Mobile-responsive bus search and route discovery platform with real-time stops, schedules, and live transit filtering.",
    techStack: ["React", "TypeScript", "Node.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://catch-my-bus.vercel.app",
    githubUrl: "https://github.com/emilvsaji/CatchMyBus",
    icon: <Bus className="w-5 h-5" />,
    accentColor: "from-blue-600 to-cyan-500",
    highlight: "Live Production App",
    previewGraphic: {
      title: "CatchMyBus • Live Route Navigator",
      tag: "React + Firebase",
      subtext: "Dynamic search & transit schedules",
    },
  },
  {
    id: "careerbridge",
    title: "CareerBridge",
    description:
      "Full-stack job portal with role-based access control (Job Seeker / Employer / Admin), application pipelines, and resume management.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/emilvsaji/CareerBridge",
    icon: <Briefcase className="w-5 h-5" />,
    accentColor: "from-indigo-600 to-blue-500",
    highlight: "Role-Based Architecture",
    previewGraphic: {
      title: "CareerBridge Portal",
      tag: "PHP • MySQL",
      subtext: "Applicant tracking & employer dashboard",
    },
  },
  {
    id: "treasurecove",
    title: "Treasure Cove",
    description:
      "Gamified interactive treasure-hunt web application engineered with custom logic, puzzle state machines, and high-performance animations.",
    techStack: ["JavaScript", "HTML5 Canvas", "Node.js", "CSS3 Animations"],
    githubUrl: "https://github.com/emilvsaji/Treasure-Cove",
    icon: <Compass className="w-5 h-5" />,
    accentColor: "from-amber-500 to-orange-500",
    highlight: "Interactive Gamification",
    previewGraphic: {
      title: "Treasure Cove Engine",
      tag: "JS • Canvas",
      subtext: "Gamified exploration & score engine",
    },
  },
  {
    id: "harvast",
    title: "Harvast Spices",
    description:
      "Full-featured e-commerce platform featuring catalog exploration, multi-criteria spice search/filtering, cart management, and checkout.",
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/emilvsaji/harvast",
    icon: <ShoppingBag className="w-5 h-5" />,
    accentColor: "from-emerald-600 to-teal-500",
    highlight: "E-Commerce System",
    previewGraphic: {
      title: "Harvast Spices Storefront",
      tag: "E-Commerce",
      subtext: "Catalog, filters, cart & order flow",
    },
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-blue-100/70 text-blue-600">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-500">
              Selected full-stack applications, real-time tools, and software systems
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-200/90"
            >
              <div>
                {/* Visual Header / Mockup Frame */}
                <div className="relative h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-slate-100">
                  <div className="absolute inset-0 bg-dot-subtle opacity-15"></div>

                  {/* Browser Bar Mockup */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                      {project.previewGraphic.tag}
                    </span>
                  </div>

                  {/* Graphic Center Content */}
                  <div className="relative z-10 my-auto text-center py-2">
                    <div className="inline-flex p-2 rounded-xl bg-white/10 text-white backdrop-blur-xs mb-1.5 ring-1 ring-white/20 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <p className="text-white font-semibold text-sm tracking-wide">
                      {project.previewGraphic.title}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {project.previewGraphic.subtext}
                    </p>
                  </div>

                  {/* Bottom Ribbon */}
                  <div className="relative z-10 flex justify-between items-center text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-blue-400">
                      <Sparkles className="w-3 h-3" />
                      {project.highlight}
                    </span>
                    <span>Ready for screenshots</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="px-5 sm:px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">
                    Open Source
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
