"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/utils/Icons";
import React from "react";
import styled from "styled-components";
import formatDate from "@/app/utils/formatDate";

interface Props {
  title: string;
  description: string;
  materials: string[];
  date: string;
  isCompleted: boolean;
  id: string;
  onEdit: (project: any) => void;
}

function ProjectItem({ title, description, materials, date, isCompleted, id, onEdit }: Props) {
  const { theme, deleteProject, updateProject, editProject } = useGlobalState();

  return (
    <ProjectItemStyled theme={theme}>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr></hr>

      <p className="materials">{"Materials: •  " + materials.join(' • ') + " •"}</p>
      <hr></hr>
      <p className="date">{formatDate(date)}</p>
      <div className="project-footer">
        {isCompleted ? (
          <button
            className="completed"
            onClick={() => {
              const project = {
                id,
                isCompleted: !isCompleted,
              };

              updateProject(project);
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="incomplete"
            onClick={() => {
              const project = {
                id,
                isCompleted: !isCompleted,
              };

              updateProject(project);
            }}
          >
            Incomplete
          </button>
        )}
        <button
          className="edit"
          onClick={() => {
            const project = {
              id,
              title,
              description,
              materials,
              date,
              isCompleted,
            };

            onEdit(project);
          }}
        >
          {edit}
        </button>

        <button
          className="delete"
          onClick={() => {
            deleteProject(id);
          }}
        >
          {trash}
        </button>
      </div>
    </ProjectItemStyled>
  );
}

const ProjectItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: #798da7;
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid #1d2b44;

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
    font-size: 1rem;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .project-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: #202a45;
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: #f7c9a8; //ORANGE TOWN
      border-radius: 30px;
    }

    .completed {
      background: #acbcb7 !important;
    }
  }
`;

export default ProjectItem;
