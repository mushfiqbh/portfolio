import Button from "@/UI/Button";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ show, setShow }) {
  return (
    show && (
      <div
        id="sidbar"
        className="fixed z-20 inset-0 w-3/4 min-h-screen bg-background shadow-shadow2"
      >
        <div className="p-7">
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
        <nav className="flex flex-col items-start gap-5 p-7">
          <Link href="/" className="nav-link text-body hover:text-primary">
            HOME
          </Link>
          <Link
            href="#experience"
            className="nav-link text-body hover:text-primary"
          >
            EXPERIENCES
          </Link>
          <Link href="#skill" className="nav-link text-body hover:text-primary">
            SKILLS
          </Link>
          <Link
            href="#pricing"
            className="nav-link text-body hover:text-primary"
          >
            PRICING
          </Link>
          <Link
            href="#project"
            className="nav-link text-body hover:text-primary"
          >
            PROJECTS
          </Link>
          <Link href="#blog" className="nav-link text-body hover:text-primary">
            BLOG
          </Link>
        </nav>
      </div>
    )
  );
}
