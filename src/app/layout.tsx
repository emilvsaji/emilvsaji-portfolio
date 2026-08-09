import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emil V Saji | Full-Stack Web Developer",
  description:
    "Full-stack web developer from Kerala, India building scalable web applications and modern UIs with React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "Emil V Saji",
    "Full Stack Developer",
    "Web Developer Kerala",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Emil V Saji" }],
  creator: "Emil V Saji",
  openGraph: {
    title: "Emil V Saji — Full-Stack Web Developer",
    description:
      "Full-stack web developer building scalable web apps and modern UIs.",
    url: "https://emilvsaji.dev",
    siteName: "Emil V Saji Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emil V Saji — Full-Stack Web Developer",
    description:
      "Full-stack web developer building scalable web apps and modern UIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
