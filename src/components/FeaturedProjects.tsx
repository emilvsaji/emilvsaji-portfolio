"use client";

import React from "react";
import { ArrowRight, ExternalLink, Bus, Briefcase, Compass, ShoppingBag } from "lucide-react";
import { GitHubIcon } from "./Icons";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  category: string;
  accentColor: string;
  icon: React.ReactNode;
  previewVisual: {
    label: string;
    sublabel: string;
    theme: string;
  };
}

const projects: ProjectItem[] = [
  {
    id: "catchmybus",
    title: "CatchMyBus",
    description:
      "Mobile-responsive bus search and route discovery platform with real-time stops, transit schedules, and live commuter filtering.",
    techStack: ["REACT", "TYPESCRIPT", "NODE.JS", "FIREBASE", "TAILWIND CSS"],
    liveUrl: "https://catch-my-bus.vercel.app",
    githubUrl: "https://github.com/emilvsaji/CatchMyBus",
    category: "TRANSIT WEB APP",
    accentColor: "bg-blue-500",
    icon: <Bus className="w-5 h-5 text-blue-400" />,
    previewVisual: {
      label: "LIVE BUS TRACKER & ROUTE NAVIGATOR",
      sublabel: "Real-time Firebase sync & schedule queries",
      theme: "from-blue-950/50 via-zinc-900 to-zinc-950",
    },
  },
  {
    id: "careerbridge",
    title: "CareerBridge",
    description:
      "Full-stack job portal with role-based access control (Job Seeker / Employer / Admin), applicant tracking, and resume management.",
    techStack: ["PHP", "MYSQL", "JAVASCRIPT", "HTML5", "CSS3"],
    githubUrl: "https://github.com/emilvsaji/CareerBridge",
    category: "FULL-STACK PORTAL",
    accentColor: "bg-indigo-500",
    icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
    previewVisual: {
      label: "ROLE-BASED RECRUITMENT PORTAL",
      sublabel: "RBAC pipelines, applicant metrics & employer tools",
      theme: "from-indigo-950/50 via-zinc-900 to-zinc-950",
    },
  },
  {
    id: "treasurecove",
    title: "Treasure Cove",
    description:
      "Gamified interactive treasure-hunt web application engineered with custom logic, puzzle state machines, and high-performance animations.",
    techStack: ["JAVASCRIPT", "HTML5 CANVAS", "NODE.JS", "CSS3"],
    githubUrl: "https://github.com/emilvsaji/Treasure-Cove",
    category: "INTERACTIVE GAMIFICATION",
    accentColor: "bg-amber-500",
    icon: <Compass className="w-5 h-5 text-amber-400" />,
    previewVisual: {
      label: "CANVAS PUZZLE & GAME ENGINE",
      sublabel: "State machine logic & interactive clue exploration",
      theme: "from-amber-950/50 via-zinc-900 to-zinc-950",
    },
  },
  {
    id: "harvast",
    title: "Harvast Spices",
    description:
      "Full-featured e-commerce platform with catalog exploration, multi-criteria spice search/filtering, cart management, and checkout.",
    techStack: ["PHP", "MYSQL", "JAVASCRIPT", "TAILWIND CSS"],
    githubUrl: "https://github.com/emilvsaji/harvast",
    category: "E-COMMERCE SYSTEM",
    accentColor: "bg-emerald-500",
    icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
    previewVisual: {
      label: "SPICE STOREFRONT & ORDER SYSTEM",
      sublabel: "Dynamic multi-filter search, cart & checkout flow",
      theme: "from-emerald-950/50 via-zinc-900 to-zinc-950",
    },
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-14 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5] font-mono">
              Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#71717a] font-mono mt-1">
              Selected full-stack applications, real-time tools, and software systems
            </p>
          </div>

          <a
            href="https://github.com/emilvsaji?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.12] text-xs font-mono text-[#f5f5f5] transition-colors self-start sm:self-auto"
          >
            <span>Explore all projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#a1a1aa]" />
          </a>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flat-card rounded-xl overflow-hidden flex flex-col justify-between group border border-white/[0.08] hover:border-white/20"
            >
              <div>
                {/* Large Visual Thumbnail (No browser chrome mockup) */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.previewVisual.theme} p-5 flex flex-col justify-between border-b border-white/[0.08] overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-dot-subtle opacity-30"></div>
                  
                  {/* Top Bar with Category */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] tracking-wider text-zinc-400 font-bold uppercase bg-zinc-900/80 px-2 py-0.5 rounded border border-white/[0.08]">
                      {project.category}
                    </span>
                    <div className="p-1.5 rounded-md bg-zinc-900/90 border border-white/10 text-white">
                      {project.icon}
                    </div>
                  </div>

                  {/* Visual Center */}
                  <div className="relative z-10 my-auto py-1">
                    <p className="text-[#f5f5f5] font-bold text-xs sm:text-sm tracking-wide">
                      {project.previewVisual.label}
                    </p>
                    <p className="text-[#71717a] text-[11px] mt-0.5">
                      {project.previewVisual.sublabel}
                    </p>
                  </div>

                  {/* Visual Bottom Stripe Indicator */}
                  <div className="relative z-10 flex items-center gap-1.5 text-[10px] text-[#71717a]">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.accentColor}`}></span>
                    <span>Production Ready</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-[#f5f5f5] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills (All-Caps, Small Dark Pills) */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-white/[0.06] px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="px-5 py-3.5 bg-zinc-950/60 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-[#f5f5f5] border border-white/10 text-xs transition-colors"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3 text-[#a1a1aa]" />
                  </a>
                ) : (
                  <span className="text-[11px] text-[#71717a]">
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

