"use client";
import React from "react";

const Navlinks = ({ className = "", vertical = false, onClick }) => {
  return (
    <div className={`flex ${vertical ? "flex-col" : "flex-row"} ${className}`}>
      <button
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
          onClick && onClick();
        }}
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
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
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
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
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
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
        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
      >
        Contact
      </button>
    </div>
  );
};

export default Navlinks;
