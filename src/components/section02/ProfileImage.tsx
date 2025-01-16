import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div className="w-full pl-40 flex items-center justify-center">
      <div className="w-[200px] h-[200px] relative rounded-xl overflow-hidden">
        <Image src={"/images/image01.png"} fill sizes="1" alt="이미지" />
      </div>
    </div>
  );
};

export default ProfileImage;
