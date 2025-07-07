"use client";

import React, { useRef, useState, useEffect } from "react";
import { projects } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import Headline from "./sub/headline";
import ProjectModal from "./sub/project-modal";

export default function Page() {
  const ref = useRef();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelectedProject(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const badgeColors = [
    "bg-teal-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="project" className="px-4 sm:px-6 lg:px-0">
      <Headline title="My Projects" subtitle="Real world unique projects" />

      <motion.div 
        className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-box rounded-lg shadow-shadow1 overflow-hidden cursor-pointer group"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover"
                  fill
                />
              </motion.div>
            </div>
            <div className="p-4">
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.tech.split(" + ").map((item, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className={`text-xs p-1 rounded-full text-slate-700 ${
                      badgeColors[techIndex % badgeColors.length]
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.1 + index * 0.1 + techIndex * 0.05, 
                      duration: 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold mb-2 text-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-body line-clamp-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.info}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          ref={ref}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
