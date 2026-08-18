---
name: Aditya Maini Portfolio
description: Sky Glass — a dual-mode glassmorphic system for a competitive-programmer's hiring portfolio
colors:
  primary: "#00629d"
  primary-container: "#00a3ff"
  primary-fixed: "#cfe5ff"
  primary-fixed-dim: "#98cbff"
  on-primary: "#ffffff"
  on-primary-container: "#00375a"
  secondary: "#3c6184"
  secondary-container: "#b0d5fe"
  on-secondary-container: "#375d7f"
  tertiary: "#904d00"
  tertiary-container: "#eb8104"
  on-tertiary-container: "#522900"
  surface: "#f7f9fb"
  surface-container-low: "#f2f4f6"
  surface-container: "#eceef0"
  surface-container-high: "#e6e8ea"
  surface-container-highest: "#e0e3e5"
  surface-container-lowest: "#ffffff"
  on-surface: "#191c1e"
  on-surface-variant: "#3f4852"
  outline: "#6f7883"
  outline-variant: "#bec7d4"
  error: "#ba1a1a"
  primary-dark: "#d0bcff"
  primary-container-dark: "#a855f7"
  on-primary-container-dark: "#ede0ff"
  secondary-dark: "#ccc2dc"
  secondary-container-dark: "#4a3560"
  tertiary-dark: "#efb8c8"
  tertiary-container-dark: "#633b48"
  surface-dark: "#0f0d13"
  surface-container-low-dark: "#171520"
  surface-container-dark: "#1c1a22"
  surface-container-high-dark: "#26242c"
  surface-container-lowest-dark: "#0a090e"
  on-surface-dark: "#e6e1e5"
  on-surface-variant-dark: "#cac4d0"
  outline-dark: "#938f99"
  outline-variant-dark: "#49454f"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2rem"
  full: "9999px"
spacing:
  card-padding: "1.5rem"
  card-padding-lg: "2.5rem"
  section-y: "6rem"
  section-y-lg: "8rem"
  container-x: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  card-glass:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-padding}"
  input-field:
    backgroundColor: "{colors.surface-container-high}"
    rounded: "{rounded.sm}"
    padding: "16px"
---

# Design System: Sky Glass Editorial

## Overview

**Creative North Star: "The Atmospheric Architect"**

This system treats the screen as an open sky rather than a boxed-in document: a fluid, expansive environment where code and craft coexist. It exists in two committed states — **Sky Glass** (light mode), a clean, oceanic-blue frosted-glass aesthetic, and **Midnight Aurora** (dark mode), an immersive violet aesthetic featuring an interactive WebGL ripple grid that reacts to the cursor. The same tonal-layering, glass, and shape language carries across both; only the hue family and interactive dark-mode background layer change.

Components read as **airy and glass-forged**: weightless, translucent, never heavy or industrial. Depth comes from stacked frosted sheets and hue-tinted ambient shadows, never from flat gray drop-shadows. The system breaks the "developer-portfolio template" look through intentional asymmetry — expansive whitespace, occasional overlapping glass containers, bento-style grids that vary column span rather than repeating identical tiles.

**Key Characteristics:**
- Dual committed themes (Sky Glass / Midnight Aurora), not a single palette with an inverted dark variant.
- No 1px solid divider lines anywhere; section and card boundaries are drawn with background tone shifts or a "ghost border."
- Every shadow and glow is hue-tinted (blue in light mode, violet in dark), never neutral gray or pure black.
- Entrance motion is a first-class citizen: sections fade/slide up on scroll via a single shared easing curve.

## Colors

The palette pairs a single confident accent hue per mode with a wide neutral surface ramp; accent color is reserved for focus states, links, and small UI accents, not large fills.

### Primary
- **Ocean Blue** (`#00629d`) — Sky Glass mode. Used for links, active nav states, primary text accents, icon fills.
- **Sky Accent** (`#00a3ff`, container role) — the louder accent for primary buttons and gradient-text highlights; paired with `on-primary-container` (`#00375a`) as its text color.
- **Aurora Violet** (`#d0bcff`) — Midnight Aurora mode's primary; its container role (`#a855f7`) drives buttons, glow effects, and the interactive RippleGrid.

### Secondary
- **Slate Blue** (`#3c6184`, light) / **Muted Lavender** (`#ccc2dc`, dark) — used sparingly for secondary icon accents (e.g. the "Competitive" hero card).

