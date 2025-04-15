import Link from "next/link";
import Button from "../ui/Button";
import Typewriter from "../ui/typewritter";
import { PiReadCvLogoFill } from "react-icons/pi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";

export default function AboutInfo() {
  return (
    <div className="w-full xl:w-1/2 p-7 xl:p-20 bg-background text-body">
      <h1 className="text-4xl xl:text-6xl font-bold">
        Hi, I'm <span className="text-primary">Mushfiq</span>
      </h1>
      <Typewriter />
      <p className="my-2">
        Currently Studying in Computer Science and Engineering at Leading
        University.
      </p>
      <div className="flex items-center">
        <CiLocationOn className="text-xl text-primary" />
        <p>&nbsp;Sylhet, Bangladesh (Remote)</p>
      </div>
      <div className="flex items-center">
        <CiMail className="text-xl text-primary" />
        <p>&nbsp;mushfiqbh@gmail.com</p>
      </div>

      <br />
      <div className="flex flex-wrap items-center gap-5">
        <Button
          type="link"
          href="https://drive.google.com/file/d/1sbuJNF8WrMMxwckzF9y19S-QH_AiJefR/view?usp=sharing"
          target="_blank"
          variant="rect"
          text="large"
        >
          <PiReadCvLogoFill />
          <p className="text-sm">CV</p>
        </Button>

        <Button
          type="link"
          href="https://www.linkedin.com/in/mushfiqbh/"
          target="_blank"
          variant="rect"
          text="large"
          className="group"
        >
          <FaLinkedinIn />
          <p className="text-sm hidden group-hover:inline">LinkedIn</p>
        </Button>

        <Button
          type="link"
          href="https://wa.me/8801737542444"
          target="_blank"
          variant="rect"
          text="large"
          className="group"
        >
          <FaWhatsapp />
          <p className="text-sm hidden group-hover:inline">Whatsapp</p>
        </Button>

        <Button
          type="link"
          href="mailto:mushfiqbh@gmail.com"
          target=""
          variant="rect"
          text="large"
          className="group"
        >
          <MdEmail />
          <p className="text-sm hidden group-hover:inline">Email</p>
        </Button>

        <Button
          type="link"
          href="https://www.x.com/mushfiqbh"
          target="_blank"
          variant="rect"
          text="large"
          className="group"
        >
          <FaXTwitter />
          <p className="text-sm hidden group-hover:inline">Twitter</p>
        </Button>

        <Button
          type="link"
          href="https://www.facebook.com/mushfiqbh"
          target="_blank"
          variant="rect"
          text="large"
          className="group"
        >
          <FaFacebookF />
          <p className="text-sm hidden group-hover:inline">Facebook</p>
        </Button>

        <Button
          type="link"
          href="https://www.github.com/mushfiqbh"
          target="_blank"
          variant="rect"
          text="large"
          className="group"
        >
          <FaGithub />
          <p className="text-sm hidden group-hover:inline">Github</p>
        </Button>
      </div>
    </div>
  );
}
