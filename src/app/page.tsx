import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkTimeline from "@/components/WorkTimeline";
import GitHubContributions from "@/components/GitHubContributions";
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
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections (Strictly in requested order) */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Work Timeline */}
          <WorkTimeline />

          {/* 3. GitHub Contribution Graph */}
          <GitHubContributions />

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
