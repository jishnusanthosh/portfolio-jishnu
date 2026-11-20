
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Code2,
  ShoppingCart,
  CheckSquare,
  Monitor,
  Layers,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NEXCORE",
    subtitle: "Gaming PC Marketplace",
    description:
      "A modern gaming PC marketplace where users can explore PC components, customize their builds and discover hardware products with intelligent AI-powered assistance.",
    category: "Full Stack Development",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/jishnusanthosh",
    demo: null,
    featured: true,
    type: "nexcore",
  },
  {
    number: "02",
    title: "MERN Todo App",
    subtitle: "Task Management Application",
    description:
      "A full-stack task management application that allows users to create, view and manage tasks through a responsive interface connected to a REST API and MongoDB.",
    category: "Full Stack Development",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Axios"],
    github: "https://github.com/jishnusanthosh",
    demo: null,
    featured: false,
    type: "todo",
  },
  {
    number: "03",
    title: "Developer Portfolio",
    subtitle: "Personal Portfolio Website",
    description:
      "A modern personal portfolio showcasing my technical skills, development projects, professional background and experience through a responsive user interface.",
    category: "Frontend Development",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/jishnusanthosh",
    demo: null,
    featured: false,
    type: "portfolio",
  },
];

// PROJECT PREVIEW COMPONENTS

function NexcorePreview() {
  return (
    <div className="relative flex h-full min-h-[260px] flex-col overflow-hidden bg-[#080d1c] p-5 sm:p-7">
      <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="text-blue-400" size={20} />
          <span className="font-bold tracking-widest">NEXCORE</span>
        </div>
        <span className="text-xs text-slate-400">PC COMPONENTS</span>
      </div>

      <div className="relative grid flex-1 grid-cols-2 items-center gap-4 py-7">
        <div>
          <p className="text-xs uppercase tracking-[3px] text-blue-400">
            Build your setup
          </p>
          <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
            POWER YOUR
            <span className="block text-blue-400">NEXT LEVEL.</span>
          </h3>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            Discover your ultimate gaming experience.
          </p>
          <div className="mt-5 inline-flex rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold">
            Explore Products
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-36 w-36 rounded-full bg-blue-500/20 blur-2xl" />
          <div className="relative flex h-36 w-28 items-center justify-center rounded-2xl border border-blue-400/40 bg-gradient-to-br from-slate-700 to-[#080d1c] shadow-[0_0_35px_rgba(37,99,235,0.25)]">
            <Monitor size={72} strokeWidth={1} className="text-blue-400" />
            <span className="absolute bottom-3 text-[9px] tracking-widest text-cyan-300">
              NEXCORE
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-slate-500">
        <span>GAMING COMPONENTS</span>
        <span>BUILD. PLAY. REPEAT.</span>
      </div>
    </div>
  );
}

function TodoPreview() {
  return (
    <div className="flex h-full min-h-[260px] flex-col bg-[#0c1420] p-5 sm:p-7">
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-2">
          <CheckSquare className="text-cyan-400" size={21} />
          <span className="font-bold">TaskFlow</span>
        </div>
        <span className="rounded-full bg-green-400/10 px-3 py-1 text-[10px] text-green-400">
          My Workspace
        </span>
      </div>

      <div className="mt-6">
        <p className="text-xs text-slate-500">WELCOME BACK</p>
        <h3 className="mt-1 text-2xl font-bold">My Tasks</h3>
      </div>

      <div className="mt-5 space-y-3">
        {[
          { name: "Complete React project", done: true },
          { name: "Build REST API", done: false },
          { name: "Connect MongoDB", done: false },
        ].map((task) => (
          <div
            key={task.name}
            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3"
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded border ${
                task.done
                  ? "border-green-400 bg-green-400 text-black"
                  : "border-slate-600"
              }`}
            >
              {task.done && <CheckSquare size={13} />}
            </span>
            <span
              className={`text-xs ${
                task.done ? "text-slate-500 line-through" : "text-slate-200"
              }`}
            >
              {task.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-5 text-xs text-slate-500">
        <span>Task management</span>
        <span className="text-cyan-400">3 Tasks</span>
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="relative flex h-full min-h-[260px] flex-col overflow-hidden bg-[#080d1c] p-5 sm:p-7">
      <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-purple-600/20 blur-[80px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <span className="font-bold tracking-wider">
          JISHNU<span className="text-blue-400">.</span>
        </span>
        <span className="text-xs text-slate-400">PORTFOLIO</span>
      </div>

      <div className="relative flex flex-1 flex-col justify-center py-8">
        <p className="text-xs tracking-widest text-blue-400">
          HELLO, I'M JISHNU
        </p>
        <h3 className="mt-3 text-3xl font-black sm:text-4xl">
          Building
          <span className="block text-blue-400">Digital</span>
          Experiences.
        </h3>
        <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">
          Full Stack Developer creating modern web applications.
        </p>
        <div className="mt-5 flex gap-2">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-[10px]">
            About Me
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2 text-[10px]">
            Projects
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ type }) {
  if (type === "nexcore") return <NexcorePreview />;
  if (type === "todo") return <TodoPreview />;
  return <PortfolioPreview />;
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070b14] py-24 text-white sm:py-32"
    >
      {/* BACKGROUND EFFECT */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="portfolio-container relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />
            <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
              My Work
            </span>
          </div>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured <span className="text-blue-400">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            A selection of projects that demonstrate my skills in
            frontend development, backend engineering and full-stack
            application development.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition-colors duration-300 hover:border-blue-500/40 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* PROJECT IMAGE / PREVIEW */}
              <div
                className={`relative overflow-hidden ${
                  project.featured ? "h-[300px] sm:h-[380px]" : "h-[290px]"
                }`}
              >
                <ProjectPreview type={project.type} />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  PROJECT {project.number}
                </div>

                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-blue-300 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="p-6 sm:p-8">

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-2xl font-bold transition-colors group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-blue-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors group-hover:border-blue-400 group-hover:text-blue-400">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PROJECT LINKS */}
                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
                  >
                    <Code2 size={17} />
                    GitHub
                    <ExternalLink size={13} />
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-500">
                      <Layers size={16} />
                      Demo coming soon
                    </span>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-8 text-center sm:flex-row sm:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <Sparkles size={19} className="text-blue-400" />
              <h3 className="text-xl font-bold">
                Have a project in mind?
              </h3>
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Let's collaborate and build something meaningful.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
