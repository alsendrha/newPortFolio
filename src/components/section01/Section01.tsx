import { section1Data } from "@/utils/data/listData";
import React from "react";
import MainText from "./MainText";
import Image from "next/image";

const Section01 = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center relative bg-black">
      <div className=" flex text-9xl font-extrabold">
        {section1Data.map((data, index) => {
          const lastText = index === section1Data.length - 1;
          return <MainText key={data.id} data={data} lastText={lastText} />;
        })}
      </div>
    </section>
  );
};

export default Section01;
