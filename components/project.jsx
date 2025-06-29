"use client";

import React, { useRef, useState, useEffect } from "react";
import { projects } from "@/assets/assets";
import Image from "next/image";
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

  return (
    <div id="project">
      <Headline title="My Projects" subtitle="Real world unique projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-box rounded-lg shadow-shadow1 overflow-hidden cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 transform transition-transform group-hover:scale-105">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.split(" + ").map((item, index) => (
                  <span
                    key={index}
                    className={`text-xs p-1 rounded-full text-slate-700 ${
                      badgeColors[index % badgeColors.length]
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-heading">
                {project.title}
              </h3>
              <p className="text-body line-clamp-2">{project.info}</p>
            </div>
          </div>
        ))}
      </div>

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
