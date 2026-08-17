"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiExternalLink,
  FiCalendar,
  FiArrowDownRight,
} from "react-icons/fi";

const certificates = [
  {
    number: "01",
    title: "Python Training",
    issuer: "EduResearch Pvt. Ltd. / IIMT University",
    type: "Certificate of Completion",
    date: "2024",
    image: "/certificates/python.png",
  },
  {
    number: "02",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    type: "Certificate of Completion",
    date: "April 24, 2025",
    image: "/certificates/deloitte.png",
  },
  {
    number: "03",
    title: "Industrial Visit",
    issuer: "UniConverge Technologies Pvt. Ltd.",
    type: "Certificate of Participation",
    date: "November 20, 2025",
    image: "/certificates/unicoverage.png",
  },
  {
    number: "04",
    title: "Techathon",
    issuer: "IIMT University — Coding Club",
    type: "Certificate of Participation",
    date: "April 18, 2025",
    image: "/certificates/techathon.png",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-[-120px] top-1/4 h-96 w-96 rounded-full bg-amber-300/[0.035] blur-[140px]" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
                Milestones
              </p>

              <h2 className="font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Certificates<span className="text-amber-300">.</span>
              </h2>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 text-amber-300 sm:flex">
              <FiAward size={22} />
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-amber-300/40 via-white/10 to-transparent" />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A collection of certifications, simulations and participation
            experiences from my learning journey.
          </p>
        </motion.div>

        {/* Certificate Showcase */}
        <div className="space-y-8">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -35 : 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              className="group relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b12] lg:grid-cols-[0.9fr_1.1fr]"
            >
              {/* Number / Side */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                
                <div>
                  <span className="font-syne text-6xl font-bold tracking-tighter text-white/[0.06] transition duration-500 group-hover:text-amber-300/[0.10] sm:text-7xl">
                    {certificate.number}
                  </span>

                  <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.05] text-amber-300">
                    <FiAward size={20} />
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    {certificate.type}
                  </p>

                  <h3 className="mt-2 max-w-sm font-syne text-2xl font-bold text-white sm:text-3xl">
                    {certificate.title}
                  </h3>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-300 transition-all duration-700 group-hover:w-full" />
              </div>

              {/* Right Content */}
              <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center">
                
                {/* Certificate Details */}
                <div className="order-2 md:order-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
                    Issued By
                  </p>

                  <p className="mt-2 text-base font-medium leading-6 text-gray-200">
                    {certificate.issuer}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                    <FiCalendar className="text-amber-300" />
                    {certificate.date}
                  </div>

                  <button
                    type="button"
                    className="mt-7 flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
                  >
                    View Certificate
                    <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                  </button>
                </div>

                {/* Certificate Preview */}
                <div className="order-1 overflow-hidden rounded-xl border border-white/10 bg-[#0d1018] md:order-2 md:w-[260px]">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}