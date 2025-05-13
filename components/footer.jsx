import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer" className="mt-20">
      <div className="w-full md:w-3/4 min-h-64 text-center px-5 mx-auto md:flex flex-wrap justify-evenly">
        <div className="w-full md:w-1/5 pb-5 flex flex-wrap md:flex-col gap-3 justify-center md:justify-start">
          <h2 className="w-full text-xl text-primary">CONTACT ME</h2>
          <Link
            href="https://www.linkedin.com/in/mushfiqbh/"
            target="_blank"
            className="hover:underline"
          >
            Linkedin
          </Link>
          <Link
            href="https://wa.me/8801737542444"
            target="_blank"
            className="hover:underline"
          >
            Whatsapp
          </Link>
          <Link href="mailto:mushfiqbh@gmail.com" target="">
            Email
          </Link>
          <Link
            href="https://www.x.com/mushfiqbh"
            target="_blank"
            className="hover:underline"
          >
            Twitter
          </Link>
          <Link
            href="https://www.facebook.com/mushfiqbh"
            target="_blank"
            className="hover:underline"
          >
            Facebook
          </Link>
          <Link
            href="https://www.github.com/mushfiqbh"
            target="_blank"
            className="hover:underline"
          >
            Github
          </Link>
        </div>
        <div className="w-full md:w-1/5 pb-5 flex flex-wrap md:flex-col gap-3 justify-center md:justify-start">
          <h2 className="w-full text-xl text-primary">RESOURCES</h2>
          <Link href="" className="hover:underline">
            Authentication
          </Link>
          <Link href="" className="hover:underline">
            System Status
          </Link>
          <Link href="" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="" className="hover:underline">
            Pricing
          </Link>
          <Link href="" className="hover:underline">
            Over Right
          </Link>
        </div>
        <div className="w-full md:w-1/5 flex flex-wrap md:flex-col gap-3 justify-center md:justify-start">
          <h2 className="w-full text-xl text-primary">DEVELOPERS</h2>
          <Link href="" className="hover:underline">
            Documentation
          </Link>
          <Link href="" className="hover:underline">
            Authentication
          </Link>
          <Link href="" className="hover:underline">
            API Reference
          </Link>
          <Link href="" className="hover:underline">
            Support
          </Link>
          <Link href="" className="hover:underline">
            Open Source
          </Link>
        </div>
      </div>
      <div className="w-full my-10 text-center text-primary">
        All Rights Reserved &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}
