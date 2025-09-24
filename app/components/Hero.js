import React from "react";
import Image from "next/image";
import Button from "./Button";
import AnimatedTyping from "./AnimatedTyping";

const Hero = () => {
  return (
    <section className="h-full flex flex-col-reverse lg:h-2/3 lg:flex-row items-center justify-between px-6 lg:px-20 py-16 ">
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-xl space-y-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
          Hi, I’m <span className="text-blue-600">Roshan</span>
        </h1>
        <h2 className="text-lg lg:text-xl text-gray-600">
          <AnimatedTyping />
        </h2>
        <div className="flex justify-center lg:justify-start">
          <Button />
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <Image
          src="/profile.jpeg"
          priority={true}
          alt="Profile Picture"
          width={350}
          height={350}
          className="rounded-full shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
