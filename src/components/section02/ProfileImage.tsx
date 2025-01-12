import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div className="w-[600px] h-[580px]  flex items-center justify-center">
      <div className="w-[200px] h-[200px] relative">
        <Image src={"/images/image01.png"} fill sizes="1" alt="이미지" />
      </div>
    </div>
  );
};

export default ProfileImage;
