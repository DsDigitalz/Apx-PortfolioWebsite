"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
//   Github,
//   Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}

        <div className="mb-20 text-center">
          <span className="rounded-full border border-violet-500/30 bg-white/5 px-5 py-2 text-sm text-violet-300 backdrop-blur-xl">
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Amazing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400 leading-8">
            Have a project in mind or want to collaborate? Feel free to
            reach out. I'm always open to discussing exciting
            opportunities.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}

          <div className="space-y-6">
            {/* Email */}

            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,.2)]">
              <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4">
                <Mail className="text-white" />
              </div>

              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400">
                  your@email.com
                </p>
              </div>
            </div>

            {/* Phone */}

            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,.2)]">
              <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4">
                <Phone className="text-white" />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Phone
                </h4>
                <p className="text-gray-400">
                  +234 XXX XXX XXXX
                </p>
              </div>
            </div>

            {/* Location */}

            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,.2)]">
              <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4">
                <MapPin className="text-white" />
              </div>

              <div>
                <h4 className="text-white font-semibold">
                  Location
                </h4>
                <p className="text-gray-400">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Socials */}

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-gray-300 transition hover:bg-violet-600 hover:text-white"
              >
                {/* <Github /> */}
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-gray-300 transition hover:bg-violet-600 hover:text-white"
              >
                {/* <Linkedin /> */}
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <form className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-[#18132A]/70 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#18132A]/70 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full rounded-2xl border border-white/10 bg-[#18132A]/70 px-5 py-4 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-[#18132A]/70 px-5 py-4 text-white outline-none transition focus:border-violet-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}