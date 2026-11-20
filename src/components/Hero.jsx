import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Code2,
  Terminal,
  Layers,
  Database,
  Monitor,
  Sparkles,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

const technologies = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Terminal },
  { name: "Node.js", icon: Layers },
  { name: "MongoDB", icon: Database },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070b14] text-white"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="portfolio-container relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            {/* AVAILABILITY */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
              <span className="text-sm text-slate-300">
                Available for new opportunities
              </span>
            </div>

            {/* INTRODUCTION */}
            <p className="mb-3 text-lg font-medium text-slate-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
              Jishnu
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Santhosh.
              </span>
            </h1>

            {/* PROFESSIONAL TITLE */}
            <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
              Full Stack{" "}
              <span className="text-blue-400">Developer</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, scalable and user-friendly web applications
              using the MERN stack and modern web technologies.
              Passionate about creating clean interfaces and powerful
              backend solutions.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <a
                href="#about"
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                <UserRound size={18} />
                About Me
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full border border-blue-500/50 px-7 py-3.5 font-semibold text-blue-300 transition-colors hover:bg-blue-500/10"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>

            {/* SOCIAL LINKS */}
            {/* SOCIAL LINKS */}
<div className="mt-10 flex items-center gap-4">

  {/* GitHub */}
  <a
    href="https://github.com/jishnusanthosh"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
  >
    <Code2 size={20} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/jishnusanthosh"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
  >
    <BriefcaseBusiness size={20} />
  </a>

  {/* Email */}
  <a
    href="mailto:iamjissanthosh610@gmail.com"
    aria-label="Email"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
  >
    <Mail size={20} />
  </a>

</div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center">

            {/* GLOW */}
            <div className="absolute h-[330px] w-[330px] rounded-full bg-blue-600/20 blur-[100px] sm:h-[420px] sm:w-[420px]" />

            {/* OUTER CIRCLE */}
            <div className="absolute h-[340px] w-[340px] rounded-full border border-blue-500/20 sm:h-[420px] sm:w-[420px]" />

            {/* INNER CIRCLE */}
            <div className="absolute h-[280px] w-[280px] rounded-full border border-cyan-400/20 sm:h-[350px] sm:w-[350px]" />

            {/* MAIN VISUAL */}
            <div className="relative z-10 flex h-[390px] w-full max-w-[420px] flex-col items-center justify-center overflow-hidden rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-[#0b1427] to-[#070b14] shadow-[0_0_80px_rgba(37,99,235,0.15)] sm:h-[460px]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.22),transparent_60%)]" />

              {/* DEVELOPER ICON */}
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 shadow-[0_0_60px_rgba(59,130,246,0.3)]">
                <Code2
                  size={90}
                  strokeWidth={1.3}
                  className="text-blue-400"
                />
              </div>

              <h3 className="relative mt-8 text-3xl font-bold tracking-wide">
                Code. Create.
              </h3>

              <p className="relative mt-2 text-lg text-blue-400">
                Innovate.
              </p>

              <div className="relative mt-8 flex flex-wrap justify-center gap-2 px-5">
                {technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-300"
                    >
                      <Icon size={14} className="text-blue-400" />
                      {tech.name}
                    </div>
                  );
                })}
              </div>

              <Sparkles
                size={22}
                className="absolute right-10 top-10 text-blue-400"
              />

              <Monitor
                size={22}
                className="absolute bottom-10 left-10 text-cyan-400/70"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -left-4 top-12 z-20 hidden rounded-xl border border-blue-400/20 bg-[#101a2e]/90 p-4 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs text-slate-300">
                  Building something great
                </span>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -right-3 bottom-16 z-20 hidden rounded-xl border border-blue-400/20 bg-[#101a2e]/90 p-4 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-xs text-slate-400">
                Development Focus
              </p>
              <p className="mt-1 font-bold text-blue-400">
                MERN Stack
              </p>
            </div>

          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-400 sm:flex"
        >
          <ArrowDown size={16} />
          Scroll to explore
        </a>

      </div>
    </section>
  );
}
