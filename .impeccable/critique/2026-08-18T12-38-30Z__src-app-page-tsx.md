---
target: src/app/page.tsx (homepage)
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-08-18T12-38-30Z
slug: src-app-page-tsx
---
# Design Critique — Aditya Maini Portfolio Homepage

Method: dual-agent (A: design-review agent, B: detector-evidence agent), both isolated and parallel. Live browser tooling unavailable in both sub-agents this session (Chrome extension not connected); A is source-code-based, B fell back to a static HTTP fetch.

## Design Health Score (19/32, 2 heuristics n/a)
1. Visibility of System Status — 2/4 — 3 dead Download Resume CTAs + 2 dead project links give zero click feedback.
2. Match Between System & Real World — 2/4 — design-agency copy voice ("Design Maven", "hello@studio.com").
3. User Control and Freedom — 2/4 — no back-to-top wired despite BackToTop.tsx existing unused; Dock nav keyboard-inoperable.
4. Consistency and Standards — 3/4 — strong token discipline; TechMarquee emoji breaks the Material Symbols icon language.
5. Error Prevention — 2/4 — contact form validates well; dead CTAs invite clicks with no guard.
6. Recognition Rather Than Recall — 3/4 — active-section highlighting is consistent.
7. Flexibility & Efficiency — n/a — no power-user path expected on a single-scroll pitch.
8. Aesthetic and Minimalist Design — 3/4 — distinct asymmetric bento layout, undercut by redundant/generic content.
9. Error Recovery — 2/4 — only the contact form surfaces errors; dead buttons fail silently.
10. Help and Documentation — n/a — not expected on a portfolio landing page.

## Design Specificity Verdict
Not authored specifically for the "competitive-programming rigor" positioning in PRODUCT.md — reads as a generic creative-technologist template with names swapped in. ExperienceSection.tsx lists fabricated employers ("LUMINA ARCHITECTS DIGITAL", "VOID STUDIO", "KINETIC LABS") with creative-agency copy. StatsCounter.tsx leads with "Lines of Code" / "Uptime SLA", generic vanity metrics that undercut the efficiency narrative. The one competitive-programming claim ("Ranked Top 1% Global") names no platform or rating. This extends the placeholder-content gap already flagged in PRODUCT.md (Projects/email) into Experience and Stats too.

Deterministic scan: detect.mjs --json src -> exit 2, 28 findings (5 warning, 23 advisory; 4 slop, 24 quality). Warnings: gradient-text x2 (globals.css:306,315), side-tab stripe (globals.css:385), undeclared Material Symbols font (layout.tsx:65), ai-color-palette (Navbar.tsx:64). 23 advisories are token-drift (arbitrary px/rem/color values) across Dock.css, MagicBento.css, CTASection.tsx, ExperienceSection.tsx, FeaturedProjectSection.tsx, HeroSection.tsx, SkillsSection.tsx.

False positives verified: purple/violet warnings are not slop (DESIGN.md documents Aurora Violet as the intentional dark-mode brand primary). Navbar.tsx itself is confirmed dead code -- not imported anywhere in the app -- so that specific warning is doubly moot.

## What's Working
1. Design-system discipline -- No-Line, Tinted-Shadow, and Glass rules are followed everywhere, not just documented.
2. Recurring header pattern (label -> headline -> offset supporting line) gives the scroll a magazine rhythm.
3. Contact form state handling is production-grade (loading/success/error/timeout reset).

## Priority Issues
- [P0] Three Download Resume CTAs are dead (ContactSection.tsx, CTASection.tsx, ExperienceSection.tsx) -- no href/onClick on any. Fix: real /resume.pdf link or remove until one exists.
- [P0] Dock nav is keyboard-inoperable -- Dock.tsx items have role="button" tabIndex={0} but no onKeyDown anywhere in the file. Fix: add Enter/Space handling or use a native button.
- [P1] Experience section contradicts stated positioning -- fabricated creative-agency employers/copy, zero evidence of competitive-programming rigor. Fix: rewrite around real roles/outcomes.
- [P1] StatsCounter metrics work against the pitch -- "Lines of Code"/"Uptime SLA" are generic and contradict an efficiency ethos. Fix: replace with contest rating/rank/percentile.
- [P2] Dead project links compound the placeholder-project gap -- two href="#" links on the Nebula Dashboard card (ProjectsSection.tsx) plus an unwired "Read the full breakdown" button (FeaturedProjectSection.tsx).

## Persona Red Flags
Jordan (first-timer): competitive-programmer claim buried in a typing-rotation; Experience section breaks the mental model; dead Download Resume CTA gives no feedback.
Riley (stress-tester): Dock keyboard-inoperable confirmed; all three resume CTAs confirmed dead; contact form fakes "Message Sent!" via a hardcoded 1.5s timeout when NEXT_PUBLIC_FORM_ENDPOINT is unset, indistinguishable from a real send.
Correction applied during synthesis: original mobile "double nav system" flag was inaccurate -- Navbar.tsx (the hamburger drawer) is dead code, never rendered; mobile shows one nav system, one responsive state.

## Minor Observations
- Footer copyright year is hardcoded, not computed.
- ThemeToggle defaults every first-time visitor to dark mode regardless of OS prefers-color-scheme (confirmed via layout.tsx bootstrap script).
- Navbar.tsx and BackToTop.tsx are complete, unused components -- repo-hygiene drift, not stubs.
- TechMarquee.tsx uses raw emoji instead of the Material Symbols icon language used elsewhere.

## Also found outside design scope
node_modules had never been installed (now fixed); npm audit still shows Next.js-side high-severity advisories requiring a major-version bump, not applied without user decision.
