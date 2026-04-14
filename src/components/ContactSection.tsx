"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, fadeInRight, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";

const socialLinks = [
  { icon: "terminal", label: "GitHub", href: "#" },
  { icon: "link", label: "LinkedIn", href: "#" },
  { icon: "public", label: "Twitter", href: "#" },
  { icon: "mail", label: "Email", href: "#" },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
        // Fallback for demonstration if environment variable is missing
        console.warn("NEXT_PUBLIC_FORM_ENDPOINT is not set.");
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormState({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
        return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors) {
          setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setError("Oops! There was a network error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.header
        className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.div className="max-w-2xl" variants={fadeInUp}>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-none">
            Contact
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-4"
          variants={fadeInUp}
        >
          <p className="text-lg text-on-surface-variant max-w-xs leading-relaxed">
            Open for high-impact collaborations and architectural code
            inquiries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-outline-variant/20 text-primary font-semibold hover:bg-surface-container-low transition-all"
          >
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Contact Form */}
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] border border-outline-variant/10 shadow-sky-sm">
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Design Maven"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hello@studio.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                  Message*
                </label>
                <textarea
                  required
                  placeholder="Tell me about the atmosphere you want to build..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none resize-none"
                />
              </div>

              {error && (
                <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm font-medium">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ scale: isSubmitting || submitted ? 1 : 1.02, filter: isSubmitting || submitted ? "none" : "brightness(1.1)" }}
                whileTap={{ scale: isSubmitting || submitted ? 1 : 0.98 }}
                className={`w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 ${
                  (isSubmitting || submitted) ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                  </>
                ) : submitted ? (
                  <>
                    Message Sent!
                    <span className="material-symbols-outlined">check_circle</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Image Card */}
          <motion.div
            variants={fadeInRight}
            className="relative group h-48 md:h-64 rounded-[2rem] overflow-hidden"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb_hArvYNZ3BfPCDduXRn-N3jJY-Q4zG2v8C9EWnIiZB_UUOuSJ4g3ZnsXn_afhfoENVE8NTbvJsiEacKx3QifdgbtYECxq9Skee_rMz5Jvl_eov6OE00Fvx3Jwmsdj539Ynrob5W3ekm5gMMq-XQIThDbldz8tD5Taqd-N-5XrgMlACWYftFZ6axVW-pQWHENMpKmLDrF6cBAXZwDvLE9eft_YHx3tTlPPs3VT7iql9S4hz9jbhNkn-dxjqHE2kmGrn84VEItkug"
              alt="Digital connectivity concept"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </motion.div>

          {/* Connect Links */}
          <motion.div
            variants={fadeInRight}
            className="bg-surface-container-low rounded-[2rem] p-6 md:p-8 space-y-6"
          >
            <h3 className="font-headline font-bold text-2xl text-on-surface">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2, ease: skyEasing },
                  }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-container/10 transition-all group border border-transparent hover:border-primary-container/20"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">
                      {link.icon}
                    </span>
                  </div>
                  <span className="font-semibold text-on-surface-variant text-sm md:text-base">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Status Card */}
          <motion.div
            variants={fadeInRight}
            className="p-6 md:p-8 border border-outline-variant/30 rounded-[2rem] flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-bold text-outline uppercase tracking-widest mb-1">
                Current Status
              </p>
              <p className="text-on-surface-variant font-medium">
                Available for Q3 Projects
              </p>
            </div>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
