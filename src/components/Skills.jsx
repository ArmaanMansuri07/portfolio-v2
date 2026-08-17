"use client";

import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiDjango,
    SiTailwindcss,
    SiMysql,
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            {
                name: "HTML5",
                icon: <FaHtml5 />,
                level: "Advanced",
                color: "#E34F26",
            },
            {
                name: "CSS3",
                icon: <FaCss3Alt />,
                level: "Advanced",
                color: "#1572B6",
            },
            {
                name: "JavaScript",
                icon: <FaJs />,
                level: "Intermediate",
                color: "#F7DF1E",
            },
            {
                name: "React.js",
                icon: <FaReact />,
                level: "Intermediate",
                color: "#61DAFB",
            },
            {
                name: "Next.js",
                icon: <SiNextdotjs />,
                level: "Intermediate",
                color: "#FFFFFF",
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />,
                level: "Intermediate",
                color: "#06B6D4",
            },
        ],
    },

    {
        title: "Backend & Database",
        skills: [
            {
                name: "Python",
                icon: <FaPython />,
                level: "Intermediate",
                color: "#3776AB",
            },
            {
                name: "Django",
                icon: <SiDjango />,
                level: "Intermediate",
                color: "#44B78B",
            },
            {
                name: "SQL",
                icon: <SiMysql />,
                level: "Intermediate",
                color: "#4479A1",
            },
        ],
    },

    {
        title: "Tools & Workflow",
        skills: [
            {
                name: "Git",
                icon: <FaGitAlt />,
                level: "Intermediate",
                color: "#F05032",
            },
            {
                name: "GitHub",
                icon: <FaGithub />,
                level: "Intermediate",
                color: "#FFFFFF",
            },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
        >
            {/* Background Glow */}
            <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-amber-300/[0.04] blur-[120px]" />

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
                        My Expertise
                    </p>

                    <h2 className="font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Skills & <span className="text-amber-300">Technologies</span>
                    </h2>

                    <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                        Technologies and tools I use to build modern, responsive and
                        user-focused web applications.
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="space-y-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                                duration: 0.6,
                                delay: categoryIndex * 0.1,
                            }}
                            className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7"
                        >
                            {/* Category Title */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.5)]" />

                                <h3 className="font-syne text-lg font-semibold text-white sm:text-xl">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group rounded-2xl border border-white/10 bg-[#090c14] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.04]"
                                    >
                                        {/* Icon */}
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-2xl transition duration-300 group-hover:-translate-y-1 group-hover:border-amber-300/20">
                                            <span
                                                style={{ color: skill.color }}
                                                className="transition-transform duration-300 group-hover:scale-110"
                                            >
                                                {skill.icon}
                                            </span>
                                        </div>

                                        {/* Name */}
                                        <h4 className="text-sm font-semibold text-white">
                                            {skill.name}
                                        </h4>

                                        {/* Level */}
                                        <p className="mt-1 text-xs text-gray-500">
                                            {skill.level}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-10 text-center"
                >
                    <p className="text-sm text-gray-500">
                        Always learning, experimenting and improving.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}