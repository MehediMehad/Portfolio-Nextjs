"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, ToggleLeftIcon, X } from "lucide-react";
import MobileMenu from "../MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bgNav" style={{ backgroundImage: "var(--bgNav)" }}>
      <div className="max-w-[1480px] mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-[800px]">
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              Blog
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-gray-200">
              Projects
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Contact Me */}
          <div className="text-white flex items-center gap-x-5">
            <ToggleLeftIcon className="text-primary" size={35} />
            <button className="bg-white text-[#5d0855] px-3 py-2 font-bold rounded-md">
              Contact Me
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
