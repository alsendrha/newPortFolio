import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <div className="w-full h-full fixed -z-10">
      <Image
        src={"/images/backgroundImage.jpg"}
        fill
        sizes="1"
        alt="백이미지"
      />
    </div>
  );
};

export default BackgroundImage;
