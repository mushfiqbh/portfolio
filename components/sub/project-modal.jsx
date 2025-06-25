"use client";

import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import HLine from "../ui/separator";

export default function ProjectModal({ ref, project, onClose }) {
  const badgeColors = [
    "bg-teal-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
  ];
  return (
    <AnimatePresence>
      <motion.div
        className={
          "fixed inset-0 z-50 overflow-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={ref}
          className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-xl max-w-2xl w-full"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          {/* Hero Image + Close */}
          <div className="relative h-20 lg:h-60 w-full">
            <Image
              fill
              src={project.image}
              alt={project.title}
              className="object-cover rounded-2xl"
              priority
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-white/80 dark:bg-black/60 hover:bg-white text-black dark:text-white rounded-full p-1.5 backdrop-blur"
              aria-label="Close modal"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.tech.split(" + ").map((item, index) => (
                <span
                  key={index}
                  className={`text-sm px-3 py-1 rounded-full text-slate-700 ${
                    badgeColors[index % badgeColors.length]
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <HLine />
            <p className="text-base text-gray-700 dark:text-gray-300">
              {project.info}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FaExternalLinkAlt size={16} /> Live Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <FaGithub size={16} /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
