"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Projects from "../Components/Projects/Projects";

function page() {
  const { completedProjects } = useGlobalState();

  return <Projects title="Completed Projects" projects={completedProjects} />;
}

export default page;
