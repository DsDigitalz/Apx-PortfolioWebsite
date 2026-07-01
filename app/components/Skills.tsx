"use client";

import {
  Code2,
  Palette,
  Database,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Auto Layout",
      "Design Systems",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "Supabase",
      "Firebase",
      "REST API",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Postman",
      "npm",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[170px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}

        <div className="mb-20 text-center">
          <span className="rounded-full border border-violet-500/30 bg-white/5 px-5 py-2 text-sm text-violet-300 backdrop-blur-xl">
            Skills
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Technologies I
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400 leading-8">
            My toolbox consists of modern frontend, backend,
            UI/UX and development tools that help me build
            beautiful and scalable digital products.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_0_45px_rgba(139,92,246,.25)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="mb-6 text-2xl font-semibold text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200 transition duration-300 hover:bg-violet-500 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Glass Banner */}

        <div className="mt-16 rounded-[32px] border border-white/10 bg-gradient-to-r from-violet-600/10 via-transparent to-fuchsia-600/10 p-10 backdrop-blur-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              Always Learning New Technologies
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400 leading-8">
              I'm constantly improving my skills by exploring AI,
              cloud computing, software architecture and modern web
              technologies to deliver better digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}