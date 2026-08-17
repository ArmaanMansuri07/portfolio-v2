"use client";

import Link from "next/link";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Strengths", href: "#strengths" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#080b14]/85 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavClick("home")}
          className="group shrink-0 text-2xl font-bold italic tracking-[-0.04em] text-white"
        >
          Armaan
          <span className="text-amber-300 transition group-hover:text-amber-200">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(sectionId)}
                className={`relative rounded-lg px-3 py-2 text-sm transition duration-300 ${isActive
                  ? "text-amber-300"
                  : "text-gray-400 hover:bg-white/[0.03] hover:text-white"
                  }`}
              >
                {link.name}

                {/* Active Indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-amber-300 transition-all duration-300 ${isActive ? "w-4" : "w-0"
                    }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="hidden shrink-0 items-center gap-2 rounded-lg border border-amber-300/30 px-4 py-2 text-sm font-medium text-gray-200 transition duration-300 hover:border-amber-300/60 hover:bg-amber-300/[0.06] hover:text-amber-200 md:flex"
        >
          <FiDownload size={16} />
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-amber-300/30 hover:text-amber-300 lg:hidden"
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#080b14]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${menuOpen
          ? "max-h-[600px] translate-y-0 p-5 opacity-100"
          : "pointer-events-none max-h-0 -translate-y-2 p-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(sectionId)}
                className={`rounded-xl px-4 py-3 text-sm transition ${isActive
                  ? "bg-amber-300/[0.06] text-amber-300"
                  : "text-gray-400 hover:bg-white/[0.03] hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href="/resume.pdf"
            download
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-amber-300/30 px-4 py-3 text-sm font-medium text-amber-200 transition hover:bg-amber-300/[0.06]"
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}