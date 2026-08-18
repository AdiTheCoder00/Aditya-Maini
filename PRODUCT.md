# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: recruiters and hiring managers evaluating Aditya Maini for full-time software engineering roles. They land on the site to quickly judge technical depth and whether shipped work backs up the claims.

## Product Purpose

A personal portfolio for Aditya Maini — Full-Stack Developer and AI Enthusiast — that exists to get him hired. Success means a recruiter/hiring manager comes away convinced of his technical depth and reaches out or moves him forward in a process.

## Positioning

The differentiator is competitive-programming rigor: Aditya is a top-1%-ranked competitive programmer, and the claim the site should land is that his code isn't just functional but algorithmically sharp and performant — a level of engineering precision a generic full-stack portfolio wouldn't signal.

## Operating Context

Single-page, scroll-driven narrative (not a multi-page site): Hero → Expertise → Stats → Featured Project → Skills → Experience → Projects → CTA → Contact → Footer, navigated via a floating dock that jumps between named sections.

## Capabilities and Constraints

- Next.js 15 App Router, single real route.
- Contact form posts to Formspree via `NEXT_PUBLIC_FORM_ENDPOINT`; falls back to a simulated submit when unset.
- No CMS or backend — all content (projects, skills, experience) is hardcoded in component files.

## Brand Commitments

- Name: Aditya Maini.
- Roles claimed in hero copy: Full-Stack Developer, AI Enthusiast, Competitive Programmer, Systems Architect.
- Social handles: GitHub `AdiTheCoder00`, LinkedIn `adityamaini`, Twitter `adityamaini`.

## Evidence on Hand

**Known gap — placeholder content still in place, not yet real evidence:**
- The Projects section ("Nebula Dashboard v2", "Lumina Mobile", "Prism Analytics", "Stratosphere OS") is Stitch-generated filler — fictional projects with stock photography (`lh3.googleusercontent.com/aida-public/...`). These are not real shipped work and must not be treated as portfolio evidence or cited in copy until replaced with actual projects.
- The contact email (`adityamaini@example.com`) is a placeholder domain, not a real inbox.
- Future work should replace these with real project case studies, screenshots, and a real contact address before this site goes live to recruiters.

## Product Principles

1. Every visual and interaction choice should reinforce technical precision — not just "engineer" but "competitive-programmer sharp."
2. The site is a hiring instrument first: clarity and proof of work outrank decorative flourish.
3. Don't let placeholder/fictional project content masquerade as real evidence in future design or copy work — flag it until swapped.

## Accessibility & Inclusion

No product-specific requirement established yet.
