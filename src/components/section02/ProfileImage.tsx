import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="w-full pl-40 max-[1410px]:pl-10 max-[1000px]:pl-0 flex items-center justify-center">
      <div className="w-[250px] h-[333px] relative rounded-xl overflow-hidden">
        <Image src={"/images/my_photo.jpg"} fill sizes="1" alt="이미지" />
      </div>
    </div>
  );
};

export default ProfileImage;
