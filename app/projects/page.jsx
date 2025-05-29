import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { projects } from '@/assets/assets';
import { FaCode } from "react-icons/fa";
import { IoMdBrowsers } from "react-icons/io";
import { TbBrandFigma } from "react-icons/tb";
import { MdArchitecture } from "react-icons/md";

const Page = () => {
  const colors = [
    "bg-teal-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
  ];

  return (
    <div className='min-h-screen pt-24 px-5'>
      <div className="text-center mb-16">
        <p className="text-lg text-primary uppercase">My Latest Works</p>
        <h2 className="text-5xl md:text-6xl font-bold text-body">Featured Projects</h2>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full md:w-3/4 lg:w-3/4 bg-gradient-box mx-auto my-20 md:flex items-stretch rounded-lg shadow-shadow1"
        >
          <div className="md:w-2/5 lg:w-2/5 shadow-shadow1 overflow-hidden group">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg lg:rounded-tr-none lg:rounded-br-none transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="w-full md:w-3/5 lg:w-3/5 bg-transparent p-5 md:p-12 rounded-tr-lg rounded-br-lg">
            <div className="flex items-center gap-3 flex-wrap">
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

            <h1 className="text-4xl text-heading font-bold py-2">
              {project.title}
            </h1>
            <p className="text-body">{project.info}</p>

            <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800 my-5" />

            <div className="flex flex-wrap gap-5">
              <Link href={project.source} target="_blank">
                <Button
                  type="button"
                  variant="rect"
                  text="small"
                  className="font-normal p-2"
                >
                  <FaCode />
                  Source Code
                </Button>
              </Link>
              <Link href={project.live} target="_blank">
                <Button
                  type="button"
                  variant="rect"
                  text="small"
                  className="font-normal p-2"
                >
                  <IoMdBrowsers />
                  Live Preview
                </Button>
              </Link>
              <Button
                type="button"
                variant="rect"
                text="small"
                className="font-normal p-2"
              >
                <MdArchitecture />
                System Design
              </Button>
              <Button
                type="button"
                variant="rect"
                text="small"
                className="font-normal p-2"
              >
                <TbBrandFigma />
                Figma Design
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;