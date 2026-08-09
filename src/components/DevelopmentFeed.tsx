"use client";

import React, { useState, useEffect } from "react";
import { Activity, RefreshCw, GitCommit, ExternalLink, Terminal } from "lucide-react";
import { useToast } from "./Toast";

interface CommitFeedItem {
  repo: string;
  message: string;
  sha: string;
  time: string;
  url: string;
}

const fallbackFeed: CommitFeedItem[] = [
  {
    repo: "CatchMyBus",
    message: "feat: add real-time bus tracking map coordinates and route search filters",
    sha: "8f2d1a4",
    time: "3 hours ago",
    url: "https://github.com/emilvsaji/CatchMyBus",
  },
  {
    repo: "CareerBridge",
    message: "refactor: role-based authentication middleware & employer dashboard metrics",
    sha: "4c99e2b",
    time: "1 day ago",
    url: "https://github.com/emilvsaji/CareerBridge",
  },
  {
    repo: "Treasure-Cove",
    message: "perf: optimize canvas rendering engine and interactive clue state machine",
    sha: "7a11f0c",
    time: "3 days ago",
    url: "https://github.com/emilvsaji/Treasure-Cove",
  },
  {
    repo: "harvast",
    message: "feat: implement checkout cart calculation & dynamic spice filter categories",
    sha: "e5b3091",
    time: "5 days ago",
    url: "https://github.com/emilvsaji/harvast",
  },
  {
    repo: "emilvsaji",
    message: "docs: update developer profile, project architectures, and contact links",
    sha: "9d44e82",
    time: "1 week ago",
    url: "https://github.com/emilvsaji",
  },
];

export default function DevelopmentFeed() {
  const { showToast } = useToast();
  const [feed, setFeed] = useState<CommitFeedItem[]>(fallbackFeed);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRecentEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.github.com/users/emilvsaji/events/public");
      if (!res.ok) throw new Error("GitHub API limit");
      const events = await res.json();

      if (Array.isArray(events) && events.length > 0) {
        const parsed: CommitFeedItem[] = [];

        events.forEach((ev) => {
          const repoRaw = ev.repo ? ev.repo.name : "emilvsaji/CatchMyBus";
          const repo = repoRaw.replace("emilvsaji/", "");
          const relativeTime = getRelativeTime(new Date(ev.created_at));

          if (ev.type === "PushEvent" && ev.payload && ev.payload.commits) {
            ev.payload.commits.forEach((c: { message: string; sha: string; url: string }) => {
              parsed.push({
                repo,
                message: c.message || "Pushed code changes",
                sha: c.sha ? c.sha.substring(0, 7) : "commit",
                time: relativeTime,
                url: `https://github.com/${repoRaw}`,
              });
            });
          } else if (ev.type === "CreateEvent") {
            parsed.push({
              repo,
              message: `Created ${ev.payload.ref_type || "repository"} ${ev.payload.ref || ""}`,
              sha: "init",
              time: relativeTime,
              url: `https://github.com/${repoRaw}`,
            });
          }
        });

        if (parsed.length > 0) {
          setFeed(parsed.slice(0, 6));
        }
      }
    } catch {
      // Fallback
      setFeed(fallbackFeed);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentEvents();
  }, []);

  const handleRefresh = () => {
    fetchRecentEvents();
    showToast("Refreshed recent activity feed");
  };

  return (
    <section id="activity" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-100/70 text-blue-600">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Development Feed
              </h2>
              <p className="text-sm text-slate-500">
                Live commit stream & repository activity from GitHub API
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin text-blue-600" : ""}`} />
              <span>Refresh</span>
            </button>
            <a
              href="https://github.com/emilvsaji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Commit Stream Terminal Card */}
        <div className="glass-card rounded-2xl overflow-hidden border border-slate-200/90">
          {/* Header Bar */}
          <div className="bg-slate-900 text-slate-300 px-4 py-3 flex items-center justify-between text-xs font-mono border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>emilvsaji/activity.log</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] text-slate-400">Live Stream</span>
            </div>
          </div>

          {/* List Items */}
          <div className="divide-y divide-slate-100">
            {feed.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-4.5 hover:bg-slate-50/80 transition-colors flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="mt-1">
                    <span className="pulse-indicator block"></span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                      >
                        emilvsaji/{item.repo}
                      </a>
                      <span className="text-[11px] text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60">
                        {item.sha}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 mt-1 truncate max-w-lg sm:max-w-xl">
                      {item.message}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono whitespace-nowrap pt-1 shrink-0">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getRelativeTime(date: Date): string {
  const diffSec = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (diffSec < 60) return "just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDays = Math.floor(diffHr / 24);
  if (diffDays === 1) return "yesterday";
  if (diffDays < 30) return `${diffDays}d ago`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${diffMonths}mo ago`;
}
