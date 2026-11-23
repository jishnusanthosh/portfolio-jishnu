"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Code2,
  Send,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus(data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="portfolio-container relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Work <span className="text-blue-400">Together</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                <MessageCircle size={24} />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Let's start a conversation
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                I'm interested in discussing web development, full-stack
                projects, and opportunities to learn and grow.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">Location</p>
                    <p className="mt-1 text-sm text-gray-400">Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Code2 size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">GitHub</p>
                    <a
                      href="https://github.com/jishnusanthosh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-gray-400 transition hover:text-blue-400"
                    >
                      github.com/jishnusanthosh
                      <Code2 size={19} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">Contact</p>
                    <p className="mt-1 text-sm text-gray-400">
                      Send a message using the contact form.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-6">
              <h4 className="font-semibold text-white">
                Open to opportunities
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                Interested in connecting with developers, collaborating on
                projects, and exploring full-stack development opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Fill in the details below.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={17} />
              </button>

              {status && (
                <p role="status" className="mt-4 text-sm text-blue-400">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
