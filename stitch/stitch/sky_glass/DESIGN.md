# Design System: Sky Glass Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Atmospheric Architect**
This design system moves away from the rigid, boxed-in layouts of traditional developer portfolios. Instead, it treats the screen as an open sky—a fluid, expansive environment where code and craft coexist. By leveraging "Sky Glass" aesthetics, we prioritize depth, light, and clarity.

The system breaks the "template" look through **Intentional Asymmetry**. We do not center everything; we use expansive whitespace to let content breathe, occasionally overlapping glass containers to create a sense of physical space. The goal is to make the user feel like they are navigating a premium digital gallery, not a database.

---

## 2. Colors & Surface Philosophy

### The Palette
The core of the system is the interplay between the ethereal `primary` (#00629D) and the expansive `surface` (#F7F9FB). 

*   **Primary Portfolio Tones:** Use `primary` for focus and `primary_container` (#00A3FF) for soft, luminous accents.
*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. To separate a hero section from a project grid, transition from `surface` to `surface_container_low`.
*   **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets of frosted glass.
    *   **Base Layer:** `surface`
    *   **Section Layer:** `surface_container_low`
    *   **Component Layer (Cards/Modals):** `surface_container_lowest` (Pure white)
*   **The Glass & Gradient Rule:** To achieve the "Sky Glass" feel, use a backdrop-blur (12px–20px) on `surface_container_lowest` with an opacity of 70-80%. Use a subtle linear gradient for hero backgrounds: `primary_container` at 10% opacity fading into `surface`.

---

## 3. Typography: The Editorial Voice

We utilize a dual-typeface system to balance technical precision with premium elegance.

*   **Display & Headlines (Manrope):** Chosen for its geometric yet warm character. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to create an authoritative, "magazine" feel.
*   **Body & Labels (Inter):** The industry standard for readability. Inter provides the "coder" aesthetic—functional, clean, and reliable.
*   **Intentional Contrast:** Pair a `display-md` headline in `on_surface` with a `label-md` uppercase sub-header in `primary`. This high-contrast scale ensures the hierarchy is felt before it is read.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering**, not shadows. A `surface_container_highest` element placed on a `surface` background creates a "recessed" or "elevated" feel naturally.

### Ambient Shadows
Where floating elements (like Navbars or Modals) are required, use "Atmospheric Shadows":
*   **Value:** `0px 20px 40px rgba(0, 98, 157, 0.08)`
*   **Logic:** Shadows should never be gray; they are tinted with the `primary` hue to mimic the way light scatters in a blue sky.

### The "Ghost Border" Fallback
If a container bleeds into the background (e.g., white card on white background), use a **Ghost Border**: `outline_variant` at 15% opacity. This provides a "whisper" of an edge without breaking the minimal aesthetic.

---

## 5. Components

### Buttons
*   **Primary:** `primary_container` background with `on_primary_container` text. Use `radius-full` for a pill shape. No border.
*   **Secondary:** Ghost style. No background, `outline_variant` at 20% opacity border, `primary` text.
*   **Interactions:** On hover, primary buttons should increase their internal luminosity (shift toward white) rather than getting darker.

### Glass Cards
*   **Structure:** `surface_container_lowest` at 80% opacity, `backdrop-filter: blur(16px)`.
*   **Constraint:** Never use dividers. Separate card headers from body text using `spacing-md` (0.75rem) of vertical whitespace.

### Input Fields
*   **Styling:** `surface_container_high` background, `radius-md`. No border in the default state.
*   **Focus:** Transition background to `surface_container_lowest` and add a 2px `primary_container` outer glow.

### Code Snippet Containers
*   For a coder portfolio, code blocks should use `inverse_surface` with a `surface_variant` header. This provides a "dark mode" focal point that grounds the light, airy system.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** use asymmetrical margins. A project description might be offset to the right while the image sits left.
*   **Do** use large `xl` (1.5rem) corner radii for large containers to emphasize softness.
*   **Do** use "Entrance Animations." Elements should slide up and fade in with a `cubic-bezier(0.2, 0.8, 0.2, 1)` easing.

### Don't:
*   **Don't** use pure black (#000000). Always use `on_surface` (#191C1E).
*   **Don't** use 1px solid dividers to separate list items. Use a `surface_container_low` background shift on hover instead.
*   **Don't** crowd the interface. If you aren't sure if there's enough whitespace, double it.