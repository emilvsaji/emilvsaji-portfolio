import React from "react";
import Hero from "@/components/Hero";
import WorkTimeline from "@/components/WorkTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import DevelopmentFeed from "@/components/DevelopmentFeed";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";

export default function Home() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex flex-col font-mono selection:bg-zinc-800 selection:text-white">
        {/* Main Content Sections (Strictly in requested order) */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Work Timeline */}
          <WorkTimeline />

          {/* 4. Featured Projects */}
          <FeaturedProjects />

          {/* 5. Development Feed (Live Commits) */}
          <DevelopmentFeed />

          {/* 6. Highlights / Achievements */}
          <Achievements />

          {/* 7. Skills & Technologies */}
          <Skills />

          {/* 8. Contact & Education */}
          <Contact />
        </main>

        {/* 9. Footer */}
        <Footer />
      </div>
    </ToastProvider>
  );
}
