"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  GraduationCap,
  Sparkles,
  MapPin,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
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
    <section id="contact" className="py-16 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-blue-100/70 text-blue-600">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Get In Touch & Education
            </h2>
            <p className="text-sm text-slate-500">
              Have a project, role, or collaboration in mind? Reach out directly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Contact Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-200/90">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Fastest response via email or LinkedIn messages
              </p>

              <div className="space-y-3">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-slate-400">Email Address</p>
                      <a
                        href="mailto:emilsaji48@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 truncate block transition-colors"
                      >
                        emilsaji48@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-slate-400">Phone / WhatsApp</p>
                      <a
                        href="tel:8078390442"
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-emerald-600 font-mono transition-colors block"
                      >
                        +91 8078390442
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-slate-50 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs transition-colors border border-blue-200/80"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/emilvsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Education & Location Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-200/90">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Academic Background
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Computer science education & foundations
              </p>

              <div className="space-y-4">
                {/* BCA */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        Bachelor of Computer Applications (BCA)
                      </h4>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">
                        MG University, Kottayam
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      2026
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Focus on Software Engineering, Data Structures, Web Systems & Database Management.
                  </p>
                </div>

                {/* Higher Secondary */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        Higher Secondary (Computer Science)
                      </h4>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">
                        Holy Cross HSS, Cherpunkal
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      2023
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Kerala, India
              </span>
              <span className="font-mono text-blue-600 font-medium">
                Open to Remote & Relocation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
