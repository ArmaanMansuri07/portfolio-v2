"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.035] blur-[140px]" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
            Get In Touch
          </p>

          <h2 className="font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's <span className="text-amber-300">Connect</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Have a project idea, opportunity or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b12] lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r"
          >
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.05] text-amber-300">
                <FiMail size={21} />
              </span>

              <h3 className="mt-8 font-syne text-3xl font-bold text-white sm:text-4xl">
                Let's build
                <br />
                something <span className="text-amber-300">great.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                I'm always open to discussing web development projects,
                collaboration opportunities and new ideas.
              </p>
            </div>

            <div className="mt-10">

              {/* Email */}
              <a
                href="mailto:armaanmansuri0707@gmail.com"
                className="group flex items-center justify-between border-b border-white/10 py-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-gray-300 transition group-hover:text-amber-300">
                    armaanmansuri0707@gmail.com
                  </p>
                </div>

                <FiArrowUpRight className="text-gray-600 transition group-hover:text-amber-300" />
              </a>

              {/* Socials */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/ArmaanMansuri07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:text-amber-300"
                >
                  <FiGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/armaan-mansuri07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:text-amber-300"
                >
                  <FiLinkedin size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 sm:p-10"
          >
            <form
              action="mailto:armaanmansuri0707@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-amber-300/40 focus:bg-white/[0.04]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-amber-300/40 focus:bg-white/[0.04]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-amber-300/40 focus:bg-white/[0.04]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-amber-300 px-5 py-3.5 text-sm font-semibold text-[#090b10] transition duration-300 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-300/10"
              >
                Send Message
                <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}