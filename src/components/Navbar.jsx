
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.06] bg-[#070b14]/80 backdrop-blur-xl">
      <nav className="portfolio-container flex h-[76px] items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-400">
            <Code2 size={23} />
          </div>

          <div>
            <h2 className="text-base font-bold tracking-wide text-white">
              JISHNU<span className="text-blue-400">.</span>
            </h2>
            <p className="text-[10px] tracking-[2px] text-slate-500">
              DEVELOPER
            </p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-300 transition-colors hover:border-blue-400 hover:bg-blue-500/20"
          >
            Let's Talk
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0a1020] md:hidden">
          <div className="portfolio-container flex flex-col gap-1 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
