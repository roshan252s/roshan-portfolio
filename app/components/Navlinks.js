"use client";
import React from "react";

const Navlinks = ({ className = "", vertical = false, onClick, showResume = true }) => {
  return (
    <div className={`flex ${vertical ? "flex-col" : "flex-row"} ${className}`}>
      <button
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
          onClick && onClick();
        }}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:underline hover:scale-105"
      >
        Home
      </button>

      <button
        onClick={() => {
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" });
          onClick && onClick();
        }}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:underline hover:scale-105"
      >
        About
      </button>

      <button
        onClick={() => {
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" });
          onClick && onClick();
        }}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:underline hover:scale-105"
      >
        Projects
      </button>

      <button
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
          onClick && onClick();
        }}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:underline hover:scale-105"
      >
        Contact
      </button>

      {showResume && (

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-400  rounded-lg hover:bg-blue-700 hover:text-white transition text-black"
          >
            Resume
          </a>
        )}
    </div>
  );
};

export default Navlinks;
