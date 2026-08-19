import Image from "next/image";
import Link from "next/link";
import {
    FiArrowRight,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiCornerUpRight,
} from "react-icons/fi";
import { FaReact, FaPython } from "react-icons/fa";
import {
    SiNextdotjs,
    SiDjango,
    SiTailwindcss,
} from "react-icons/si";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 sm:pb-20 lg:pt-28"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_45%,rgba(245,158,11,0.07),transparent_28%),radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.035),transparent_25%)]" />

            <div className="pointer-events-none absolute right-[10%] top-[20%] -z-10 h-72 w-72 rounded-full bg-amber-300/[0.05] blur-[120px]" />

            <div className="pointer-events-none absolute bottom-[10%] left-[15%] -z-10 h-64 w-64 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

            <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

                {/* ================= LEFT ================= */}
                <div className="relative z-10">

                    {/* Intro */}
                    <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                        </span>

                        Available for opportunities
                    </div>

                    {/* Heading */}
                    <h1 className="font-syne w-full max-w-full text-[2.7rem] font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.7rem] xl:text-[6.3rem]">

                        <span className="block text-white">
                            ARMAAN
                        </span>

                        <span className="relative mt-2 block">
                            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-600 bg-clip-text text-transparent">
                                MANSURI
                            </span>

                            {/* Accent */}
                            <span className="absolute -bottom-3 left-1 h-[2px] w-16 bg-amber-300 sm:w-20" />
                        </span>
                    </h1>

                    {/* Role */}
                    <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg font-medium tracking-[0.18em] text-gray-300 sm:text-xl">
                            FULL STACK
                        </span>

                        <span className="text-lg font-medium tracking-[0.18em] text-amber-300 sm:text-xl">
                            WEB DEVELOPER
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                        I build modern, responsive and user-focused web
                        applications with clean code, thoughtful interfaces
                        and practical digital experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link
                            href="#projects"
                            className="group flex items-center gap-2 rounded-xl bg-amber-300 px-6 py-3.5 text-sm font-semibold text-[#080b12] transition duration-300 hover:-translate-y-1 hover:bg-amber-200 hover:shadow-xl hover:shadow-amber-300/10"
                        >
                            Explore My Work

                            <FiArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            href="#contact"
                            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:text-white"
                        >
                            Let's Talk

                            <FiCornerUpRight
                                size={16}
                                className="text-gray-500 transition group-hover:text-amber-300"
                            />
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="mt-9 flex items-center gap-3">
                        <a
                            href="https://github.com/ArmaanMansuri07"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:text-amber-300"
                        >
                            <FiGithub size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/armaan-mansuri07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:text-amber-300"
                        >
                            <FiLinkedin size={18} />
                        </a>

                        <a
                            href="mailto:armaanmansuri0707@gmail.com"
                            aria-label="Email"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:text-amber-300"
                        >
                            <FiMail size={18} />
                        </a>

                        <div className="ml-2 h-px w-12 bg-white/10" />

                        <span className="text-xs tracking-wider text-gray-600">
                            INDIA
                        </span>
                    </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[600px]">

                    {/* Large ambient glow */}
                    <div className="absolute h-[320px] w-[320px] rounded-full bg-amber-300/[0.05] blur-[100px] sm:h-[400px] sm:w-[400px]" />

                    {/* Decorative Circle */}
                    <div className="absolute h-[340px] w-[340px] rounded-full border border-white/[0.06] sm:h-[480px] sm:w-[480px]" />
                    <div className="absolute h-[320px] w-[320px] rounded-full border border-amber-300/[0.10] sm:h-[400px] sm:w-[400px]" />

                    {/* Rotating Dashed Ring */}
                    <div className="absolute h-[305px] w-[305px] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-amber-300/[0.12] sm:h-[430px] sm:w-[430px]" />

                    {/* Main Photo Frame */}
                    <div className="relative z-10">

                        {/* Outer Frame */}
                        <div className="relative h-[360px] w-[270px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e16] shadow-2xl shadow-black/40 sm:h-[420px] sm:w-[310px] lg:h-[440px] lg:w-[330px]">

                            {/* Top Label */}
                            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#080b12]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-gray-400 backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                                Developer
                            </div>

                            {/* Image */}
                            {/* <Image
                                src="/hero.jpg"
                                alt="Armaan Mansuri"
                                fill
                                priority
                                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 380px"
                                className="object-cover object-[center_35%] transition duration-700 hover:scale-[1.03]"
                            /> */}

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent opacity-70" />

                            {/* Bottom Text */}
                            <div className="absolute bottom-5 left-5 right-5 z-20">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300">
                                    Building Digital Experiences
                                </p>

                                <div className="mt-2 h-px w-full bg-white/10" />
                            </div>
                        </div>

                        {/* Small Corner Accent */}
                        <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-[1.5rem] border-b-2 border-r-2 border-amber-300/60" />

                        <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-[1.5rem] border-l-2 border-t-2 border-amber-300/40" />
                    </div>

                    {/* React */}
                    <div className="absolute left-1 top-24 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#080b12]/90 text-cyan-300 shadow-xl shadow-cyan-400/5 backdrop-blur-md sm:left-2 sm:h-14 sm:w-14">
                        <FaReact size={23} />
                    </div>

                    {/* Next */}
                    <div className="absolute right-1 top-12 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#080b12]/90 text-white shadow-xl backdrop-blur-md sm:right-3 sm:h-14 sm:w-14">
                        <SiNextdotjs size={23} />
                    </div>

                    {/* Tailwind */}
                    <div className="absolute right-1 top-56 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#080b12]/90 text-cyan-300 shadow-xl shadow-cyan-400/5 backdrop-blur-md sm:right-[-5px] sm:h-14 sm:w-14">
                        <SiTailwindcss size={23} />
                    </div>

                    {/* Python */}
                    <div className="absolute bottom-24 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-[#080b12]/90 text-yellow-300 shadow-xl shadow-yellow-400/5 backdrop-blur-md sm:bottom-20 sm:right-12 sm:h-14 sm:w-14">
                        <FaPython size={23} />
                    </div>

                    {/* Django */}
                    <div className="absolute bottom-8 left-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[#080b12]/90 text-emerald-300 shadow-xl shadow-emerald-400/5 backdrop-blur-md sm:bottom-6 sm:left-10 sm:h-14 sm:w-14">
                        <SiDjango size={21} />
                    </div>

                    {/* Small Floating Label */}
                    <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-[#080b12]/80 px-4 py-2 text-xs text-gray-500 backdrop-blur-md sm:block">
                        React · Next.js · Django
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Hint */}
            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-600 md:flex">
                <span className="h-px w-8 bg-white/10" />
                Scroll to explore
                <span className="h-px w-8 bg-white/10" />
            </div>
        </section>
    );
}