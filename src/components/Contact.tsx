"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 font-mono text-center">

        {/* Pill label */}
        <div className="flex justify-center mb-6">
          <span className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Contact
          </span>
        </div>

        {/* Glitch heading */}
        <h2
          className="glitch-heading text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-4"
          data-text="Get in Touch"
        >
          Get in Touch
        </h2>

        {/* Invitation copy — section ends here */}
        <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-md mx-auto">
          Have a project, role, or collaboration in mind? Drop me a message —{" "}
          <a
            href="https://linkedin.com/in/emilvsaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
          >
            DM on LinkedIn
          </a>{" "}
          and I typically reply within a day.
        </p>

      </div>
    </section>
  );
}