### Tertiary
- **Amber** (`#904d00` / container `#eb8104`, light) / **Rose Blush** (`#efb8c8`, dark) — used only for the AI/ML accent icon in the hero bento grid. A minor, rare accent, not a load-bearing palette member.

### Neutral
- **Surface** (`#f7f9fb` light / `#0f0d13` dark) — page base.
- **Surface Container Low** (`#f2f4f6` / `#171520`) — section-level background shift (e.g. Expertise, Skills-adjacent sections).
- **Surface Container Lowest** (`#ffffff` / `#0a090e`) — the "pure" component layer: cards and glass panels sit here.
- **On Surface** (`#191c1e` / `#e6e1e5`) — primary text. Never pure black or pure white.
- **Outline Variant** (`#bec7d4` / `#49454f`) — the ghost-border color, always used at reduced opacity (10–20%), never at full strength as a real border.

### Named Rules
**The No-Line Rule.** 1px solid dividers are prohibited for sectioning. Boundaries are drawn by shifting background color (`surface` → `surface-container-low`) or, when a container would otherwise vanish into its background, by a **Ghost Border**: `outline-variant` at 10–20% opacity.

**The Tinted Shadow Rule.** Shadows are never neutral gray or pure black; they carry the mode's primary hue (`rgba(0, 98, 157, …)` in Sky Glass, black-based but paired with violet glow accents in Midnight Aurora).

## Typography

