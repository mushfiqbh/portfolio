import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div
      id="footer"
      className="w-full md:w-3/4 mx-auto mt-20 px-5 md:px-0 md:flex items-center justify-between"
    >
      <div className="flex gap-5 flex-wrap justify-center">
        <Link
          href="https://www.linkedin.com/in/mushfiqbh/"
          target="_blank"
          className="flex items-center gap-1 hover:text-primary"
        >
          <FaLinkedinIn />
          Linkedin
        </Link>
        <Link
          href="https://wa.me/8801737542444"
          target="_blank"
          className="flex items-center gap-1 hover:text-primary"
        >
          <FaWhatsapp />
          Whatsapp
        </Link>
        <Link
          href="mailto:mushfiqbh@gmail.com"
          target=""
          className="flex items-center gap-1 hover:text-primary"
        >
          <MdEmail />
          Email
        </Link>
        <Link
          href="https://www.x.com/mushfiqbh"
          target="_blank"
          className="flex items-center gap-1 hover:text-primary"
        >
          <FaXTwitter />
          Twitter
        </Link>
        <Link
          href="https://www.facebook.com/mushfiqbh"
          target="_blank"
          className="flex items-center gap-1 hover:text-primary"
        >
          <FaFacebookF />
          Facebook
        </Link>
        <Link
          href="https://www.github.com/mushfiqbh"
          target="_blank"
          className="flex items-center gap-1 hover:text-primary"
        >
          <FaGithub />
          Github
        </Link>
      </div>

      <div className="my-10 text-primary text-center">
        All Rights Reserved &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}
