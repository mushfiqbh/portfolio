"use client";

import { MdMenu, MdLightMode, MdDarkMode } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Button from "../ui/Button";
import Link from "next/link";
import Sidebar from "./sidebar";

export default function Header() {
  const [show, setShow] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      id="header"
      className="w-screen min-h-20 z-20 flex justify-between items-center px-7 md:px-20 py-5 fixed shadow-md bg-transparent backdrop-blur-md"
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
        className="w-full md:hidden text-2xl text-center text-slate-500 py-3"
      >
        .... . .-.. .-.. ---
      </div>

      <nav className="hidden md:flex flex-wrap items-center gap-5 text-sm">
        <Link href="/" className="text-body hover:text-primary">
          HOME
        </Link>
        <Link href="#resume" className="text-body hover:text-primary">
          RESUME
        </Link>
        <Link href="#project" className="text-body hover:text-primary">
          PROJECTS
        </Link>
        <Link href="#skill" className="text-body hover:text-primary">
          SKILLS
        </Link>
        <Link href="#case-studies" className="text-body hover:text-primary">
          CASE STUDIES
        </Link>
        <Link href="#contribution" className="text-body hover:text-primary">
          CONTRIBUTIONS
        </Link>
        <Link href="#achievement" className="text-body hover:text-primary">
          ACHIEVEMENTS
        </Link>
        <Link href="#services" className="text-body hover:text-primary">
          SERVICES
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
