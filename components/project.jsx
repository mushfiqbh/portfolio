import Headline from "./sub/headline";
import Image from "next/image";
import { projects } from "@/assets/assets";
import Button from "./ui/Button";
import Link from "next/link";
import HLine from "./ui/separator";
import { FaCode } from "react-icons/fa";
import { IoMdBrowsers } from "react-icons/io";

export default function Project() {
  const colors = [
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
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full md:w-3/4 lg:w-3/4 bg-gradient-box mx-auto my-20 md:flex items-stretch rounded-lg shadow-shadow1"
        >
          <div className="md:w-2/5 lg:w-2/5 shadow-shadow1 overflow-hidden group">
            <Image
              src={project.image}
              alt="screenshot"
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

            <HLine className="my-5 w-full" />

            <div className="flex gap-5">
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
            </div>
          </div>
        </div>
      ))}

      <Button
        type="link"
        href="/projects"
        variant="rect"
        text="small"
        className="w-fit mx-auto text-primary"
      >
        Explore All Projects *
      </Button>
    </div>
  );
}
