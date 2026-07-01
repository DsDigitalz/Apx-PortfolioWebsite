"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-violet-500/30 bg-white/5 px-4 py-2 text-sm text-violet-300 backdrop-blur-xl">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Passionate About Building
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Exceptional Digital Products
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            I'm a software engineer who enjoys transforming ideas into modern,
            scalable and user-friendly web applications. I focus on writing
            clean code, building intuitive interfaces, and creating seamless
            digital experiences.
          </p>
        </div>

        {/* Glass Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Experience */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,.25)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600">
              <Briefcase size={24} className="text-white" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Experience
            </h3>

            <p className="text-gray-400">
              Building responsive web applications with React, Next.js,
              Tailwind CSS and modern frontend technologies.
            </p>
          </div>

          {/* Education */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,.25)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600">
              <GraduationCap size={24} className="text-white" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Education
            </h3>

            <p className="text-gray-400">
              Continuously learning software engineering, UI/UX design, AI,
              cloud technologies, and modern development practices.
            </p>
          </div>

          {/* Location */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,.25)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600">
              <MapPin size={24} className="text-white" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Location
            </h3>

            <p className="text-gray-400">
              Based in Lagos, Nigeria, and available to work remotely with
              teams worldwide.
            </p>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-20 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-violet-400">20+</h3>
            <p className="mt-2 text-gray-400">Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-violet-400">2+</h3>
            <p className="mt-2 text-gray-400">Years Learning</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-violet-400">10+</h3>
            <p className="mt-2 text-gray-400">Technologies</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-violet-400">100%</h3>
            <p className="mt-2 text-gray-400">Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}