**Display Font:** Manrope (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label Font:** Inter, distinguished by uppercase + wide tracking rather than a separate face.

**Character:** Manrope's geometric warmth carries headlines with an authoritative, magazine feel; Inter provides the functional, technically-credible "coder" register for body copy and labels. The pairing does the work of signaling "engineer with editorial taste" without a third typeface.

### Hierarchy
- **Display** (800 weight, `clamp(3rem, 6vw, 6rem)`, line-height 1.05, tracking −0.02em): hero name/role statement only.
- **Headline** (800 weight, `clamp(2.25rem, 4vw, 3.75rem)`, line-height 1.1, tracking −0.02em): section titles ("Projects", "Contact", "My Skills").
- **Title** (700 weight, ~1.25–1.5rem): card and component headings.
- **Body** (300 weight, 1.125rem, line-height 1.6): descriptive paragraphs, kept light-weight to contrast with bold headlines.
- **Label** (700 weight, 0.75rem, tracking 0.1em, uppercase): eyebrow text above headlines ("Core Expertise", "Capabilities", "Portfolio Gallery") and badge/status text.

### Named Rules
**The Contrast Bridge Rule.** Pair a bold headline in `on-surface` with an uppercase label-weight sub-header in `primary` directly above it. The size/weight jump between the two carries the hierarchy before the copy is even read.

## Layout

Content is constrained to a `max-w-7xl` (1280px) container, horizontally padded `1.5rem` mobile / `2rem` desktop. Vertical section rhythm is generous and consistent: `py-24` (6rem) standard sections, `py-32` (8rem) for the hero and other emphasis sections — whitespace is doubled rather than tightened whenever in doubt.

Grids favor **asymmetric bento composition** over uniform tiles: the hero splits 7/5 (text/cards), the Projects grid uses a 12-column bento (8/4 featured split, mixed square/wide tiles) rather than a repeating 3-up grid. Headers commonly split into a `flex-col md:flex-row justify-between items-end` pattern: headline on one side, a short supporting line or CTA on the other — an intentional off-center balance rather than centered hero copy.

Responsive behavior follows Tailwind's default breakpoints (`sm`/`md`/`lg`); the floating navigation collapses from a magnifying desktop Dock to a fixed bottom tab bar under 768px.

## Elevation & Depth

Depth is primarily **tonal layering** — a `surface-container-highest` element on `surface` reads as elevated purely through background contrast — supplemented by hue-tinted "atmospheric" shadows on floating elements (navbar, dock, glass cards) and 10–24px `backdrop-filter: blur()` for true glass panels.

### Shadow Vocabulary
- **shadow-sky-sm** (`0px 10px 20px rgba(0,98,157,0.04)` light / `rgba(0,0,0,0.25)` dark): resting elevation for standard cards.
- **shadow-sky-md** (`0px 20px 40px rgba(0,98,157,0.08)` / `rgba(0,0,0,0.35)`): the floating navigation dock and hovered cards.
- **shadow-sky-lg** (`0px 40px 80px rgba(0,98,157,0.06)` / `rgba(0,0,0,0.3)`): large panels (CTA section).
- **glow-card hover** (`0 0 20px rgba(0,163,255,.12), 0 0 60px rgba(0,163,255,.06)` light / violet equivalents dark): a purple/blue ambient glow triggered on hover for stat and expertise cards, layered on top of the tonal shadow.

### Named Rules
**The Glass Rule.** True glass surfaces (`glass-card`, `glass-panel`, `glass-navbar`) combine `surface-container-lowest` at ~70–80% opacity with `backdrop-filter: blur(10–24px)`. Reserve it for floating/overlapping elements (nav, modals, hero cards), not for full-bleed section backgrounds.

## Shapes

Corners scale with a container's role, from tight to soft: `0.75rem` (dock items, inputs, small badges) → `1rem`–`1.5rem` (skill/stat cards) → `2rem`–`3rem` (glass panels: Contact form, CTA block) → fully pill-shaped (`9999px`) for every button, badge, and status pill. No sharp corners appear anywhere in the system. Borders, where present at all, are the Ghost Border (`outline-variant` at low opacity) rather than a solid stroke.

## Components

### Buttons
- **Shape:** fully pill (`rounded-full`).
- **Primary:** `primary-container` background, `on-primary-container` text, no border. `whileHover` scales to 1.05 (and for some variants brightens via `filter: brightness(1.1)` or a background shift toward `primary-fixed-dim`) rather than darkening.
- **Secondary / Ghost:** transparent background, `outline-variant` at ~20% opacity border, `primary` text; hover fills lightly with `surface-container-low`.
- **Interaction floor:** every primary action (`View Projects`, `Contact Me`, `Send Message`) uses `whileTap: { scale: 0.95 }` for tactile feedback.

### Cards
- **Glass Card** (`.glass-card`): `surface-container-lowest` at ~70% opacity, `blur(10px)`, `rounded-3xl` (1.5rem)–`rounded-[2rem]`, Ghost Border, `shadow-sky-sm` at rest → `shadow-sky-md` + `glow-card` on hover, `y: -8` lift.
- **Magic Bento Card**: the signature expertise/project card — adds a mouse-tracked radial spotlight, an optional particle burst on click, and a `border-glow` ring that intensifies with cursor proximity. Purple/violet glow color (`168, 85, 247`) is used even in light mode for this specific component, as a deliberate accent.

### Inputs
- **Style:** `surface-container-high` background, `rounded-xl` (0.75rem), no border at rest.
- **Focus:** background shifts to `surface-container-lowest` and a 2px `primary-container` ring appears (`focus:ring-2 focus:ring-primary-container`).

### Navigation
- **Desktop:** a floating, bottom-centered, macOS-style magnifying **Dock** — glass pill container (`blur(24px)`, Ghost Border, `shadow-sky-md`-equivalent), items scale up on cursor proximity, label tooltip floats above the hovered icon.
- **Mobile (<768px):** the Dock is replaced by a fixed bottom tab bar (glass, `blur(24px)`), active section highlighted by scroll position.

### Signature Components
- **TargetCursor:** replaces the default cursor with a GSAP-driven crosshair that spins when idle and locks onto the bounding box of any `.cursor-target` element on hover — reinforces the "precision instrument" read without needing new colors or type.
- **RippleGrid:** a WebGL (ogl) interactive grid rendered only in Midnight Aurora mode behind the hero, rippling outward from the cursor — the one component where dark mode gets a genuinely different visual layer rather than just a recolor.

## Do's and Don'ts

### Do:
- **Do** use asymmetrical, unequal-column layouts (7/5, 8/4) over centered/symmetric grids.
- **Do** tint every shadow and glow with the mode's primary hue; a gray shadow is a bug.
- **Do** use the shared easing curve `cubic-bezier(0.2, 0.8, 0.2, 1)` for all entrance and hover motion.
- **Do** reserve the purple/violet glow accent (`168, 85, 247`) for Magic Bento / spotlight components specifically, even in light mode — it's a signature, not a general accent.

### Don't:
- **Don't** use 1px solid divider lines to separate sections or list items — shift background tone or use the Ghost Border instead.
- **Don't** use pure black (`#000000`) or pure white (`#ffffff`) for text — use `on-surface` (`#191c1e` light / `#e6e1e5` dark).
- **Don't** darken a primary button on hover — brighten or scale it instead.
- **Don't** crowd sections; if unsure whether there's enough whitespace, double the vertical padding rather than trim content.
