"use client";

import BackgroundImage from "@/components/BackgroundImage";
import DetailContent from "@/components/project/DetailContent";
import Overview from "@/components/project/Overview";
import TopBanner from "@/components/project/TopBanner";
import TopImage from "@/components/project/TopImage";
import { projectData } from "@/utils/data/listData";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const ProjectContent = () => {
  const params = useSearchParams().get("id");
  const projectId = params ? Number.parseInt(params) : null;

  const getProjectById = (id: number | null) => {
    if (id === null) return null;
    return projectData.find((item) => item.id === id) || null;
  };

  const project = getProjectById(projectId);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <TopBanner project={project} />
      <TopImage project={project} />
      <Overview project={project} />
      <DetailContent project={project} />
    </>
  );
};

const Project = () => {
  return (
    <div className="w-full">
      <BackgroundImage />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectContent />
      </Suspense>
    </div>
  );
};

export default Project;
