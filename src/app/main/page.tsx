import BackgroundImage from "@/components/BackgroundImage";
import NevBar from "@/components/NevBar";
import Section01 from "@/components/section01/Section01";
import Section02 from "@/components/section02/Section02";
import Section03 from "@/components/section03/Section03";
import Section04 from "@/components/section04/Section04";
import Section05 from "@/components/section05/Section05";
import React from "react";

const Main = () => {
  return (
    <div>
      <BackgroundImage />
      <NevBar />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
    </div>
  );
};

export default Main;
