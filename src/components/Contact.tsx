"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";
import { useToast } from "./Toast";

export default function Contact() {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("emilsaji48@gmail.com");
    setCopiedEmail(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+91 8078390442");
    setCopiedPhone(true);
    showToast("Phone number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 font-mono">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f5]">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#71717a] mt-1">
            Have a project, role, or collaboration in mind? Reach out directly.
          </p>
        </div>

        {/* Direct Contact Card */}
        <div className="flat-card rounded-xl p-5 sm:p-6 flex flex-col justify-between border border-white/[0.08]">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#f5f5f5] mb-1">
              Direct Channels
            </h3>
            <p className="text-xs text-[#71717a] mb-5">
              Fastest response via email or LinkedIn messages
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Email Item */}
              <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-md bg-zinc-900 border border-white/[0.08] text-[#a1a1aa] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#71717a]">Email Address</p>
                    <a
                      href="mailto:emilsaji48@gmail.com"
                      className="text-xs font-semibold text-[#f5f5f5] hover:text-white truncate block transition-colors"
                    >
                      emilsaji48@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-3 rounded-lg bg-zinc-950/60 border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-md bg-zinc-900 border border-white/[0.08] text-[#a1a1aa] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#71717a]">Phone / WhatsApp</p>
                    <a
                      href="tel:8078390442"
                      className="text-xs font-semibold text-[#f5f5f5] hover:text-emerald-400 transition-colors block"
                    >
                      +91 8078390442
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-1.5 rounded-md text-[#71717a] hover:text-[#f5f5f5] hover:bg-zinc-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Link Buttons */}
          <div className="pt-4 mt-5 border-t border-white/[0.08] flex items-center gap-2">
            <a
              href="https://linkedin.com/in/emilvsaji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#f5f5f5] text-xs border border-white/[0.08] transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#a1a1aa]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/emilvsaji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#f5f5f5] text-xs border border-white/[0.08] transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-[#a1a1aa]" />
              <span>GitHub</span>
            </a>

            <a
              href="https://twitter.com/emilvsaji"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[#a1a1aa] hover:text-[#f5f5f5] border border-white/[0.08] transition-colors"
              title="X / Twitter"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

