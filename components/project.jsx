import Headline from "./sub/headline";
import Image from "next/image";
import { projects } from "@/assets/assets";
import Button from "@/UI/Button";
import Link from "next/link";
import HLine from "@/UI/hline";
import { FaCode } from "react-icons/fa";
import { IoMdBrowsers } from "react-icons/io";

export default function Project() {
  return (
    <div id="project">
      <Headline
        title="Projects"
        subtitle="Here is a sample of projects I've worked on"
      />
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full md:w-3/4 lg:w-3/4 bg-foreground mx-auto my-20 md:flex lg:flex items-center rounded-lg shadow-shadow1"
        >
          <div className="mx-5 lg:mx-0 md:w-2/5 lg:w-2/5 shadow-shadow1">
            <Image
              src={project.image}
              alt="screenshot"
              className="object-cover rounded-lg lg:rounded-tr-none lg:rounded-br-none"
            />
          </div>
          <div className="w-full lg:w-3/5 bg-transparent p-5 md:p-12 rounded-tr-lg rounded-br-lg">
            <p>{project.bio}</p>
            <h1 className="text-4xl text-heading font-bold py-2">
              {project.title}
            </h1>
            <p className="text-body">{project.info}</p>

            <HLine className="my-5 w-full" />

            <div className="flex gap-5">
              <Link href={project.source}>
                <Button
                  type="button"
                  variant="rect"
                  text="small"
                  className="font-normal p-2"
                >
                  <FaCode />
                  View Source
                </Button>
              </Link>
              <Link href={project.live}>
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
    </div>
  );
}
