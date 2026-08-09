# Emil V Saji — Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-App%20Router-black?style=for-the-badge&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Turbopack-Enabled-0ea5e9?style=for-the-badge" alt="Turbopack" />
  <img src="https://img.shields.io/badge/Status-Live%20Production-emerald?style=for-the-badge" alt="Status" />
</p>

A modern, high-performance personal developer portfolio built for **Emil V Saji**, a full-stack web developer based in Kerala, India. The site is engineered to function as a live, credible developer profile featuring real-time client-side GitHub integrations, an electric blue contribution heatmap, live commit feeds, interactive skill filtering, and subtle glassmorphic aesthetics.

---

## 🌟 Table of Contents

- [Design Philosophy & System](#-design-philosophy--system)
  - [Color Palette](#color-palette)
  - [Typography System](#typography-system)
  - [Glassmorphism & Elevation](#glassmorphism--elevation)
  - [Motion & Accessibility](#motion--accessibility)
- [Information Architecture & Sections](#-information-architecture--sections)
- [Client-Side Live Integrations](#-client-side-live-integrations)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Adding Project Screenshots](#-adding-project-screenshots)
- [Production Build & Deployment](#-production-build--deployment)
- [Contact & Profile](#-contact--profile)

---

## 🎨 Design Philosophy & System

The visual identity is inspired by clean developer-first profiles, emphasizing credible engineering output over generic SaaS templates.

### Color Palette

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Base Background** | `#ffffff` | Primary canvas and root background |
| **Surface Subtle** | `#f8fafc` | Card backgrounds, timeline lanes, section alternates |
| **Surface Accent** | `#f1f5f9` | Tag pills, badge containers, legend items |
| **Border Default** | `#e2e8f0` | Card borders, dividers, subtle separators |
| **Border Hover** | `#93c5fd` | Interactive card hover borders |
| **Primary Accent** | `#2563eb` | Primary buttons, active tabs, brand highlights |
| **Electric Blue** | `#3b82f6` | Links, icons, live status beacons |
| **Gradient Accent** | `#6366f1` → `#8b5cf6` | Restrained text gradient highlights on hero names |
| **Text Primary** | `#0f172a` | Headings and high-contrast body copy |
| **Text Muted** | `#475569` | Secondary descriptions, subheadings |
| **Text Subtle** | `#94a3b8` | Timestamps, metadata, small tags |

#### GitHub Heatmap Color Scale

Unlike standard GitHub green, this portfolio features a custom blue-intensity ramp:

- **Level 0 (No activity)**: `#f1f5f9`
- **Level 1 (1–2 commits)**: `#dbeafe`
- **Level 2 (3–4 commits)**: `#93c5fd`
- **Level 3 (5–7 commits)**: `#3b82f6`
- **Level 4 (8+ commits)**: `#1d4ed8`

---

### Typography System

- **Display & Headings**: `Outfit` / `Poppins` (`font-display`) — geometric, clean, modern character for section titles.
- **Body Copy & UI**: `Inter` (`font-sans`) — optimized legibility across desktop, tablet, and mobile displays.
- **Metrics & Code**: `JetBrains Mono` (`font-mono`) — used for commit hashes, timestamps, repository links, and tech pills.

---

### Glassmorphism & Elevation

- **Navbar**: `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px);` with a 1px border.
- **Cards**: Soft multi-layered shadows (`0 1px 3px rgba(0,0,0,0.04)`) elevating to (`0 12px 24px -4px rgba(37,99,235,0.08)`) on hover with a `-2px` translateY lift.
- **Status Beacons**: Dual-ring pulsing green indicator for availability status.

---

### Motion & Accessibility

- **Intersection Observer**: Smooth scroll reveal transitions and dynamic active navbar tracking.
- **Respects `prefers-reduced-motion`**: Animations and smooth scroll transitions are automatically disabled for users requesting reduced motion.
- **Semantic HTML & ARIA**: Full keyboard navigation, descriptive labels, and screen-reader accessible tags.

---

## 🏛️ Information Architecture & Sections

The single-page layout follows a strictly planned 9-section structure:

1. **Header & Floating Navigation (`Navbar.tsx`)**:
   - Brand logo badge with live availability pulse.
   - Real-time Kerala local time clock (IST / Asia/Kolkata).
   - Dynamic active section tracking via IntersectionObserver.
   - Quick "Hire Me" mailto CTA and responsive mobile drawer.

2. **Hero Section (`Hero.tsx`)**:
   - Availability badge with live location chip (`Kerala, India`).
   - High-contrast gradient heading and concise full-stack developer bio.
   - One-click copy email button with instant toast notification.
   - Resume download action and social links (GitHub, LinkedIn, Email, Phone).
   - Profile avatar frame with "1st Place UI/UX" achievement badge.

3. **Work Timeline (`WorkTimeline.tsx`)**:
   - Reverse-chronological experience with role tags and mode badges (Remote / Freelance):
     - **InnoByte Services** — Web Developer Intern (Feb 2026 – Mar 2026)
     - **ApexPlanet Software Pvt Ltd** — Web Developer Intern (Dec 2025 – Feb 2026)
     - **CatchMyBus** — Full Stack Developer / Freelance (Nov 2025 – Dec 2025)
   - Bulleted achievements and tech stack tags for each position.

4. **GitHub Contribution Graph (`GitHubContributions.tsx`)**:
   - 52-week (364-day) heatmap dynamically rendered with custom blue palette.
   - Live metrics: Total Year Contributions, Current Active Streak, and Active Days.
   - Custom floating tooltip showing date and commit count on cell hover.
   - Sync button to re-fetch live activity on demand.

5. **Featured Projects (`FeaturedProjects.tsx`)**:
   - 4 Project cards with browser mockup headers:
     - **CatchMyBus** — Mobile-responsive bus search & route navigator (React, TS, Firebase) → [Live Demo](https://catch-my-bus.vercel.app)
     - **CareerBridge** — Role-based full-stack job portal (PHP, MySQL, JS) → [Source Code](https://github.com/emilvsaji/CareerBridge)
     - **Treasure Cove** — Gamified interactive treasure-hunt web app (JS, HTML5 Canvas) → [Source Code](https://github.com/emilvsaji/Treasure-Cove)
     - **Harvast Spices** — E-commerce platform with search, filters & cart (PHP, MySQL, Tailwind) → [Source Code](https://github.com/emilvsaji/harvast)

6. **Development Feed (`DevelopmentFeed.tsx`)**:
   - Live commit stream connected to `api.github.com/users/emilvsaji/events`.
   - Displays repository pill, commit message, commit SHA hash, and relative timestamps ("3 hours ago", "yesterday").
   - Live stream status beacon and refresh trigger with toast feedback.

7. **Highlights & Achievements (`Achievements.tsx`)**:
   - **ASTHRA 10.0 National Technical Fest (2025)**: 1st Place Winner 🏆 in Pixel Rush UI/UX Design.
   - **NASA Space Apps Challenge (Oct 2025)**: Global Hackathon Participant 🚀.

8. **Skills & Technologies (`Skills.tsx`)**:
   - Interactive category filter tabs (`All`, `Frontend`, `Backend`, `Database`, `Tools`).
   - Categorized cards with proficiency levels and subtext notes.

9. **Contact, Education & Footer (`Contact.tsx` & `Footer.tsx`)**:
   - One-click copy for email (`emilsaji48@gmail.com`) and phone (`+91 8078390442`).
   - Academic background cards: **MG University, Kottayam** (BCA 2026) and **Holy Cross HSS** (Computer Science 2023).
   - Footer with copyright info, social links, and smooth back-to-top button.

---

## ⚡ Client-Side Live Integrations

### 1. Live GitHub Events API Feed
```ts
// Fetches real push & create events for @emilvsaji directly from the browser
fetch("https://api.github.com/users/emilvsaji/events/public")
```
- Automatically parses commit messages, shortens SHA hashes (7 characters), and formats relative times.
- Built-in graceful fallback cache ensures the UI never breaks even if GitHub API rate limits (60 req/hr unauthenticated) are reached.

### 2. Live Kerala Local Time Indicator
```ts
// Formats current time into Indian Standard Time (IST)
const timeStr = now.toLocaleTimeString("en-US", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
```

### 3. Clipboard Feedback System
- Custom `ToastProvider` and `useToast()` hook rendering animated notifications for email/phone copying and activity refreshes.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Self-Contained SVG Brand Icons
- **Fonts**: [Google Fonts via Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (`Inter`, `Outfit`, `JetBrains Mono`)
- **Hosting Target**: [Vercel](https://vercel.com/) / Static Node Hosting

---

## 📁 Project Directory Structure

```text
emilvsaji-portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf                     # Drop your downloadable resume here
├── src/
│   ├── app/
│   │   ├── globals.css                # Custom CSS tokens, heatmap levels & glassmorphism
│   │   ├── layout.tsx                 # Root layout, Google fonts & SEO metadata
│   │   └── page.tsx                   # Main single-page application orchestrator
│   └── components/
│       ├── Achievements.tsx           # Award & hackathon recognition cards
│       ├── Contact.tsx                # One-click copy contact & education cards
│       ├── DevelopmentFeed.tsx        # Live GitHub commit activity stream
│       ├── FeaturedProjects.tsx       # 4 project cards with mockup frames & links
│       ├── Footer.tsx                 # Footer with back-to-top button
│       ├── GitHubContributions.tsx    # Live contribution graph with blue palette
│       ├── Hero.tsx                   # Hero section, avatar & bio
│       ├── Icons.tsx                  # Clean SVG GitHub & LinkedIn brand icons
│       ├── Navbar.tsx                 # Glassmorphic header with live Kerala clock
│       ├── Skills.tsx                 # Interactive categorized skill cards
│       ├── Toast.tsx                  # Toast notification provider & hook
│       └── WorkTimeline.tsx           # Reverse-chronological experience list
├── next.config.ts                     # Next.js configuration
├── package.json                       # Dependencies and build scripts
├── postcss.config.mjs                 # PostCSS Tailwind configuration
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Comprehensive documentation
```

---

## 💻 Getting Started & Local Development

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.17+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/emilvsaji/emilvsaji-portfolio.git
cd emilvsaji-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Adding Project Screenshots

When you are ready to add actual screenshots for your 4 featured projects:

1. Save your project screenshots into `public/images/`:
   - `public/images/catchmybus.webp`
   - `public/images/careerbridge.webp`
   - `public/images/treasurecove.webp`
   - `public/images/harvast.webp`
2. Open [`src/components/FeaturedProjects.tsx`](src/components/FeaturedProjects.tsx) and add an `<img />` or Next.js `<Image />` component inside the mockup frame.

---

## 🚀 Production Build & Deployment

### Build Locally
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete developer portfolio"
   git push origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js and deploys your site with global edge caching and instant SSL.

---

## 📬 Contact & Profile

- **Developer**: Emil V Saji
- **Location**: Kerala, India
- **Email**: [emilsaji48@gmail.com](mailto:emilsaji48@gmail.com)
- **Phone**: [+91 8078390442](tel:8078390442)
- **LinkedIn**: [linkedin.com/in/emilvsaji](https://linkedin.com/in/emilvsaji)
- **GitHub**: [github.com/emilvsaji](https://github.com/emilvsaji)

---

<p align="center">
  Designed & Built with ❤️ by <b>Emil V Saji</b> · 2026
</p>
