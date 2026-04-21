# Aditya Maini | Full-Stack Developer & AI Enthusiast Portfolio

Welcome to the source code of my personal portfolio. Designed to be a high-performance, visually stunning experience, this project combines the precision of complex systems architecture with modern, interactive web design physics.

## 🌌 The Theme: Sky Glass & Midnight Aurora
This portfolio utilizes a custom-built, deeply glassmorphic UI system powered by native CSS variables inside Tailwind CSS. 
- **Sky Glass (Light Mode):** A clean, deeply layered frosty glass aesthetic leveraging subtle oceanic shadow effects.
- **Midnight Aurora (Dark Mode):** A dynamic, immersive theme featuring an interactive, physics-based Ripple Grid that reacts to your mouse coordinates.

## 🛠 Tech Stack
This project runs on the bleeding edge of modern web development:
- **Framework:** Next.js 15.5 (App Router, SSR/SSG)
- **Library:** React 19.1
- **Styling:** Tailwind CSS v4 (with native `@theme` variables)
- **Typography:** Manrope (Smooth Headlines) & Inter (Clean Body text)
- **Telemetry:** @vercel/speed-insights & @vercel/analytics

## ✨ Core Physics & Animations
Coordinating multiple animation engines flawlessly to achieve 60fps+ rendering:
- **Framer Motion (v12):** Deterministic view transitions, strict viewport detection (`whileInView`), and staggered Bento-grid reveals.
- **GSAP (v3.15):** Hardware-accelerated ticker logic powering a custom `TargetCursor` that magically traces and locks onto interactive UI bounding boxes (off-loading math from the React re-render cycle).
- **Lenis (v1.3):** Global momentum-based smooth scrolling logic.
- **Interactive Layers:** GPU-accelerated background blobs (`will-change-transform`) and an interactive `RippleGrid`.

## 🚀 Getting Started Locally

First, clone the repository and install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the environment.

## 🧩 Architecture Snapshot
The application flow is crafted as a continuous narrative rather than a standard one-pager:
- Custom floating `NavigationDock` (macOS style navigation).
- `HeroSection` with a dynamic typing module.
- `ExpertiseSection` & `StatsCounter` for immediate validation.
- `FeaturedProjectSection` & `ProjectsSection` for deep-dive portfolio showcasing.
- `CTASection` & `ContactSection` to seamlessly capture leads, freelance inquiries, and professional connections.

---
*Crafted with precision & passion by Aditya Maini.*
