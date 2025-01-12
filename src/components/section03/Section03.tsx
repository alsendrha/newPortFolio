import React from "react";
import Title from "../Title";
import { profileData } from "@/utils/data/listData";
import ContentText from "./ContentText";

const Section03 = () => {
  return (
    <section className="w-full bg-[#222] text-white flex justify-center py-[100px]">
      <div className="w-full px-2 max-w-[1300px]">
        <div className="h-[140px] pt-[30px]">
          <Title title="ABOUT" />
        </div>
        <div className="flex justify-between">
          {profileData.map((data, index) => (
            <ContentText key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section03;
