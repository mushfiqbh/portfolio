import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer" className="w-full md:w-3/4 mx-auto mt-20 px-5 md:px-0 md:flex items-center justify-between">
      <div className="flex gap-5 flex-wrap justify-center">
        <Link
          href="https://www.linkedin.com/in/mushfiqbh/"
          target="_blank"
          className="hover:text-primary"
        >
          Linkedin
        </Link>
        <Link
          href="https://wa.me/8801737542444"
          target="_blank"
          className="hover:text-primary"
        >
          Whatsapp
        </Link>
        <Link href="mailto:mushfiqbh@gmail.com" target="">
          Email
        </Link>
        <Link
          href="https://www.x.com/mushfiqbh"
          target="_blank"
          className="hover:text-primary"
        >
          Twitter
        </Link>
        <Link
          href="https://www.facebook.com/mushfiqbh"
          target="_blank"
          className="hover:text-primary"
        >
          Facebook
        </Link>
        <Link
          href="https://www.github.com/mushfiqbh"
          target="_blank"
          className="hover:text-primary"
        >
          Github
        </Link>
      </div>

      <div className="my-10 text-primary text-center">
        All Rights Reserved &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}
