
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-12 z-10">
        <div className="text-white flex justify-between items-center h-full px-4 md:px-8">
          <Link href="/">
            <h1 className="text-2xl cursor-pointer font-semibold bg-gray-800 bg-opacity-60 text-white p-2 rounded-lg drop-shadow-md hover:bg-gray-700 transition-colors duration-300">
              Jiya.
            </h1>
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 mr-10 cursor-pointer font-semibold">
            <li>
              <Link href="/about" className="hover:text-blue-800">
                About
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-blue-800">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-blue-800">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-800">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-full max-w-md h-auto bg-white/20 backdrop-blur-md text-dark-blue-800 flex flex-col items-center p-4 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 z-20`}
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ul className="flex flex-col items-center gap-4 text-center">
              <li>
                <Link
                  href="/about"
                  className="text-blue-950 text-lg font-semibold hover:text-pink-600"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-blue-950 text-lg font-semibold hover:text-pink-600"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-blue-950 text-lg font-semibold hover:text-pink-600"
                  onClick={toggleMenu}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-950 text-lg font-semibold hover:text-pink-600"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;