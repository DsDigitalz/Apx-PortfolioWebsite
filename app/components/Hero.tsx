"use client";

import Image from "next/image";
import { ArrowRight, Mail,  } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        {/* Status Badge */}
        <div className="mb-8 rounded-full border border-violet-400/30 bg-white/5 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,.15)]">
          <span className="text-sm text-violet-300">
            ✦ Available for freelance & full-time opportunities
          </span>
        </div>

        {/* Avatar */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-violet-600/40 blur-3xl" />
          <div className="relative rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={140}
              height={140}
              className="rounded-full"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Building Modern
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {" "}
            Digital Experiences
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          I'm a Software Engineer passionate about creating scalable web
          applications, intuitive interfaces, and delightful digital products
          using modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3 font-medium text-white transition hover:scale-105"
          >
            View Projects
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-white backdrop-blur-xl transition hover:border-violet-400/50 hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center gap-5">
          <a
            href="#"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-xl transition hover:bg-violet-500 hover:text-white"
          >
            {/* <Github size={18} /> */}
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-xl transition hover:bg-violet-500 hover:text-white"
          >
            {/* <Linkedin size={18} /> */}
          </a>

          <a
            href="#"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-xl transition hover:bg-violet-500 hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}