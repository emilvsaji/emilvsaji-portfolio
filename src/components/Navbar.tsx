"use client";

import React, { useState, useEffect } from "react";
import { Clock, Menu, X, FileDown, ExternalLink } from "lucide-react";

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
    { label: "Achievements", href: "#achievements" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-900 text-sm tracking-tight flex items-center gap-1.5">
              Emil V Saji
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {keralaTime || "Kerala, India"}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="mailto:emilsaji48@gmail.com"
            className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/emilvsaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-1.5 rounded-lg shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 shadow-lg space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="mailto:emilsaji48@gmail.com"
              className="w-full text-center text-sm font-medium py-2 rounded-lg bg-blue-600 text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
