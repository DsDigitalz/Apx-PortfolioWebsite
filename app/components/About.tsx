"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Briefcase,
    title: "Experience",
    description:
      "Building responsive web applications with React, Next.js, Tailwind CSS and modern frontend technologies.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Continuously learning software engineering, UI/UX design, AI, cloud technologies, and modern development practices.",
  },
  {
    icon: MapPin,
    title: "Location",
    description:
      "Based in Lagos, Nigeria, and available to work remotely with teams worldwide.",
  },
];

const stats = [
  { value: "10+", label: "Projects" },
  { value: "1+", label: "Years Learning" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

export default function About() {
  return (
    <section id="about" className="relative lg:py-28 pt-28 section-divider">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#888]">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Passionate About Building
            <br />
            <span className="text-[#888]">Exceptional Digital Products</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#ACACAC] leading-7">
            I&apos;m a software engineer who enjoys transforming ideas into modern,
            scalable and user-friendly web applications. I focus on writing
            clean code, building intuitive interfaces, and creating seamless
            digital experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-4 md:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="flat-card rounded-xl p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/8">
                  <Icon size={20} className="text-[#888]" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {card.title}
                </h3>

                <p className="text-sm leading-6 text-[#ACACAC]">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 grid grid-cols-2 gap-px md:grid-cols-4 rounded-xl overflow-hidden border border-white/8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] px-8 py-8 text-center"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-[#ACACAC]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}