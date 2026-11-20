
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarDays,
  Monitor,
  Wrench,
  Code2,
  Network,
  CheckCircle2,
} from "lucide-react";

const experience = [
  {
    type: "experience",
    title: "Technical Support Engineer",
    organization: "Delta Micro Computers",
    location: "Kochi, Kerala",
    duration: "3 Years",
    description:
      "Worked in technical support, computer hardware troubleshooting, system assembly, and basic network configuration.",
    responsibilities: [
      "Diagnosed and resolved desktop and hardware issues.",
      "Assembled and configured computer systems.",
      "Performed hardware maintenance and troubleshooting.",
      "Assisted with basic network configuration.",
    ],
    icon: BriefcaseBusiness,
  },
];

const education = [
  {
    type: "education",
    title: "Diploma in Computer Engineering",
    organization: "Model Polytechnic College",
    location: "Kattakara, Kerala",
    duration: "Completed",
    description:
      "Completed a diploma in Computer Engineering, building a foundation in computer hardware, software, and technical concepts.",
    icon: GraduationCap,
  },
  {
    type: "learning",
    title: "MERN Stack Development",
    organization: "Zoople Technology",
    location: "Kochi, Kerala",
    duration: "Currently Learning",
    description:
      "Developing full-stack web development skills through practical projects using MongoDB, Express.js, React.js, and Node.js.",
    icon: Code2,
  },
];

function TimelineItem({ item, isLast }) {
  const Icon = item.icon;

  return (
    <div className="relative grid grid-cols-[42px_1fr] gap-4 sm:grid-cols-[52px_1fr] sm:gap-6">
      <div className="relative flex justify-center">
        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-400 sm:h-12 sm:w-12">
          <Icon size={21} />
        </div>

        {!isLast && (
          <div className="absolute top-12 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent sm:top-14" />
        )}
      </div>

      <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/[0.04] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium capitalize text-blue-400">
              {item.type === "learning"
                ? "Professional Development"
                : item.type}
            </span>

            <h3 className="text-lg font-semibold text-white sm:text-xl">
              {item.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-blue-400">
              {item.organization}
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-300">
            <CalendarDays size={14} />
            {item.duration}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
          <MapPin size={14} />
          {item.location}
        </div>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {item.description}
        </p>

        {item.responsibilities && (
          <div className="mt-5 space-y-3">
            {item.responsibilities.map((responsibility) => (
              <div
                key={responsibility}
                className="flex items-start gap-3 text-sm text-gray-400"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-400"
                />
                <span>{responsibility}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="portfolio-container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Experience &{" "}
            <span className="text-blue-400">Education</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            My professional background, academic foundation, and continuous
            journey toward becoming a full-stack developer.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <BriefcaseBusiness size={20} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Work Experience
              </h3>
            </div>

            {experience.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <GraduationCap size={20} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Education & Learning
              </h3>
            </div>

            {education.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <Wrench className="mb-4 text-blue-400" size={23} />
            <h4 className="font-semibold text-white">Hardware Support</h4>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Practical experience in computer troubleshooting and assembly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <Monitor className="mb-4 text-blue-400" size={23} />
            <h4 className="font-semibold text-white">Computer Engineering</h4>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Academic foundation in computer systems and technology.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <Network className="mb-4 text-blue-400" size={23} />
            <h4 className="font-semibold text-white">Full-Stack Development</h4>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Building practical web applications with modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
