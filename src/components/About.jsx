"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiBookOpen,
  FiArrowUpRight,
} from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-amber-400/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
            Get To Know Me
          </p>

          <h2 className="font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About <span className="text-amber-300">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-amber-300/10 blur-3xl" />

              {/* Image Container */}
              <div className="relative h-[320px] w-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d15] shadow-2xl shadow-black/40 sm:h-[380px] sm:w-[330px]">

                <Image
                  src="/profile.jpg"
                  alt="Armaan Mansuri"
                  fill
                  sizes="(max-width: 640px) 280px, 330px"
                  className="object-cover object-center transition duration-700 hover:scale-[1.03]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/60 via-transparent to-transparent" />

                {/* Corner Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-amber-300 via-yellow-200 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-4 rounded-xl border border-white/10 bg-[#0a0d15]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-6">
                <p className="text-xs text-gray-500">
                  Currently focused on
                </p>

                <p className="mt-1 text-sm font-semibold text-amber-200">
                  Full-Stack Development
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-gray-300">
              I'm{" "}
              <span className="font-semibold text-white">
                Armaan Mansuri
              </span>
              , a web developer focused on building modern, responsive and
              user-friendly web applications.
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              I enjoy turning ideas into clean digital experiences using
              technologies like React, Next.js, Django and Python. I focus on
              writing maintainable code while continuously improving my
              development skills.
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              My goal is to grow as a full-stack developer and work on
              real-world products where I can contribute, learn and solve
              meaningful problems.
            </p>

            {/* Info Cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              {/* Development */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.04]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-300/5 text-amber-300">
                    <FiCode size={20} />
                  </div>

                  <FiArrowUpRight className="text-gray-600 transition group-hover:text-amber-300" />
                </div>

                <h3 className="font-semibold text-white">
                  Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Building responsive and scalable web experiences.
                </p>
              </div>

              {/* UI & UX */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.04]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-300/5 text-amber-300">
                    <FiLayers size={20} />
                  </div>

                  <FiArrowUpRight className="text-gray-600 transition group-hover:text-amber-300" />
                </div>

                <h3 className="font-semibold text-white">
                  UI & UX
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Creating clean interfaces with a focus on usability.
                </p>
              </div>

              {/* Continuous Learning */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.04]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-300/5 text-amber-300">
                    <FiBookOpen size={20} />
                  </div>

                  <FiArrowUpRight className="text-gray-600 transition group-hover:text-amber-300" />
                </div>

                <h3 className="font-semibold text-white">
                  Continuous Learning
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Exploring new tools and technologies to improve my skills.
                </p>
              </div>

              {/* Problem Solving */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.04]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-300/5 text-amber-300">
                    <FiCode size={20} />
                  </div>

                  <FiArrowUpRight className="text-gray-600 transition group-hover:text-amber-300" />
                </div>

                <h3 className="font-semibold text-white">
                  Problem Solving
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Turning requirements and ideas into practical solutions.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}