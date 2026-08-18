"use client";

import { motion } from "framer-motion";
import {
  FiMonitor,
  FiSmartphone,
  FiZap,
  FiCode,
  FiLayers,
  FiTool,
} from "react-icons/fi";

const strengths = [
  {
    icon: <FiMonitor />,
    title: "Modern Web Development",
    description:
      "Building clean and modern web applications using React, Next.js and Django.",
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive Design",
    description:
      "Creating interfaces that work smoothly across mobile, tablet and desktop screens.",
  },
  {
    icon: <FiZap />,
    title: "Performance Focused",
    description:
      "Writing efficient code and building fast, smooth and user-friendly experiences.",
  },
  {
    icon: <FiCode />,
    title: "Clean Code",
    description:
      "Keeping components structured, reusable and easy to maintain.",
  },
  {
    icon: <FiLayers />,
    title: "API Integration",
    description:
      "Working with APIs to fetch, display and manage dynamic application data.",
  },
  {
    icon: <FiTool />,
    title: "Problem Solving",
    description:
      "Breaking down requirements and turning ideas into practical web solutions.",
  },
];

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-amber-300/[0.04] blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
            What I Bring
          </p>

          <h2 className="font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My <span className="text-amber-300">Strengths</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A few things I focus on while building useful and polished web
            experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/25 hover:bg-white/[0.04]"
            >
              {/* Number */}
              <span className="absolute right-5 top-5 text-xs font-medium text-white/10 transition duration-300 group-hover:text-amber-300/30">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/15 bg-amber-300/[0.05] text-xl text-amber-300 transition duration-300 group-hover:scale-105 group-hover:border-amber-300/30">
                {strength.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 font-syne text-lg font-semibold text-white">
                {strength.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {strength.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-amber-300 to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}