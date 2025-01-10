"use client";

import { MdMenu, MdLightMode, MdDarkMode } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/UI/Button";
import Link from "next/link";
import Sidebar from "./sidebar";

export default function Header() {
  const [show, setShow] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const sidebarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      id="header"
      className="w-full min-h-20 z-10 flex justify-between items-center px-7 md:px-20 py-5 fixed shadow-md bg-transparent backdrop-blur-md"
    >
      <div>
        <Button
          type="button"
          variant="round"
          text="large"
          onClick={() => setShow(true)}
        >
          <MdMenu />
        </Button>
        <Sidebar sidebarRef={sidebarRef} show={show} setShow={setShow} />
      </div>

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full md:hidden text-sm text-center text-slate-500 py-3"
      >
        Peace Be Upon You
      </div>

      <nav className="hidden md:flex flex-wrap items-center gap-5 text-sm">
        <Link href="/" className="nav-link text-body hover:text-primary">
          HOME
        </Link>
        <Link href="#resume" className="nav-link text-body hover:text-primary">
          RESUME
        </Link>
        <Link href="#skill" className="nav-link text-body hover:text-primary">
          SKILLS
        </Link>
        <Link href="#project" className="nav-link text-body hover:text-primary">
          PROJECTS
        </Link>
        <Link href="#pricing" className="nav-link text-body hover:text-primary">
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
        <Link href="#contact" className="nav-link text-body hover:text-primary">
          CONTACT
        </Link>
      </nav>

      <div>
        <Button type="button" text="large" onClick={toggleTheme} variant="rect">
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </Button>
      </div>
    </div>
  );
}
