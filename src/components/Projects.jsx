"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

import projects from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-amber-300/[0.04] blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
            What I've Built
          </p>

          <h2 className="font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Featured <span className="text-amber-300">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A selection of projects I've built while exploring modern web
            development and creating practical digital experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/25"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-[#0a0d15]">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

               

                {/* Hover Icon */}
                <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <FiArrowUpRight />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-syne text-xl font-bold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-amber-300/20 hover:text-amber-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-amber-300 px-4 py-2.5 text-sm font-semibold text-[#090b10] transition duration-300 hover:bg-amber-200"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-amber-300/30 hover:text-white"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}