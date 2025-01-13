import { projectData } from "@/utils/data/listData";
import Image from "next/image";
import React from "react";
import ListItem from "./listitem/ListItem";
import Title from "../Title";

const Section05 = () => {
  return (
    <section id="PROJECT" className="w-full bg-[#222] flex flex-wrap">
      {projectData.map((data) => (
        <ListItem key={data.id} data={data} />
      ))}
    </section>

  );
};

export default Section05;
