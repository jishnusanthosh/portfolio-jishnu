
"use client";

import { useState } from "react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Globe,
  Palette,
  Terminal,
  Layers,
  GitBranch,
  Braces,
  Cpu,
  Boxes,
  Workflow,
  Cloud,
} from "lucide-react";

const categories = [
  { name: "All Skills", icon: Layers },
  { name: "Frontend", icon: Monitor },
  { name: "Backend", icon: Server },
  { name: "Database", icon: Database },
  { name: "Tools", icon: Wrench },
];

const skills = [
  // FRONTEND
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic markup and accessible web structure.",
    icon: Globe,
    color: "text-orange-400",
    level: "Frontend",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Responsive layouts, styling and modern CSS.",
    icon: Palette,
    color: "text-blue-400",
    level: "Frontend",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Modern ES6+ and interactive web development.",
    icon: Braces,
    color: "text-yellow-400",
    level: "Frontend",
  },
  {
    name: "React.js",
    category: "Frontend",
    description: "Component-based UI development and hooks.",
    icon: Code2,
    color: "text-cyan-400",
    level: "Frontend",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Full-stack React framework and App Router.",
    icon: Layers,
    color: "text-white",
    level: "Frontend",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first responsive UI development.",
    icon: Palette,
    color: "text-cyan-300",
    level: "Frontend",
  },

  // BACKEND
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript runtime.",
    icon: Terminal,
    color: "text-green-400",
    level: "Backend",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Backend routing and REST API development.",
    icon: Server,
    color: "text-slate-300",
    level: "Backend",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "API design, HTTP methods and integration.",
    icon: Workflow,
    color: "text-blue-400",
    level: "Backend",
  },

  // DATABASE
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database and document-based storage.",
    icon: Database,
    color: "text-green-400",
    level: "Database",
  },
  {
    name: "Mongoose",
    category: "Database",
    description: "MongoDB object modeling for Node.js.",
    icon: Boxes,
    color: "text-red-400",
    level: "Database",
  },

  // TOOLS
  {
    name: "Git",
    category: "Tools",
    description: "Version control and source code management.",
    icon: GitBranch,
    color: "text-orange-400",
    level: "Tools",
  },
{
  name: "GitHub",
  category: "Tools",
  description: "Repository hosting and collaboration.",
  icon: Code2,
  color: "text-white",
  level: "Tools",
},
  {
    name: "VS Code",
    category: "Tools",
    description: "Code editor and development environment.",
    icon: Code2,
    color: "text-blue-400",
    level: "Tools",
  },
  {
    name: "Postman",
    category: "Tools",
    description: "API testing and request management.",
    icon: Cloud,
    color: "text-orange-400",
    level: "Tools",
  },
  {
    name: "npm",
    category: "Tools",
    description: "JavaScript package management.",
    icon: Boxes,
    color: "text-red-400",
    level: "Tools",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const filteredSkills =
    activeCategory === "All Skills"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        );

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070b14] py-24 text-white sm:py-32"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="portfolio-container relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* SECTION HEADER */}
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
              My Expertise
            </span>
          </div>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Technical{" "}
            <span className="text-blue-400">Skills.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Technologies and tools I use to design, develop and build
            modern, scalable and user-friendly web applications.
          </p>
        </div>

        {/* SKILL CATEGORY FILTERS */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-blue-500/50 hover:text-blue-400"
                }`}
              >
                <Icon size={17} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* SKILLS GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.04]"
              >
                {/* ICON AND CATEGORY */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      size={25}
                      className={`${skill.color} transition-transform group-hover:scale-110`}
                    />
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-slate-500">
                    {skill.category}
                  </span>
                </div>

                {/* SKILL NAME */}
                <h3 className="mt-6 text-lg font-bold text-white">
                  {skill.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                  {skill.description}
                </p>

                {/* BOTTOM LINE */}
                <div className="mt-6 h-px w-full bg-white/[0.07]" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Technology
                  </span>

                  <span className="text-xs font-medium text-blue-400">
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM INFORMATION */}
        <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/[0.08] to-cyan-500/[0.03] p-8 sm:p-10">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>
              <div className="flex items-center gap-3">
                <Cpu size={25} className="text-blue-400" />

                <h3 className="text-xl font-bold">
                  Always Learning, Always Building
                </h3>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Technology evolves every day. I continuously explore
                new tools, improve my development skills and work
                on practical projects to grow as a developer.
              </p>
            </div>

            <a
              href="#projects"
              className="flex shrink-0 items-center gap-2 rounded-full border border-blue-500/40 px-6 py-3 text-sm font-semibold text-blue-400 transition-colors hover:bg-blue-500/10"
            >
              Explore Projects
              <Code2 size={17} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
