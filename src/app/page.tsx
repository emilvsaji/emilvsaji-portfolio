import React from "react";
import Hero from "@/components/Hero";
import WorkTimeline from "@/components/WorkTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";

export default function Home() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex flex-col font-mono selection:bg-zinc-800 selection:text-white">
        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Work Timeline */}
          <WorkTimeline />

          {/* 3. Featured Projects */}
          <FeaturedProjects />

          {/* 4. Highlights / Achievements */}
          <Achievements />

          {/* 5. Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ToastProvider>
  );
}
