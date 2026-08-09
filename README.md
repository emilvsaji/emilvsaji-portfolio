# Emil V Saji — Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2016-App%20Router-black?style=for-the-badge&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Theme-Dark%20Monospace-18181b?style=for-the-badge" alt="Theme" />
  <img src="https://img.shields.io/badge/Status-Live%20Production-emerald?style=for-the-badge" alt="Status" />
</p>

A modern, high-performance personal developer portfolio built for **Emil V Saji**, a full-stack web developer based in Kerala, India. The site is engineered to function as a live, credible developer profile featuring a sleek dark theme (`#0a0a0a` / `#000000`), a universal monospace typography system (`JetBrains Mono`), flat bordered cards with subtle `1px` borders (`rgba(255,255,255,0.08)`), real-time client-side GitHub integrations, and curated multi-color brand accents.

---

## 🌟 Table of Contents

- [Design Philosophy & System](#-design-philosophy--system)
  - [Color Palette](#color-palette)
  - [Typography System](#typography-system)
  - [Flat Dark Design & Elevation](#flat-dark-design--elevation)
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

The visual identity is inspired by clean developer-first profiles and minimalist engineering aesthetics, emphasizing credible engineering output over generic SaaS templates.

### Color Palette

| Token Name | Hex / RGBA Code | Usage |
| :--- | :--- | :--- |
| **Base Background** | `#0a0a0a` | Primary canvas and root document background |
| **Surface Dark** | `#121212` | Flat cards, terminal shells, timeline panels |
| **Surface Highlight** | `#18181b` / `#27272a` | Active tabs, tag containers, legend items |
| **Border Default** | `rgba(255, 255, 255, 0.08)` | Flat card borders, section dividers, row separators |
| **Border Hover** | `rgba(255, 255, 255, 0.16)` | Interactive card hover borders |
| **Text Primary** | `#f5f5f5` | Headings, project titles, and high-contrast labels |
| **Text Body** | `#a1a1aa` | Descriptions, role summaries, and copy text |
| **Text Dimmer / Meta** | `#71717a` | Timestamps, dates, locations, subtle metadata |
| **Brand Accents** | Muted Colors | Distinct color per item/brand (Blue, Emerald, Amber, Purple, Cyan) |

#### GitHub Heatmap Color Scale

A high-contrast dark mode contribution intensity ramp:

- **Level 0 (No activity)**: `#18181b`
- **Level 1 (1–2 commits)**: `#0e4429`
- **Level 2 (3–4 commits)**: `#006d32`
- **Level 3 (5–7 commits)**: `#26a641`
- **Level 4 (8+ commits)**: `#39d353`

---

### Typography System

- **Universal Typeface**: `JetBrains Mono` (`font-mono`) — applied across **all** headings, body copy, badges, buttons, metrics, and navigation for a cohesive developer aesthetic.
- **Weights**: Regular (400) for body/metadata, Medium (500) for UI labels, SemiBold/Bold (600/700) for headings and project titles.

---

### Flat Dark Design & Elevation

- **Navbar**: Flat dark header (`background: rgba(10, 10, 10, 0.95); border-bottom: 1px solid rgba(255, 255, 255, 0.08);`).
- **Cards**: Flat dark surfaces (`#121212`) with crisp 1px borders (`rgba(255, 255, 255, 0.08)`) instead of heavy shadows or glass blur.
- **Buttons**: Flat dark pill and icon buttons (`bg-zinc-900`, `border-white/[0.08]`) with subtle hover transitions.
- **Status Beacons**: Pulsing emerald indicators for real-time availability.

---

### Motion & Accessibility

- **Intersection Observer**: Dynamic active navigation tracking as the user scrolls.
- **Respects `prefers-reduced-motion`**: Animations and smooth scroll transitions are automatically disabled for users requesting reduced motion.
- **Semantic HTML & ARIA**: Full keyboard navigation, descriptive labels, and screen-reader accessible tags.

---

## 🏛️ Information Architecture & Sections

The single-page layout follows a structured flow:

1. **Hero Section (`Hero.tsx`)**:
   - Monospace greeting: `Hi, I'm Emil V Saji`.
   - Subheading line: `21yo Full-Stack Web Developer from Kerala, India`.
   - Left-aligned text block with concise bio.
   - Square rounded-corner profile avatar frame on the right with a subtle border.
   - Flat dark icon/pill button row (Resume, LinkedIn, GitHub, X/Twitter, Email).

2. **Work & Education Experience (`WorkTimeline.tsx`)**:
   - Two-tab toggle switcher at top: **"Work"** / **"Education"**.
   - Small square company/brand logo icons on the left with distinct brand colors.
   - Role + Company Name in white, role subtitle in gray underneath.
   - Right-aligned date ranges and location + work mode badges.
   - Clean horizontal divider lines between items.

3. **GitHub Contribution Graph (`GitHubContributions.tsx`)**:
   - 52-week (364-day) dark-mode heatmap dynamically rendered.
   - Live metrics: Total Year Commits, Current Active Streak, and Active Days.
   - Custom floating tooltip showing date and commit count on cell hover.
   - Sync button to re-fetch live activity on demand.

4. **Featured Projects (`FeaturedProjects.tsx`)**:
   - Header with "Projects" title + "Explore all projects →" outlined pill button.
   - 2-column grid of featured projects with large raw preview thumbnails at top.
   - All-caps dark pill tags for tech stack (`REACT`, `TYPESCRIPT`, `NODE.JS`, etc.).
   - Source code and live website links at the bottom of each card.
   - Projects: **CatchMyBus**, **CareerBridge**, **Treasure Cove**, **Harvast Spices**.

5. **Development Feed (`DevelopmentFeed.tsx`)**:
   - Live commit stream connected to `api.github.com/users/emilvsaji/events`.
   - Displays repository pill, commit message, commit SHA hash, and relative timestamps.
   - Live stream status beacon and refresh trigger with toast feedback.

6. **Highlights (`Achievements.tsx`)**:
   - Vertical stack of flat dark cards.
   - Left thumbnail icon badge, top-right pill tags (`"1ST PLACE WINNER"`, `"GLOBAL PARTICIPANT"`) + year.
   - **ASTHRA 10.0 National Technical Fest** (Pixel Rush UI/UX Design Winner).
   - **NASA Space Apps Challenge** (Global Hackathon Participant).

7. **Skills & Technologies (`Skills.tsx`)**:
   - Interactive category filter tabs (`All`, `Frontend`, `Backend`, `Database`, `Tools`).
   - Categorized flat cards with colored square category icons, proficiency levels, and notes.

8. **Contact & Footer (`Contact.tsx` & `Footer.tsx`)**:
   - One-click copy for email (`emilsaji48@gmail.com`) and phone (`+91 8078390442`).
   - Location and availability card (Kerala, India / Remote worldwide).
   - Flat dark footer with social links and back-to-top button.

---

## ⚡ Client-Side Live Integrations

### 1. Live GitHub Events API Feed
```ts
// Fetches real push & create events for @emilvsaji directly from the browser
fetch("https://api.github.com/users/emilvsaji/events/public")
```
- Automatically parses commit messages, shortens SHA hashes (7 characters), and formats relative times.
- Built-in graceful fallback cache ensures the UI never breaks even if GitHub API rate limits (60 req/hr unauthenticated) are reached.

### 2. Clipboard Feedback System
- Custom `ToastProvider` and `useToast()` hook rendering animated notifications for email/phone copying and activity refreshes.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons (GitHub, LinkedIn, X)
- **Font**: [JetBrains Mono via Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
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
│   │   ├── globals.css                # Dark theme tokens, heatmap palette & flat card styles
│   │   ├── layout.tsx                 # Root layout, JetBrains Mono font & SEO metadata
│   │   └── page.tsx                   # Main single-page application orchestrator
│   └── components/
│       ├── Achievements.tsx           # Vertical highlights stack with pill tags
│       ├── Contact.tsx                # One-click copy contact & location cards
│       ├── DevelopmentFeed.tsx        # Live GitHub commit activity stream
│       ├── FeaturedProjects.tsx       # 2-column featured project cards & links
│       ├── Footer.tsx                 # Dark footer with back-to-top button
│       ├── GitHubContributions.tsx    # Live contribution graph with dark heatmap
│       ├── Hero.tsx                   # Hero section, pixel/mono greeting & flat buttons
│       ├── Icons.tsx                  # Clean SVG GitHub, LinkedIn, and X icons
│       ├── Skills.tsx                 # Interactive categorized skill cards
│       ├── Toast.tsx                  # Dark toast notification provider & hook
│       └── WorkTimeline.tsx           # Tabbed work & education timeline
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
2. Open [`src/components/FeaturedProjects.tsx`](src/components/FeaturedProjects.tsx) and add an `<img />` or Next.js `<Image />` component inside the card thumbnail header.

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
   git commit -m "feat: complete dark monospace developer portfolio"
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

