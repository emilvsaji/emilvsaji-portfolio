"use client";

import React, { useState, useEffect } from "react";
import { Clock, Menu, X, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [keralaTime, setKeralaTime] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setKeralaTime(`${timeStr} IST`);
      } catch {
        setKeralaTime("Kerala, IN");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "experience",
        "contributions",
        "projects",
        "activity",
        "achievements",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Contributions", href: "#contributions" },
    { label: "Projects", href: "#projects" },
    { label: "Activity", href: "#activity" },
    { label: "Highlights", href: "#achievements" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 border-b border-white/[0.08] backdrop-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none rounded-lg p-1"
        >
          <div className="w-7 h-7 rounded-md bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-xs group-hover:border-white/25 transition-colors">
            ES
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[#f5f5f5] text-xs sm:text-sm tracking-tight flex items-center gap-1.5 font-mono">
              Emil V Saji
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </span>
            <span className="text-[10px] text-[#71717a] font-mono flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 text-[#71717a]" />
              {keralaTime || "Kerala, India"}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-mono text-[#a1a1aa]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  isActive
                    ? "text-[#f5f5f5] bg-zinc-900 border border-white/[0.08]"
                    : "hover:text-[#f5f5f5] hover:bg-zinc-900/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2 font-mono">
          <a
            href="mailto:emilsaji48@gmail.com"
            className="text-xs text-[#a1a1aa] hover:text-[#f5f5f5] bg-zinc-900 hover:bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-white/[0.08] transition-colors"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/emilvsaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#f5f5f5] hover:text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-white/[0.12] transition-all flex items-center gap-1.5"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-[#71717a]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-zinc-900 focus:outline-none border border-white/[0.08]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0a0a0a] px-4 pt-3 pb-5 space-y-1 font-mono">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-medium text-[#a1a1aa] hover:bg-zinc-900 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="mailto:emilsaji48@gmail.com"
              className="w-full text-center text-xs font-medium py-2 rounded-lg bg-zinc-800 border border-white/10 text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

