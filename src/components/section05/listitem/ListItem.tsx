import React from "react";
import ListImage from "./ListImage";
import ListBottomText from "./ListBottomText";
import ListItemTitle from "./ListItemTitle";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ListItemSkills from "./ListItemSkills";

type ListItemProps = {
  data: {
    id: number;
    src: string;
    skills: string[];
    title: string;
    type: string;
    content: string;
  };
};

const ListItem = ({ data }: ListItemProps) => {
  return (
    <div className="w-1/2 max-[1000px]:w-full h-[25vw] max-[1000px]:h-[55vw] relative group overflow-hidden">
      <ListImage src={data.src} />
      <Link
        href={{
          pathname: "/project",
          query: {
            id: data.id,
          },
        }}
      >
        <ListItemSkills data={data} />
        <div className="text-white w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 bg-opacity-0 group-hover:bg-opacity-100 group-hover:bg-[rgba(0,0,0,0.5)]">
          <ListItemTitle data={data} />
          <div className="w-0 my-[5vw] group-hover:my-[0.5vw] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:w-[50%] h-[0.1vw] bg-white transform transition-all duration-[0.5s] ease-out" />
          <ListBottomText data={data} />
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
