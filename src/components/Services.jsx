
import {
  Code2,
  Monitor,
  Server,
  Database,
  Workflow,
  Layers3,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and user-friendly interfaces with clean layouts and smooth interactions.",
    technologies: ["React.js", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: Server,
    title: "Backend Development",
    description:
      "Developing scalable server-side applications with structured APIs, authentication, and business logic.",
    technologies: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    icon: Database,
    title: "Database Management",
    description:
      "Designing database structures, managing application data, and implementing efficient database operations.",
    technologies: ["MongoDB", "Mongoose", "Database Design"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "API Integration",
    description:
      "Connecting frontend applications with backend services and third-party APIs for smooth data communication.",
    technologies: ["REST APIs", "Axios", "JSON"],
  },
  {
    number: "05",
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Developing complete web applications by integrating frontend interfaces, backend services, and databases.",
    technologies: ["MERN Stack", "Next.js", "MongoDB"],
  },
  {
    number: "06",
    icon: Code2,
    title: "Website Development",
    description:
      "Creating responsive websites with modern design principles, reusable components, and maintainable code.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="portfolio-container relative z-10">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What I Do
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            My <span className="text-blue-400">Services</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            I focus on building modern web applications with clean code,
            responsive interfaces, and reliable functionality.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-500/[0.04] sm:p-7"
              >
                <div className="absolute right-6 top-5 text-4xl font-bold text-white/[0.04]">
                  {service.number}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="my-6 h-px bg-white/10" />

                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-400">
                  <CheckCircle2 size={16} />
                  <span>Development Focus</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-blue-500/[0.04] to-transparent p-7 sm:flex-row sm:p-10">
          <div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-400">
              Let's discuss your idea and turn it into a working web application.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
