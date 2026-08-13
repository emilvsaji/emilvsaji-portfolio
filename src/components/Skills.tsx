"use client";

import React from "react";

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "PHP",
      "Python",
      "Java",
    ],
  },
  {
    id: "database",
    name: "Database Systems",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    id: "tools",
    name: "Tools & Deployment",
    skills: ["Git", "GitHub", "Railway", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5] font-mono">
            Skills &amp; Technologies
          </h2>
          <p className="text-xs sm:text-sm text-[#71717a] font-mono mt-1">
            Frameworks, backend runtimes, databases, and engineering tooling
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="flat-card rounded-xl p-5 border border-white/[0.08] hover:border-white/20"
            >
              {/* Category heading */}
              <h3 className="font-bold text-[#f5f5f5] text-xs sm:text-sm pb-3.5 border-b border-white/[0.08] mb-4">
                {category.name}
              </h3>

              {/* Skills as plain tags — same style as project tech-stack */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-white/[0.06] px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
