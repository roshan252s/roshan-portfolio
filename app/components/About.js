import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f9fafb] to-[#efefef] py-16 flex flex-col items-center gap-12">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="w-5/6 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col lg:flex-row gap-6 items-center bg-white rounded-2xl p-6 shadow-lg">
          <Image
            src="/profile.jpeg"
            priority={true}
            width={140}
            height={140}
            alt="Profile"
            className="rounded-full border-4 border-blue-600 shadow-lg"
          />
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900">Software Developer</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              I am a full-stack web developer specializing in JavaScript, React,
              and Node.js, with a strong foundation in UI/UX design. I enjoy
              building scalable and user-friendly web applications and
              continuously learning new technologies to create impactful digital
              experiences.
            </p>
            <a
              href="https://linkedin.com/in/roshan252s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
            >
              Connect on LinkedIn <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">Technical Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-lg">
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <FaHtml5 className="text-orange-600 text-2xl" /> HTML
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <FaCss3Alt className="text-blue-600 text-2xl" /> CSS
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <FaJs className="text-yellow-500 text-2xl" /> JavaScript
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <FaNodeJs className="text-green-600 text-2xl" /> Node.js
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <FaReact className="text-blue-500 text-2xl" /> Next.js
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
