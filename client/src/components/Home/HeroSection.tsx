"use client";
import darkModeImg from "@/assets/top_bg_dark.svg";
import myImage from "@/assets/mehed.png";
import js from "@/assets/js.png";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 max-h-[80%]"
      style={{ backgroundImage: `url(${darkModeImg.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="max-w-[1480px] mx-auto px-4 lg:px-10  h-full flex items-center">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="text-white z-10">
            <div className="-mt-10 mb-10 md:mt-20 text-center md:text-start">
              <p className="text-2xl md:text-4xl font-bold text-gray-200 md:mb-2">
                Hi! I am Mehedi{" "}
              </p>
              <div className="text-2xl md:text-4xl font-bold text-gray-200">
                <TypeAnimation
                  className=""
                  sequence={[
                    "Frontend Developer",
                    1000,
                    "Mern Stack Developer",
                    1000,
                    "React Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="text-xl md:text-3xl font-bold text-gray-400 md:mt-4 mb-4">
                with a one years plus experience
              </p>
              <Link
                href="/resume.pdf"
                download="mehedi.pdf"
                target="_blank"
                title="See My Resume"
                className=" px-4 py-2 text-lg font-bold cursor-pointer text-white bg-[#9a2380] rounded-xl z-50"
              >
                My Resume
              </Link>
            </div>
          </div>
          <div className="z-10 justify-end">
            <div className="rounded-md flex justify-center">
              <Image
                src={myImage}
                alt="My Image"
                width={400}
                height={300}
                className=" shadow-lg rounded-md border-[6px] border-[#5D0855]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Skills Logos */}
      <div className="absolute bottom-0 left-0 w-1/2 py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          {/* Example Logo */}
          <div className="w-12 h-12 relative right-10 z-20 mx-2">
            <Image
              src={js}
              alt="JavaScript"
              width={48}
              height={48}
              className="animate-bounce"
            />
          </div>
          {/* Add more logos similarly */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
