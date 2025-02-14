"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo.png";
import { Link } from "react-scroll";

// React icons
import { RiMenu3Line } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Me",
      path: "#about",
    },
    {
      name: "Experience",
      path: "#exp",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Projects",
      path: "#projects",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center border-b px-6 py-1 md:px-10 md:py-2">
        <div>
          <Image src={logo} width={50} height={50} />
        </div>
        {/* Nav */}
        <div>
          <nav className="md:flex gap-6 hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                smooth={true}
                duration={400}
                className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl cursor-pointer"
          >
            {menuOpen ? <RiMenu4Fill /> : <RiMenu3Line />}
          </div>
        </div>
      </div>
      <aside
        className={`${
          menuOpen ? "translate-x-0" : " translate-x-[1000px]"
        } md:hidden absolute  flex flex-col gap-3 text-center bg-cyan-50 p-6 w-full md:w-[300px] top-[59px] md:top-[67px] transition-all duration-500`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            smooth={true}
            duration={400}
            className="hover:text-cyan-800 cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default Navbar;
