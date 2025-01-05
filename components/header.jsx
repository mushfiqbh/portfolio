"use client";

import { MdMenu, MdLightMode, MdDarkMode } from "react-icons/md";
import Button from "@/UI/Button";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import "../styles/navlink.css";
import { useTheme } from "@/context/ThemeContext";
import Sidebar from "./sub/sidebar";

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

      <div className="md:hidden text-sm text-slate-500">Peace Be Upon You</div>

      <nav className="hidden md:flex flex-wrap items-center gap-5 text-sm">
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
        <Link href="#pricing" className="nav-link text-body hover:text-primary">
          PRICING
        </Link>
        <Link href="#project" className="nav-link text-body hover:text-primary">
          PROJECTS
        </Link>
        <Link href="#blog" className="nav-link text-body hover:text-primary">
          BLOG
        </Link>
      </nav>

      {/* Theme Toggle */}
      <div>
        <Button type="button" text="large" onClick={toggleTheme} variant="rect">
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </Button>
      </div>
    </div>
  );
}
