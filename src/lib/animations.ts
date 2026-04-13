import type { Variants, Transition } from "framer-motion";

// Shared easing curve from DESIGN.md
export const skyEasing: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

// Default transition
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: skyEasing,
};

// Fade in from below
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Faster stagger for skill cards
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Hero stagger (slower, more dramatic)
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Hover lift effect for cards
export const hoverLift = {
  y: -8,
  transition: { duration: 0.4, ease: skyEasing },
};

// Viewport trigger settings
export const viewportOnce = {
  once: true,
  margin: "-80px",
};
