import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { FaGithub } from "react-icons/fa";
type TopBannerProps = {
  project: {
    type: string;
    content: string;
    link: string;
    title: string;
    github: string;
  };
};

const TopBanner = ({ project }: TopBannerProps) => {
  return (
    <div
      className={twMerge(
        "text-white w-full h-[300px] flex flex-col items-center justify-between bg-black"
      )}
    >
      <div className="opacity-0">github</div>
      <div className="text-[4.5vw] max-[850px]:text-[7vw] transformation">
        {project?.content}
      </div>
      <div className="text-2xl pb-5 flex gap-5">
        <Link href={project.link} target="_blank">
          <p className="text-[#666666]">서비스 페이지</p>
        </Link>
        <p className="text-[#666666]">|</p>
        <Link href={project?.github} target="_blank">
          <div className="flex items-center">
            <FaGithub size={30} color="#666666" />
            <p className="text-[#666666]">&nbsp;깃허브</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
