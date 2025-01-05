import Link from "next/link";
import Button from "@/UI/Button";
import Typewriter from "@/UI/typewritter";
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
        <Link
          href="https://docs.google.com/document/d/19NqgWazcT8EiqszOte10V6Lt03qoqtj9mkR0FWDZ16w/"
          target="_blank"
        >
          <Button type="button" variant="rect" text="small">
            <PiReadCvLogoFill />
            CV
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/mushfiqbh/" target="_blank">
          <Button type="button" variant="rect" text="large">
            <FaLinkedinIn />
          </Button>
        </Link>
        <Link href="https://wa.me/8801737542444" target="_blank">
          <Button type="button" variant="rect" text="large">
            <FaWhatsapp />
          </Button>
        </Link>
        <Link href="mailto:mushfiqbh@gmail.com" target="">
          <Button type="button" variant="rect" className="text-xl">
            <MdEmail />
          </Button>
        </Link>
        <Link href="https://www.x.com/mushfiqbh" target="_blank">
          <Button type="button" variant="rect" className="text-xl">
            <FaXTwitter />
          </Button>
        </Link>
        <Link href="https://www.facebook.com/mushfiqbh" target="_blank">
          <Button type="button" variant="rect" className="text-xl">
            <FaFacebookF />
          </Button>
        </Link>
        <Link href="https://www.github.com/mushfiqbh" target="_blank">
          <Button type="button" variant="rect" className="text-xl">
            <FaGithub />
          </Button>
        </Link>
      </div>
    </div>
  );
}
