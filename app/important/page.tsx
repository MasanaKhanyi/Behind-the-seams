"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Projects from "../Components/Projects/Projects";

function page() {
  const { importantProjects } = useGlobalState();
  return <Projects title="Important Projects" projects={importantProjects} />;
}

export default page;
