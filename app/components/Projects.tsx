"use client";

import Image from "next/image";
import {  ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Featured Project",
    description:
      "A modern glassmorphism portfolio built with Next.js and Tailwind CSS featuring smooth animations, responsive layouts and reusable components.",
    image: "/images/project-1.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Service Marketplace",
    category: "Latest Project",
    description:
      "A full-stack marketplace connecting users with service providers through authentication, bookings, dashboards and payment integration.",
    image: "/images/project-2.png",
    tech: ["React", "Supabase", "Tailwind"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28"
    >
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-32 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[170px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="rounded-full border border-violet-500/30 bg-white/5 px-5 py-2 text-sm text-violet-300 backdrop-blur-xl">
            Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Things I've
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Built
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A selection of projects showcasing my frontend and full-stack
            development skills.
          </p>
        </div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-violet-600/30 blur-[70px]" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:scale-[1.02]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="mb-2 text-sm text-violet-400">
                  {project.category}
                </p>

                <h3 className="mb-5 text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                  <p className="leading-8 text-gray-400">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-8 flex items-center gap-5">
                  <a
                    href={project.github}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:bg-violet-500 hover:text-white"
                  >
                    {/* <Github size={18} /> */}
                  </a>

                  <a
                    href={project.live}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:bg-violet-500 hover:text-white"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}