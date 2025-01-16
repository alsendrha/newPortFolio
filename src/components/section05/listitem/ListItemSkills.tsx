import { backColor } from "@/utils/data/listData";
import React from "react";
import { twMerge } from "tailwind-merge";

type ListItemSkillsProps = {
  data: {
    skills: string[];
  };
};

const ListItemSkills = ({ data }: ListItemSkillsProps) => {
  return (
    <div className="absolute text-white bottom-[7vw] left-0 z-10 w-full gap-[1vw] flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-all duration-[.5s] ease-out">
      {data.skills.map((item, index) => (
        <div
          key={index}
          className={twMerge(
            "text-[0.9vw] flex items-center justify-center  rounded-full px-[0.5vw] py-[0.1vw]",
            [backColor(item)]
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ListItemSkills;
