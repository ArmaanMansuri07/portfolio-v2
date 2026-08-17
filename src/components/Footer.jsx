"use client";

import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">

        {/* Copyright */}
        <p className="text-center text-xs text-gray-600 sm:text-left">
          © {new Date().getFullYear()} Armaan Mansuri. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ArmaanMansuri07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition duration-300 hover:border-amber-300/30 hover:text-amber-300"
          >
            <FiGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/armaan-mansuri07/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition duration-300 hover:border-amber-300/30 hover:text-amber-300"
          >
            <FiLinkedin size={16} />
          </a>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-amber-300/20 text-amber-300 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-amber-300/[0.05]"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}