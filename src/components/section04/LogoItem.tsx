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
    <div className="w-[325px] flex gap-5 mb-20">
      <div className="relative w-[100px] h-[100px] rounded-xl bg-[rgba(255,255,255,0.1)]">
        <Image src={item.src} fill sizes="1" alt={item.name} />
      </div>
      <div>
        <p className="text-xl font-bold">{item.name}</p>
      </div>
    </div>
  );
};

export default LogoItem;
