import React from "react";

type OverviewProps = {
  project: {
    overview: string;
  };
};

const Overview = ({ project }: OverviewProps) => {
  return (
    <div className="text-white w-full flex items-center justify-center p-[2vw]">
      <div className="w-full flex flex-col bg-gradient-to-l from-[#224e35] to-[#111111] p-[2vw] gap-[4vw] items-center justify-center rounded-xl">
        <p className="text-[2.5vw] font-bold">overview</p>
        <p className="px-[5vw] text-[1.3vw]">{project?.overview}</p>
      </div>
    </div>
  );
};

export default Overview;
