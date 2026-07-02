"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sanudaniel46@email.com",
    href: "mailto:sanudaniel46@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 9137846680",
    href: "tel:+2349137846680",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative lg:py-28  pt-28 pb-10 section-divider">
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
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="text-[#888]">Amazing</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#ACACAC] leading-7">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing exciting opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const Inner = (
                <div className="flex items-center gap-4 flat-card rounded-xl p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/8">
                    <Icon size={18} className="text-[#888]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#555] uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-white mt-0.5">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block group">
                  {Inner}
                </a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}

            {/* Socials */}
            <div className="flex gap-3 pt-2">
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flat-card rounded-xl p-7"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm text-[#888]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Bright"
                  className="w-full rounded-lg border border-white/8 bg-black px-4 py-3 text-sm text-white placeholder-[#444] outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-[#888]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-white/8 bg-black px-4 py-3 text-sm text-white placeholder-[#444] outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-[#888]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full rounded-lg border border-white/8 bg-black px-4 py-3 text-sm text-white placeholder-[#444] outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-[#888]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-white/8 bg-black px-4 py-3 text-sm text-white placeholder-[#444] outline-none transition focus:border-white/25"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.98]"
              >
                <Send size={15} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}