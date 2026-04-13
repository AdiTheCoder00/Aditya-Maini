"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";

const experiences = [
  {
    title: "Senior Creative Engineer",
    company: "LUMINA ARCHITECTS DIGITAL",
    period: "2022 — Present",
    description:
      "Leading the architectural redesign of core visual engines. Spearheading the transition from legacy monolithic systems to a modern, decoupled atmospheric architecture.",
    achievements: [
      "Increased rendering performance by 40% through custom WebGL shaders.",
      "Managed a cross-functional team of 12 designers and developers.",
    ],
    tags: [],
  },
  {
    title: "Full Stack Developer",
    company: "VOID STUDIO",
    period: "2019 — 2022",
    description:
      "Focused on high-end editorial digital experiences. Built complex backend logic integrated with fluid, glassmorphic front-end interfaces.",
    achievements: [],
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Junior Software Engineer",
    company: "KINETIC LABS",
    period: "2017 — 2019",
    description:
      "Contributed to the development of internal automation tools and responsive client dashboards using React and Python.",
    achievements: [],
    tags: [],
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
            Chronology
          </motion.span>
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-extrabold font-headline tracking-tighter text-on-surface mb-6"
          >
            Work History
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="text-on-surface-variant leading-relaxed mb-8"
          >
            A history of building at the intersection of aesthetic luxury and
            technical robustness.
          </motion.p>
          <motion.div
            variants={fadeInLeft}
            className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">download</span>
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  The Dossier
                </div>
                <div className="text-sm font-bold text-primary cursor-pointer hover:underline">
                  Download Resume.pdf
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="md:w-2/3 space-y-8 md:space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="relative pl-10 md:pl-12 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={i}
            >
              {/* Timeline line */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] bg-surface-container-highest ${
                  i === experiences.length - 1
                    ? "bg-gradient-to-b from-surface-container-highest to-transparent"
                    : ""
                }`}
              />
              {/* Timeline dot */}
              <motion.div
                className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 border-primary bg-surface"
                whileHover={{ scale: 1.5, backgroundColor: "#00629d" }}
                transition={{ duration: 0.3, ease: skyEasing }}
              />
              {/* Card */}
              <motion.div
                whileHover={{
                  boxShadow: "0px 20px 40px rgba(0,98,157,0.08)",
                  transition: { duration: 0.4 },
                }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-outline-variant/10 shadow-sky-sm transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h4 className="text-xl md:text-2xl font-bold font-headline text-on-surface">
                    {exp.title}
                  </h4>
                  <span className="text-sm font-label font-semibold text-primary py-1 px-3 bg-primary/5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="text-primary font-bold mb-4 tracking-tight">
                  {exp.company}
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4 md:mb-6">
                  {exp.description}
                </p>
                {exp.achievements.length > 0 && (
                  <ul className="space-y-3">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-3 text-sm text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                          check_circle
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-outline-variant uppercase px-2 py-1 bg-surface-container rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
