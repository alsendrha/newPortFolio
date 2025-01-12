import Image from "next/image";
import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";

const Section02 = () => {
  return (
    <section className="w-full flex justify-center items-center bg-[#222]">
      <div className="flex items-center">
        <ProfileImage />
        <ProfileText />
      </div>
    </section>
  );
};

export default Section02;
