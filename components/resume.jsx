"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2025 — Present",
    role: "Senior Full-stack Engineer",
    company: "MS3 Technology BD",
    summary:
      "Building multi-tenant platforms, internal tooling, and scalable backend systems.",
    stack: ["Laravel", "NextJS", "PostgreSQL", "MySQL", "Redis"],
  },
];

const education = [
  {
    year: "2023 — Present",
    role: "BSc in CSE",
    company: "Leading University",
    summary:
      "Focused on system design, distributed systems, algorithms, and software architecture.",
    stack: ["System Design", "DSA", "Distributed Systems"],
  },
];

export default function HeroExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md space-y-8"
    >
      {/* heading */}
      <div className="space-y-2">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500">
          Experience
        </p>

        <div className="h-px w-full bg-zinc-800" />
      </div>

      {/* timeline */}
      <div className="space-y-8">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group space-y-3"
          >
            {/* top row */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-white">
                  {item.role}
                </h3>

                <p className="text-sm text-zinc-400">{item.company}</p>
              </div>

              <span className="text-xs text-zinc-500 whitespace-nowrap">
                {item.year}
              </span>
            </div>

            {/* description */}
            <p className="text-sm leading-6 text-zinc-500">{item.summary}</p>

            {/* stack */}
            <div className="flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-zinc-400 border border-zinc-800 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* heading */}
      <div className="space-y-2">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500">
          Education
        </p>

        <div className="h-px w-full bg-zinc-800" />
      </div>

      {/* timeline */}
      <div className="space-y-8">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group space-y-3"
          >
            {/* top row */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-white">
                  {item.role}
                </h3>

                <p className="text-sm text-zinc-400">{item.company}</p>
              </div>

              <span className="text-xs text-zinc-500 whitespace-nowrap">
                {item.year}
              </span>
            </div>

            {/* description */}
            <p className="text-sm leading-6 text-zinc-500">{item.summary}</p>

            {/* stack */}
            <div className="flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-zinc-400 border border-zinc-800 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
