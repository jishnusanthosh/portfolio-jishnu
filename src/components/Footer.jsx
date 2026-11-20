import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/jishnusanthosh",
    icon: Code2,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: BriefcaseBusiness,
  },
  {
    name: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080d18]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="portfolio-container relative z-10">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:gap-16">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white">
                <Code2 size={24} />
              </div>

              <span className="text-xl font-bold tracking-wide text-white">
                JISHNU<span className="text-blue-400">.</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Full-stack developer focused on building modern, responsive,
              and scalable web applications using modern web technologies.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.name === "Email" ? undefined : "_blank"
                    }
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 transition hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Have an idea or opportunity? Let's connect and discuss it.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-gray-500 sm:text-left">
            © {currentYear} Jishnu Santhosh. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>Designed & Built with</span>
            <span className="font-semibold text-blue-400">Next.js</span>
            <span>&</span>
            <span className="font-semibold text-blue-400">Tailwind CSS</span>
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-blue-400/40 hover:bg-blue-500 hover:text-white sm:mx-0"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
