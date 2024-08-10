"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";
import toast,  { Toaster } from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { user } = useUser();

  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [projects, setProjects] = useState([]);

  const theme = themes[selectedTheme];

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const allProjects = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/projects");

      const sorted = res.data.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      setProjects(sorted);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      const res = await axios.delete(`/api/projects/${id}`);
      toast.success("Project deleted");

      allProjects();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const updateProject = async (project) => {
    try {
      const res = await axios.put(`/api/projects`, project);

      toast.success("Project updated");

      allProjects();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  const editProject = async (project) => {
    try {
      const res = await axios.put(`/api/projects`, project);

      toast.success("Project updated");

      allProjects();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  const completedProjects = projects.filter((project) => project.isCompleted === true);
  const importantProjects = projects.filter((project) => project.isImportant === true);
  const incompleteProjects = projects.filter((project) => project.isCompleted === false);

  React.useEffect(() => {
    if (user) allProjects();
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        projects,
        deleteProject,
        isLoading,
        completedProjects,
        importantProjects,
        incompleteProjects,
        updateProject,
        modal,
        openModal,
        closeModal,
        allProjects,
        collapsed,
        collapseMenu,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
