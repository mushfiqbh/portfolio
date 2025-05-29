"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { projects } from '@/assets/assets';
import { FaCode } from "react-icons/fa";
import { IoMdBrowsers, IoMdClose } from "react-icons/io";
import { TbBrandFigma } from "react-icons/tb";
import { MdArchitecture } from "react-icons/md";

const ProjectModal = ({ project, onClose }) => {
  const colors = [
    "bg-teal-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-box rounded-lg shadow-shadow1 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-box p-4 flex justify-end">
          <button onClick={onClose} className="text-2xl hover:text-primary">
            <IoMdClose />
          </button>
        </div>
        <div className="p-6">
          <div className="w-full h-[300px] relative mb-6 overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
              fill
            />
          </div>
          
          <div className="flex items-center gap-3 flex-wrap mb-4">
            {project.bio.split(" + ").map((item, index) => (
              <p
                key={index}
                className={`text-sm text-slate-500 rounded-2xl p-1 ${
                  colors[index % colors.length]
                }`}
              >
                {item}
              </p>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-4 text-heading">{project.title}</h2>
          <p className="text-body mb-6">{project.info}</p>

          <div className="flex flex-wrap gap-4">
            <Link href={project.source} target="_blank">
              <Button type="button" variant="rect" text="small" className="font-normal p-2">
                <FaCode />
                Source Code
              </Button>
            </Link>
            <Link href={project.live} target="_blank">
              <Button type="button" variant="rect" text="small" className="font-normal p-2">
                <IoMdBrowsers />
                Live Preview
              </Button>
            </Link>
            <Button type="button" variant="rect" text="small" className="font-normal p-2">
              <MdArchitecture />
              System Design
            </Button>
            <Button type="button" variant="rect" text="small" className="font-normal p-2">
              <TbBrandFigma />
              Figma Design
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='min-h-screen pt-24 px-5'>
      <div className="text-center mb-16">
        <p className="text-lg text-primary uppercase">My Latest Works</p>
        <h2 className="text-5xl md:text-6xl font-bold text-body">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-box rounded-lg shadow-shadow1 overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-heading">{project.title}</h3>
              <p className="text-body line-clamp-2">{project.info}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Page;