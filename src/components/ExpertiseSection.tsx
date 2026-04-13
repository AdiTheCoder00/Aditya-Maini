"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";

const expertiseCards = [
  {
    icon: "terminal",
    title: "Performance First",
    description:
      "Deeply optimized backend services utilizing Go and Rust for high-throughput requirements and low-latency response times.",
    tags: ["Distributed Systems", "gRPC"],
  },
  {
    icon: "brush",
    title: "Clean Interface",
    description:
      "Crafting editorial-grade frontends that prioritize clarity, accessibility, and fluid user interaction using Next.js and Tailwind.",
    tags: ["React", "Design Systems"],
  },
  {
    icon: "memory",
    title: "Applied AI",
    description:
      "Integrating Large Language Models and computer vision into production environments to solve non-trivial business logic problems.",
    tags: ["PyTorch", "Vector DBs"],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-surface-container-low py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div className="max-w-xl" variants={fadeInUp}>
            <h2 className="text-primary font-label text-sm font-bold uppercase tracking-widest mb-4">
              Core Expertise
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tighter leading-tight">
              Full-Stack & AI Expertise
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="text-on-surface-variant text-lg max-w-xs font-light italic"
          >
            &ldquo;The best software feels as natural and expansive as the open
            sky.&rdquo;
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {expertiseCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0px 40px 80px rgba(0,98,157,0.06)",
                transition: { duration: 0.4, ease: skyEasing },
              }}
              className="group bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] border border-outline-variant/5 transition-all duration-500"
            >
              <div className="mb-6 md:mb-8 p-4 rounded-2xl bg-surface-container w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-headline mb-4">
                {card.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
