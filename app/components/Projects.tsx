"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Betternship Web App",
    category: "UI/UX DESIGN",
    description:
      "Designed contact recruiter pages, showcasing a modern design using Figma",
    image: "/images/Dashboard2.png",
    tech: ["Figma", "UI/UX"],
    github: "",
    live: "https://www.figma.com/design/zRR9fCYYANK2CAkterULb8/Betternship-recruiter-page?node-id=0-1&m=dev&t=mJtTtYKW3c8y5bN0-1",
  },
  {
    id: 2,
    title: "Healthcare Research Web App",
    category: "UI/UX DESIGN",
    description:
      "Designed A comprehensive 5-page, end-to-end Clinical Research Management Suite designed to streamline the lifecycle of medical studies using figma",
    image: "/images/Dashboard.png",
    tech: ["Figma", "UI/UX"],
    github: "",
    live: "https://www.figma.com/design/K4zgLwzg3BJRt56IwS7LHt/Healthcare-research-web-app?node-id=0-1&m=dev&t=v4pACFqKo5EabAHb-1",
  },
  {
    id: 3,
    title: "AI FAQ/Lead Capture Bot",
    category: "FRONT-END WEB DEVELOPMENT",
    description:
      "Developed a high-performance, multi-tenant AI SaaS and embeddable chat widget focused on dynamic personalization and fluid user experience using React, TailwindCSS, and Framer Motion.",
    image: "/images/AI.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "",
    live: "https://helplyai.vercel.app/",
  },
  {
    id: 4,
    title: "Audiophile Ecommerce Website",
    category: "FRONT-END WEB DEVELOPMENT",
    description:
      "Built a fully functional Audiophile e-commerce web app using Next.js and TailwindCSS",
    image: "/images/audiophile.png",
    tech: ["Next.js", "TailwindCSS"],
    github: "",
    live: "https://audicommerce.netlify.app/",
  },
  {
    id: 5,
    title: "Ticket Management Web Application",
    category: "FRONT-END WEB DEVELOPMENT",
    description:
      "A full-featured ticket management system built with VueJS and TailwindCSS",
    image: "/images/ticketrax.png",
    tech: ["VueJS", "TailwindCSS"],
    github: "",
    live: "https://ticketrax-vue.netlify.app/",
  },
  {
    id: 6,
    title: "ProCleaning Services Landing Page",
    category: "FRONT-END WEB DEVELOPMENT",
    description:
      "Developed a responsive front-end cleaning services website with React.JS and Tailwind",
    image: "/images/Cover.png",
    tech: ["React.js", "TailwindCSS"],
    github: "",
    live: "https://procleaningservices.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative lg:py-28 pt-28 section-divider">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#888]">
            Projects
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Things I&apos;ve{" "}
            <span className="text-[#888]">Built</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#ACACAC] leading-7">
            A selection of projects showcasing my frontend and UI/UX design skills.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              className="group flat-card flex flex-col rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#111]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#555]">
                  {project.category}
                </p>

                <h3 className="mb-2 text-base font-semibold text-white leading-snug">
                  {project.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-6 text-[#ACACAC]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/8 px-2.5 py-1 text-[11px] text-[#ACACAC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Live Link */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/60 transition hover:text-white"
                >
                  <ExternalLink size={14} />
                  <span>View Project ↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}