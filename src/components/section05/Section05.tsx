import { projectData } from "@/utils/data/listData";
import React from "react";
import ListItem from "./listitem/ListItem";

const Section05 = () => {
  return (
    <section id="PROJECT" className="w-full flex flex-wrap">
      {projectData.map((data) => (
        <ListItem key={data.id} data={data} />
      ))}
    </section>
  );
};

export default Section05;
