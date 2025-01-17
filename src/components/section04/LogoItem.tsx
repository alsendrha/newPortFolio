import Image from "next/image";
import React from "react";

type LogoItemProps = {
  item: {
    id: number;
    src: string;
    name: string;
  };
};

const LogoItem = ({ item }: LogoItemProps) => {
  return (
    <div className="w-[325px] max-[670px]:w-[230px] flex gap-5 mb-20 justify-center">
      <div className="relative w-[100px] h-[100px] max-[1350px]:w-[80px] max-[1350px]:h-[80px] rounded-xl bg-[rgba(255,255,255,0.1)]">
        <Image src={item.src} fill sizes="1" alt={item.name} />
      </div>
      <div className="flex-1 max-[670px]:w-[100px] transform transition-all duration-500 ease-out">
        <p className="text-xl font-bold break-words">{item.name}</p>
      </div>
    </div>
  );
};

export default LogoItem;
