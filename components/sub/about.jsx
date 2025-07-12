"use client";

import Button from "../ui/Button";
import Typewriter from "../ui/typewritter";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import {
  FaCopy,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutInfo() {
  const contactRef = useRef(null);
  const [position, setPosition] = useState("translate-y-72");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopied) return;
    setIsCopied(true);
    navigator.clipboard.writeText("mushfiqbh@gmail.com");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setPosition("translate-y-72");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="w-full xl:w-1/2 p-7 xl:p-20 bg-background text-body">
      <h1 className="text-4xl xl:text-6xl font-bold">
        Hi, I'm <span className="text-primary">Mushfiq</span>
      </h1>
      <Typewriter />
      <p className="my-2">
        Currently Pursuing B.Sc. in Computer Science and Engineering at Leading
        University (3rd Year).
      </p>
      <div className="flex items-center">
        <CiLocationOn className="text-xl text-primary" />
        <p>&nbsp;Sylhet, Bangladesh (Remote)</p>
      </div>
      <div className="flex items-center">
        <CiMail className="text-xl text-primary" />
        <p>&nbsp;mushfiqbh@gmail.com</p>

        {isCopied && <span className="text-primary ml-2">Copied!</span>}
        <FaCopy
          onClick={handleCopy}
          className="hover:text-primary mx-2 cursor-pointer"
        />
      </div>

      <br />

      <div className="flex flex-wrap items-center gap-5">
        <Button
          type="link"
          href="https://drive.google.com/file/d/1M1eJqhq3fB6rHHFPuF_HcuzN-U4ztqwg/view?usp=sharing"
          target="_blank"
          variant="rect"
          text="large"
        >
          <PiReadCvLogoFill />
          <p className="text-sm">CV</p>
        </Button>

        <Button
          variant="rect"
          text="large"
          onClick={() =>
            setPosition(
              position === "translate-y-0" ? "translate-y-72" : "translate-y-0"
            )
          }
        >
          <MdOutlineConnectWithoutContact />
          <p className="text-sm">Contact Me</p>
        </Button>

        <div
          ref={contactRef}
          className={`w-full md:w-fit min-h-20 fixed z-30 left-0 bottom-0 transform ${position} transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row md:ml-20 bg-gradient-box border-t-2 border-primary rounded-lg shadow-lg">
            <Link
              href="https://wa.me/8801737542444"
              target="_blank"
              variant="rect"
              text="large"
              className="flex items-center gap-3 px-5 py-3 hover:text-primary"
            >
              <FaWhatsapp />
              <p>Whatsapp</p>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mushfiqbh/"
              target="_blank"
              variant="rect"
              text="large"
              className="flex items-center gap-3 px-5 py-3 hover:text-primary"
            >
              <FaLinkedinIn />
              <p>LinkedIn</p>
            </Link>
            <Link
              href="https://www.github.com/mushfiqbh"
              target="_blank"
              variant="rect"
              text="large"
              className="flex items-center gap-3 px-5 py-3 hover:text-primary"
            >
              <FaGithub />
              <p>Github</p>
            </Link>
            <Link
              href="mailto:mushfiqbh@gmail.com"
              target="_blank"
              variant="rect"
              text="large"
              className="flex items-center gap-3 px-5 py-3 hover:text-primary"
            >
              <MdEmail />
              <p>Email</p>
            </Link>
            <Link
              href="https://www.x.com/mushfiqbh"
              target="_blank"
              variant="rect"
              text="large"
              className="flex items-center gap-3 px-5 py-3 hover:text-primary"
            >
              <FaXTwitter />
              <p>Twitter</p>
            </Link>
            <Link
              href="https://www.facebook.com/mushfiqbh"
              target="_blank"
              variant="rect"
              text="large"
              className="flex items-center gap-3 px-5 py-3 hover:text-primary"
            >
              <FaFacebookF />
              <p>Facebook</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
