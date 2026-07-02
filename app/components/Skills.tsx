"use client";

import { Code2, Palette, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-violet-400",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    color: "text-pink-400",
    skills: ["Figma", "Wireframing", "Prototyping", "Auto Layout", "Design Systems"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "text-blue-400",
    skills: ["Node.js", "Express", "Supabase", "MongoDB", "REST API"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    color: "text-amber-400",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman", "npm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative lg:py-28 pt-28 section-divider">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#888]">
            Skills
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I{" "}
            <span className="text-[#888]">Work With</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#ACACAC] leading-7">
            My toolbox consists of modern frontend, backend, UI/UX and
            development tools that help me build beautiful and scalable
            digital products.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-4 md:grid-cols-2"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="flat-card rounded-xl p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/8">
                    <Icon size={20} className={category.color} />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-[#888] transition hover:border-white/15 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-xl border border-white/8 bg-[#0a0a0a] p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Always Learning New Technologies
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#ACACAC] leading-7">
            I&apos;m constantly improving my skills by exploring AI, cloud computing,
            software architecture and modern web technologies to deliver better
            digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}