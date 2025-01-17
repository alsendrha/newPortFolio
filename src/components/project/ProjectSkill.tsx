import Image from "next/image";
import React from "react";

type ProjectSkillProps = {
  project: {
    skillImages: string[];
    skills: string[];
  };
};

const ProjectSkill = ({ project }: ProjectSkillProps) => {
  return (
    <div className="w-full text-white flex flex-col gap-[2vw] py-[4vw] justify-center items-center">
      <p className="text-white text-[3.5vw] font-bold">사용기술</p>

      <div className="flex justify-center items-center gap-[3vw]">
        {project.skillImages.map((skillImage, index) => {
          const skill = project.skills[index];
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[8vw] h-[8vw] bg-[rgba(255,255,255,0.1)] relative rounded-[1vw]">
                <Image src={skillImage} fill sizes="1" alt="이미지" />
              </div>
              <div className="text-[1.2vw] font-bold">{skill}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSkill;
