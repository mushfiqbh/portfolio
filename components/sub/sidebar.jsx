import Button from "@/UI/Button";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ sidebarRef, show, setShow }) {
  return (
    show && (
      <div
        id="sidebar"
        ref={sidebarRef}
        className="fixed z-20 inset-0 w-3/5 md:w-1/6 min-h-screen bg-background shadow-shadow2"
      >
        <div className="p-7 md:pl-20">
          <Button
            type="button"
            variant="round"
            text="large"
            className="-translate-y-2"
            onClick={() => setShow(false)}
          >
            <IoMdClose />
          </Button>
        </div>
        <nav className="flex flex-col items-start gap-5 p-10 md:pl-20">
          <Link href="/" className="nav-link text-body hover:text-primary">
            HOME
          </Link>
          <Link
            href="#resume"
            className="nav-link text-body hover:text-primary"
          >
            RESUME
          </Link>
          <Link href="#skill" className="nav-link text-body hover:text-primary">
            SKILLS
          </Link>
          <Link
            href="#project"
            className="nav-link text-body hover:text-primary"
          >
            PROJECTS
          </Link>
          <Link
            href="#pricing"
            className="nav-link text-body hover:text-primary"
          >
            PRICING
          </Link>
          <Link
            href="#testimonial"
            className="nav-link text-body hover:text-primary"
          >
            TESTIMONIAL
          </Link>
          <Link href="#blog" className="nav-link text-body hover:text-primary">
            BLOG
          </Link>
          <Link
            href="#contact"
            className="nav-link text-body hover:text-primary"
          >
            CONTACT ME (Anonymously)
          </Link>
        </nav>
      </div>
    )
  );
}
