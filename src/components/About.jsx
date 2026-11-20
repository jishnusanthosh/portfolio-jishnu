
import {
  ArrowDownToLine,
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Monitor,
  Laptop,
  Database,
  CheckCircle2,
} from "lucide-react";

const journey = [
  {
    year: "Education",
    title: "Diploma in Computer Engineering",
    description:
      "Built a foundation in computer hardware, networking, operating systems and computer technology.",
    icon: GraduationCap,
  },
  {
    year: "3 Years Experience",
    title: "Technical Support Engineer",
    description:
      "Worked at Delta Micro Computers, gaining hands-on experience in hardware troubleshooting, PC assembly and network configuration.",
    icon: BriefcaseBusiness,
  },
  {
    year: "Current Focus",
    title: "MERN Stack Developer",
    description:
      "Developing full-stack web applications using MongoDB, Express.js, React.js and Node.js.",
    icon: Code2,
  },
];

const interests = [
  "Frontend Development",
  "Backend Development",
  "REST API Development",
  "Database Management",
  "Responsive UI Design",
  "Problem Solving",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070b14] py-24 text-white sm:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="portfolio-container relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />
            <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Getting to know the person
            <br />
            <span className="text-blue-400">behind the code.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            A passionate developer with a background in computer engineering,
            hardware technology and modern web development.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT: PROFESSIONAL SUMMARY */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10">

            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
              <Code2 size={28} />
            </div>

            <h3 className="text-2xl font-bold">
              I'm Jishnu Santhosh
            </h3>

            <p className="mt-2 text-sm font-medium text-blue-400">
              Full Stack Web Developer
            </p>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-slate-400">
              <p>
                I'm a Computer Engineering diploma graduate with 3 years
                of professional experience as a Technical Support Engineer.
                My background has given me practical knowledge of computer
                hardware, troubleshooting, system configuration and
                networking.
              </p>

              <p>
                My passion for technology has motivated me to move further
                into software development. I'm currently focusing on building
                modern full-stack web applications using the MERN stack.
              </p>

              <p>
                I enjoy transforming ideas into functional digital products,
                writing clean code, solving problems and continuously
                learning new technologies.
              </p>
            </div>

            {/* INTERESTS */}
            <div className="mt-9">
              <h4 className="mb-4 text-sm font-semibold text-white">
                Areas of Interest
              </h4>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-4 py-2 text-xs text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* DOWNLOAD CV */}
            <a
              href="/Jishnu-Santhosh-CV.pdf"
              download="Jishnu-Santhosh-CV.pdf"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <ArrowDownToLine size={18} />
              Download My CV
            </a>

          </div>

          {/* RIGHT: EXPERIENCE OVERVIEW */}
          <div className="space-y-5">

            {/* EXPERIENCE CARD */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <BriefcaseBusiness size={24} />
                </div>

                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-400">
                  Professional Experience
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-bold text-white">
                3+
                <span className="ml-2 text-lg font-medium text-slate-400">
                  Years
                </span>
              </h3>

              <p className="mt-2 font-medium text-slate-300">
                Technical Support Experience
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Practical experience in computer hardware, PC assembly,
                troubleshooting and technical support.
              </p>
            </div>

            {/* TECHNOLOGY CARD */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Monitor size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Hardware to Software
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Combining practical computer engineering knowledge with
                modern full-stack development skills to build useful
                technology solutions.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <Laptop size={20} className="text-blue-400" />
                  <p className="mt-3 text-sm font-semibold">Hardware</p>
                  <p className="mt-1 text-xs text-slate-500">
                    PC & Networking
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <Database size={20} className="text-cyan-400" />
                  <p className="mt-3 text-sm font-semibold">Software</p>
                  <p className="mt-1 text-xs text-slate-500">
                    MERN Stack
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CAREER JOURNEY */}
        <div className="mt-24">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />
              <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
                My Journey
              </span>
            </div>

            <h3 className="text-3xl font-bold sm:text-4xl">
              My Career Journey
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Every experience has helped me grow, learn and move closer
              to becoming a skilled full-stack developer.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors hover:border-blue-500/40 hover:bg-blue-500/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-medium text-blue-400">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {item.year}
                  </p>

                  <h4 className="mt-3 text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 size={15} className="text-blue-400" />
                    Learning and growing
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/[0.10] to-cyan-500/[0.03] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="text-2xl font-bold">
              Let's build something together.
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              Have an idea or opportunity? I'd love to hear from you.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
