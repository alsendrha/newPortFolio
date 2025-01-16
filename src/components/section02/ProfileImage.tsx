import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div className="w-full pl-40 flex items-center justify-center">
      <div className="w-[250px] h-[333px] relative rounded-xl overflow-hidden">
        <Image src={"/images/my_photo.jpg"} fill sizes="1" alt="이미지" />
      </div>
    </div>
  );
};

export default ProfileImage;
