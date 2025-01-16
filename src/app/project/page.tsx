"use client";

import BackgroundImage from "@/components/BackgroundImage";
import DetailContent from "@/components/project/DetailContent";
import Overview from "@/components/project/Overview";
import TopBanner from "@/components/project/TopBanner";
import TopImage from "@/components/project/TopImage";
import { projectData } from "@/utils/data/listData";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const Project = () => {
  const params = useSearchParams().get("id");
  const projectId = params ? Number.parseInt(params) : null;

  const getProjectById = (id: number | null) => {
    if (id === null) return null;
    return projectData.find((item) => item.id === id) || null;
  };

  const project = getProjectById(projectId);

  return (
    <div className="w-full">
      <BackgroundImage />
      <TopBanner project={project!} />
      <TopImage project={project!} />
      <Overview project={project!} />
      <DetailContent project={project!} />
    </div>
  );
};

export default Project;
