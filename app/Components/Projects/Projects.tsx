"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React, { useState } from "react";
import styled from "styled-components";
import CreateContent from "../Modals/CreateContent";
import ProjectItem from "../ProjectItem/ProjectItem";
import { add, plus } from "@/app/utils/Icons";
import Modal from "../Modals/Modal";

interface Props {
  title: string;
  projects: any[];
}

function Projects({ title, projects }: Props) {
  const { theme, isLoading, openModal, closeModal, modal } = useGlobalState();
  const [editingProject, setEditingProject] = useState<any | null>(null);

  const handleOpenModal = (project?: any) => {
    setEditingProject(project || null);
    openModal();
  };

  const handleCloseModal = () => {
    setEditingProject(null);
    closeModal();
  };

  return (
    <ProjectStyled theme={theme}>
      {modal && (
        <Modal
          content={
            <CreateContent
              projectData={editingProject}
              closeModal={handleCloseModal}
            />
          }
        />
      )}
      <h1>{title}</h1>

      <button className="btn-rounded" onClick={() => handleOpenModal()}>
        {plus}
      </button>

      <div className="projects grid">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            materials={project.materials}
            description={project.description}
            date={project.date}
            isCompleted={project.isCompleted}
            id={project.id}
            onEdit={handleOpenModal}
          />
        ))}

        <button className="create-project" onClick={() => handleOpenModal()}>
          {add}
          Add New Project
        </button>
      </div>
    </ProjectStyled>
  );
}

const ProjectStyled = styled.main`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: #fff;
  border: 2px solid #202a45;
  border-radius: 1rem;
  height: 100%;
  color: #202a45;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .btn-rounded {
    position: fixed;
    top: 4.9rem;
    right: 5.1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-color: #788ba5;
    border: 9px solid #788ba5;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    color: #202a45;
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      top: 3rem;
      right: 3.5rem;
    }
  }

  .projects {
    margin: 2rem 0;
  }

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: #abbbb6;
      border-radius: 0.5rem;
    }
  }

  .create-project {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 16rem;
    color: #7a8da7;
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed #202a45;
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: #7a8da7;
      color: #202a45;
    }
  }
`;

export default Projects;
