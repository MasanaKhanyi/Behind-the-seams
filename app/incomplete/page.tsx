"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Projects from "../Components/Projects/Projects";

function page() {
  const { incompleteProjects } = useGlobalState();
  return <Projects title="Incomplete Projects" projects={incompleteProjects} />;
}

export default page;
