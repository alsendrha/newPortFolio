"use client";

import { projectData } from "@/utils/data/listData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Section05 = () => {
  return (
    <div className="w-full bg-[#222] flex flex-wrap">
      {projectData.map((data) => (
        <div
          key={data.id}
          className="w-1/2 h-[25vw] relative group overflow-hidden"
        >
          <div className="w-full h-full relative  transform transition-all duration-500 ease-out group-hover:scale-110">
            <Image src={data.src} fill sizes="1" alt="프로젝트" />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 bg-opacity-0 group-hover:bg-opacity-100 group-hover:bg-[rgba(0,0,0,0.5)]">
            <p className="text-white text-[2vw] mb-[100px] opacity-0 group-hover:opacity-100 group-hover:mb-5 font-bold transform transition-all duration-500 ease-out">
              {data.title}
            </p>
            <div className="absolute w-0 mt-[4vw] flex items-center justify-center group-hover:w-[50%] h-[0.1vw] bg-white transform transition-all duration-[0.5s] ease-out" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section05;
