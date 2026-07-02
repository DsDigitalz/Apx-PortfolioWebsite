"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-25 lg:pt-36 lg:pb-32"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 -z-20 dot-grid opacity-60" />

      {/* Faint radial glow */}
      <div className="absolute inset-0 -z-10 hero-glow" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-[#888]">
            Available for freelance &amp; full-time opportunities
          </span>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 relative"
        >
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/images/profile.png"
              alt="DSDigitalz Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-5xl font-bold leading-[1.1] text-white md:text-7xl"
        >
          Building Modern{" "}  
          <span className="text-[#888]">Digital Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-7 text-[#ACACAC] md:text-lg"
        >
          I&apos;m a Software Engineer passionate about creating scalable web
          applications, intuitive interfaces, and delightful digital products
          using modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-95"
          >
            View Projects
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Terminal-style hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6"
        >
          <p className="text-xs text-[#444] font-mono">
            {/* ▲ ~ open to opportunities in Lagos, Nigeria &amp; remote */}
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex items-center gap-3"
        >
          <a
            href="https://github.com/DsDigitalz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#888] transition hover:border-white/20 hover:text-white"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dsdigitalz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#888] transition hover:border-white/20 hover:text-white"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>

          <a
            href="mailto:sanudaniel46@email.com"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#888] transition hover:border-white/20 hover:text-white"
            aria-label="Email"
          >
            <Mail size={16} />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
