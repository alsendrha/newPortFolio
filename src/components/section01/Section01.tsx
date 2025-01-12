import { section1Data } from "@/utils/data/listData";
import React from "react";
import MainText from "./MainText";

const Section01 = () => {
  return (
    <div className="bg-[#222] w-full h-screen flex justify-center items-center">
      <div className=" flex text-9xl font-extrabold">
        {section1Data.map((data, index) => {
          const lastText = index === section1Data.length - 1;
          return <MainText key={data.id} data={data} lastText={lastText} />;
        })}
      </div>
    </div>
  );
};

export default Section01;
