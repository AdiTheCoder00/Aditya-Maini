"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";

const footerLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Layers", href: "#" },
  { label: "Mail", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-slate-50 w-full border-t border-sky-100/10"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-10 md:py-12 max-w-7xl mx-auto gap-6">
        <motion.div
          variants={fadeInUp}
          className="font-label text-sm tracking-wide uppercase text-slate-500 text-center md:text-left"
        >
          © 2024 Sky Glass Editorial. Built for the atmospheric architect.
        </motion.div>
        <motion.div variants={fadeInUp} className="flex items-center gap-6 md:gap-8">
          {footerLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{
                y: -2,
                color: "#0284c7",
                transition: { duration: 0.3, ease: skyEasing },
              }}
              className="font-label text-sm tracking-wide uppercase text-slate-500 transition-colors cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
