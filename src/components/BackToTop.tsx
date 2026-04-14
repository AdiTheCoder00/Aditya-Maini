"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackToTop() {
  const { scrollY } = useScroll();
  
  // Transform scroll position into opacity and pointer events
  const opacity = useTransform(scrollY, [400, 500], [0, 1]);
  const pointerEvents = useTransform(scrollY, [400, 500], ["none", "auto"]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      style={{ opacity, pointerEvents }}
      whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 backdrop-blur-md transition-shadow hover:shadow-primary/50"
      aria-label="Back to top"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </motion.button>
  );
}
