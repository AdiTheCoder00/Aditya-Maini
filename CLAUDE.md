# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev       # start dev server (http://localhost:3000)
npm run build     # production build
npm run start     # serve production build
npm run lint      # next lint
```

There is no test suite configured in this project.

Contact form submission requires an environment variable: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_ENDPOINT` to a Formspree endpoint. Without it, `ContactSection` falls back to a simulated (fake) submit so the UI still works locally.

## Architecture

This is a single-page Next.js 15 (App Router) portfolio site. There is effectively one route (`src/app/page.tsx`), composed of large, self-contained section components rendered in sequence — `HeroSection` → `ExpertiseSection` → `StatsCounter` → `FeaturedProjectSection` → `SkillsSection` → `ExperienceSection` → `ProjectsSection` → `CTASection` → `ContactSection` → `Footer`. Each section is its own file under `src/components/` and is largely independent; navigation between them is by scrolling to `id` anchors (`home`, `expertise`, `skills`, `projects`, `contact`) matched by `NavigationDock`.

### Three animation engines coexist and must stay coordinated

- **Lenis** (`SmoothScroll.tsx`, wraps the whole app in `layout.tsx`) drives global smooth-scroll physics with `autoRaf: false`.
- **GSAP**'s ticker is manually synced to Lenis's `raf` inside `SmoothScroll.tsx`, and `lagSmoothing(0)` is disabled there specifically so GSAP doesn't fight Lenis. GSAP itself powers `TargetCursor` (a custom crosshair cursor that locks onto `.cursor-target` elements) and parts of `MagicBento` (spotlight/particle hover effects).
- **Framer Motion** (`src/lib/animations.ts`) handles declarative entrance/viewport animations (`fadeInUp`, `staggerContainer`, `heroStagger`, etc.) used across nearly every section via `whileInView`.

When touching scroll, cursor, or hover-driven animation code, be aware these three systems share the same render loop — don't introduce a second independent RAF loop or re-enable GSAP's lag smoothing.

`RippleGrid.tsx` is a separate WebGL layer built directly on `ogl` (not GSAP/Framer) that renders the interactive dark-mode-only background grid on the homepage hero.

### Theming: no `next-themes`, hand-rolled dark mode

Dark mode is a `dark` class on `<html>`, controlled by:
1. An inline blocking `<script>` in `layout.tsx` `<head>` that reads `localStorage.theme` before hydration (prevents flash-of-wrong-theme). Default is dark unless `theme === 'light'` is stored.
2. `ThemeToggle.tsx`, which toggles the class and writes `localStorage.theme` client-side.

All colors are Material Design 3–style tokens defined as CSS custom properties in `globals.css` under `@theme` (Tailwind v4 native theming, not a `tailwind.config`), with a `html.dark` block overriding the same variables for dark mode. Components consume these exclusively via Tailwind utility classes like `bg-surface`, `text-on-surface-variant`, `bg-primary-container`, etc. — never hardcode hex colors in component markup; add/adjust tokens in `globals.css` instead.

The full design language ("Sky Glass Editorial") is documented in `stitch/stitch/sky_glass/DESIGN.md` — read it before making visual changes. Key rules from it:
- No 1px solid borders for sectioning; separate sections via background-color shifts (`surface` → `surface-container-low`) or the "ghost border" (`outline-variant` at 15% opacity).
- Glass effects (`.glass-card`, `.glass-panel`, `.glass-navbar` in `globals.css`) use `backdrop-filter: blur()` at 70–80% opacity, not solid fills.
- Shadows (`.shadow-sky-*`) are tinted with the primary blue/purple hue, never plain gray/black.
- Entrance animations use the shared easing curve `skyEasing = [0.2, 0.8, 0.2, 1]` (exported from `src/lib/animations.ts`, mirrored in `globals.css` keyframes) — reuse it rather than inventing new easing curves.

### Component conventions

- All interactive/animated components are Client Components (`"use client"`); section components without interactivity may still be server components — check before assuming `"use client"` is needed.
- Elements meant to trigger the custom `TargetCursor` crosshair need the `cursor-target` class.
- Complex visual components (`Dock`, `RippleGrid`, `TargetCursor`, `MagicBento`) each ship a co-located `.css` file (e.g. `Dock.css`) alongside the `.tsx` instead of using Tailwind for their fine-grained/animation-heavy styles — follow that pattern for similarly complex new components rather than forcing everything into Tailwind utilities.
- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
- `next.config.ts` allow-lists `lh3.googleusercontent.com/aida-public/**` as a remote image source for `next/image` — this is where Stitch-generated design imagery is hosted; extend `remotePatterns` if new external image hosts are introduced.

### `stitch/` directory

Contains original Stitch-exported static HTML/CSS mockups and screenshots per page/breakpoint (e.g. `contact`, `contact_desktop`, `home_aditya_maini`, `projects`, `skills_experience`) plus the source `DESIGN.md`. These are design references only, not part of the Next.js build — don't import from this directory in application code.
