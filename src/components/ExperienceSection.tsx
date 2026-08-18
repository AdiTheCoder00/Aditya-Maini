"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, viewportOnce } from "@/lib/animations";

const focusAreas = [
  {
    title: "Competitive Programming — Daily Practice",
    description:
      "Solving algorithmic problems under strict time and memory constraints is a running habit, not a resume line. Think before you write, verify before you ship — that discipline carries directly into how the code on this site was built.",
    tags: ["Data Structures", "Algorithms", "C++"],
  },
  {
    title: "Self-Directed, End-to-End",
    description:
      "With no employer setting scope, every build here — front end, backend, deployment — was planned, written, and shipped solo. The Projects section below is the actual record.",
    tags: ["Next.js", "Go", "PostgreSQL"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Sticky Left Column */}
        <motion.div
          className="md:w-1/3 md:sticky md:top-32 h-fit"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInLeft}
            className="text-primary font-label uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Status
          </motion.span>
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-extrabold font-headline tracking-tighter text-on-surface mb-6"
          >
            Where I Am Right Now
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="text-on-surface-variant leading-relaxed mb-8"
          >
            No formal job history yet — this is what fills that space instead.
          </motion.p>
          <motion.a
            href="/resume.pdf"
            download
            variants={fadeInLeft}
            className="block p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 cursor-target"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">download</span>
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  The Dossier
                </div>
                <div className="text-sm font-bold text-primary hover:underline">
                  Download Resume.pdf
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Focus */}
        <div className="md:w-2/3 space-y-8 md:space-y-12">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={i}
            >
              <motion.div
                whileHover={{
                  boxShadow: "0px 20px 40px rgba(0,98,157,0.08)",
                  transition: { duration: 0.4 },
                }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-outline-variant/10 shadow-sky-sm transition-all duration-500"
              >
                <h4 className="text-xl md:text-2xl font-bold font-headline text-on-surface mb-4">
                  {area.title}
                </h4>
                <p className="text-on-surface-variant leading-relaxed mb-4 md:mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-outline-variant uppercase px-2 py-1 bg-surface-container rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
