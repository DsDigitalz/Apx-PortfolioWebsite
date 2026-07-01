"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div
          className="
          flex
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-8
          py-4
          shadow-[0_0_35px_rgba(139,92,246,0.15)]
        "
        >
          {/* Logo */}

          <Link
            href="/"
            className="
            text-2xl
            font-bold
            tracking-widest
            text-white
            transition
            duration-300
            hover:text-violet-400
          "
          >
            Σ
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="
                relative
                text-sm
                font-medium
                tracking-wide
                text-gray-300
                transition-all
                duration-300
                hover:text-white
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-violet-500
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="
            md:hidden
            rounded-lg
            bg-white/5
            p-2
            text-white
            backdrop-blur-xl
          "
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div
            className="
            mt-4
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-6
            shadow-[0_0_30px_rgba(139,92,246,.18)]
            md:hidden
          "
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                  text-gray-300
                  transition
                  hover:text-violet-400
                "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}