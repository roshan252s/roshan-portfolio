"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-gradient-to-r from-blue-50/80 to-blue-100/80 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-20 py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform cursor-pointer">
            Roshan Shah
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6">
          <Navlinks className="gap-6" />
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl text-gray-800" />
            ) : (
              <FaBars className="text-2xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 rounded-b-2xl shadow-xl w-full absolute left-0 top-full"
          >
            <ul className="flex flex-col items-start gap-4 py-6 px-6">
              <Navlinks
                vertical={true}
                className="flex-col items-start gap-4"
                onClick={() => setIsOpen(false)}
              />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
