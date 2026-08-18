
"use client";

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05070d] px-6 pt-12 pb-7">

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-amber-300/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              className="inline-block text-3xl font-bold italic tracking-[-0.05em] text-white"
            >
              Armaan
              <span className="text-amber-300">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Full Stack Web Developer focused on building modern,
              responsive and user-friendly web experiences.
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-amber-300" />
              </span>

              <span className="text-xs text-gray-500">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start gap-5 sm:items-end">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              Let's Connect
            </p>

            <div className="flex items-center gap-3">

              {/* Email */}
              <a
                href="mailto:armaanmansuri0707@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-amber-300/[0.04] hover:text-amber-300"
              >
                <FiMail size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ArmaanMansuri07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-amber-300/[0.04] hover:text-amber-300"
              >
                <FiGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/armaan-mansuri07/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-amber-300/[0.04] hover:text-amber-300"
              >
                <FiLinkedin size={18} />
              </a>

              {/* Back To Top */}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.04] text-amber-300 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-amber-300/[0.08]"
              >
                <FiArrowUp size={18} />
              </button>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Armaan Mansuri. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Designed & built with{" "}
            <span className="text-amber-300">code</span>.
          </p>

        </div>
      </div>
    </footer>
  );
}