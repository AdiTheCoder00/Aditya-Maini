"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";

export default function FeaturedProjectSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Image */}
          <motion.div
            className="lg:col-span-6 relative"
            variants={fadeInLeft}
          >
            <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary-container shadow-2xl relative group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBRsVoufqU2JJ9q6nW33hvyBPJ95t5DciwIqkPHOWPQGa0hFFbBw58bENi77FNTda_BNbjz9Gk_vC8ZgSY2mFbedhkyAId33JuK6uaNHAfaisZDLUbnF0_0qntXxuV_pUYVspdnbvXLbPltoDDgQalYBjN_KyqwD7hv8nDq17BDDungJxeJXjrSNLJIg-YDm5hu0NeLECQ4NrOrBNTwwd1NoUKxtK73hzO2rgJ-wu6ApJuH3jNv0Nh8BTjSIeL6y1QBQHpV2L_rqA"
                alt="Cloud Operating System Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: skyEasing }}
              className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 glass-card p-6 md:p-8 rounded-3xl border border-outline-variant/20 shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl md:text-4xl font-bold text-primary">99.8</div>
                <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest leading-none">
                  System<br />Uptime Score
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-6 space-y-6 md:space-y-8"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInRight}
              className="text-primary font-bold font-label uppercase tracking-[0.2em] text-xs"
            >
              Featured Case Study
            </motion.div>
            <motion.h2
              variants={fadeInRight}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tighter leading-tight"
            >
              Cloud Operating System Project
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed"
            >
              A distributed operating system designed to handle real-time data
              streaming across thousands of edge nodes. Built with a focus on
              observability and zero-trust security.
            </motion.p>
            <motion.ul variants={fadeInRight} className="space-y-4 py-2 md:py-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="font-medium">
                  25% Reduction in latency for global users
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="font-medium">
                  Seamless horizontal scaling on AWS
                </span>
              </li>
            </motion.ul>
            <motion.button
              variants={fadeInRight}
              whileHover={{ gap: "20px" }}
              className="flex items-center gap-4 text-lg font-bold group cursor-pointer"
            >
              <span className="text-primary border-b-2 border-primary/20 py-1 transition-all group-hover:border-primary">
                Read the full breakdown
              </span>
              <motion.span
                className="material-symbols-outlined text-primary"
                whileHover={{ x: 4 }}
              >
                east
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
