"use client";

import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import HLine from "../ui/separator";

export default function ProjectModal({ ref, project, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto overscroll-contain scrollbar-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="min-h-full w-full md:w-1/2 flex items-start justify-center p-4 py-8">
          <motion.div
            ref={ref}
            className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable Container for entire modal content */}
            <div className="overflow-y-auto max-h-[95vh] scrollbar-hidden">
              {/* Header with Close Button */}
              <div className="relative w-full p-6 pb-0">
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-black dark:text-white rounded-full p-2 backdrop-blur transition-all duration-200 hover:scale-110 shadow-lg"
                  aria-label="Close modal"
                >
                  <IoMdClose size={22} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 pt-4 space-y-4">
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

                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.info}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                  >
                    <FaExternalLinkAlt size={16} /> Live Demo
                  </a>

                  {project.source == "private" ? (
                    <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed">
                      <FaGithub size={16} /> Private Source
                    </span>
                  ) : (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                    >
                      <FaGithub size={16} /> Source Code
                    </a>
                  )}
                </div>

                {/* Screenshots Section */}
                {project.images && project.images.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Screenshots
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {project.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="object-contain w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
                            width={1200}
                            height={800}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
