"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../Button/Button";
import { add, plus } from "@/app/utils/Icons";

interface ProjectData {
  id: any;
  title: string;
  description: string;
  materials: string[];
  date: string;
  completed: boolean;
  important: boolean;
  // Add any other fields that `projectData` might contain
}

type CloseModalFunction = () => void;

function CreateContent({
  projectData,
  closeModal,
}: {
  projectData: ProjectData;
  closeModal: CloseModalFunction;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [materials, setMaterials] = useState<string[]>([]);
  const [newMaterial, setNewMaterial] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const { theme, allProjects, editProject } = useGlobalState();

  useEffect(() => {
    if (projectData) {
      setTitle(projectData.title);
      setDescription(projectData.description);
      setMaterials(projectData.materials);
      setDate(projectData.date);
      setCompleted(projectData.completed);
      setImportant(projectData.important);
    } else {
      // Reset form when creating a new project
      setTitle("");
      setDescription("");
      setMaterials([]);
      setDate("");
      setCompleted(false);
      setImportant(false);
    }
  }, [projectData]);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMaterial(e.target.value);
  };

  const addMaterial = () => {
    if (newMaterial.trim()) {
      setMaterials([...materials, newMaterial]);
      setNewMaterial(""); // Clear the input field
    }
  };

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const project = {
      id: projectData ? projectData.id : undefined, // Include ID for update
      title,
      description,
      materials,
      date,
      completed,
      important,
    };

    try {
      let res;
      if (projectData) {
        // Update existing project
        res = await axios.put(`/api/projects/${projectData.id}`, project);
      } else {
        // Create new project
        res = await axios.post("/api/projects", project);
      }

      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        toast.success(
          projectData ? "Project updated successfully." : "Project created successfully."
        );
        allProjects(); // Refresh the list of projects
        closeModal(); // Close the modal
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(project);
      console.log(error);
    }
  };

  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
      <h1>{projectData ? "Edit Project" : "Create a Project"}</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="e.g, Odette Corsette Dress"
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          onChange={handleChange("description")}
          name="description"
          id="description"
          rows={1}
          placeholder="e.g, A dress for Megan's Birthday"
        ></textarea>
      </div>

      <div className="input-control">
        <label htmlFor="materials">Materials</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={newMaterial}
            onChange={handleMaterialChange}
            placeholder="Add a new material"
          />

          <button
            className="absolute p-2 text-black -translate-y-1/2 rounded-full top-1/2 right-4"
            type="button"
            onClick={addMaterial}
            style={{backgroundColor: '#798DA7'}}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <ul className="mt-2">
          {materials.map((material, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 mt-1 bg-gray-200 rounded-md"
            >
              {material}
              <button
                type="button"
                onClick={() => removeMaterial(index)}
                className="text-red-500"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={date}
          onChange={handleChange("date")}
          id="date"
        />
      </div>

      <div className="input-control toggler">
        <label htmlFor="important">Mark as Important</label>
        <input
          onChange={handleChange("important")}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>

      <div className="submit-btn">
        <Button
          name={projectData ? "Update Project" : "Create Project"}
          icon={projectData ? add : plus}
          background="#798DA7"
          color="#fff"
        />
      </div>
    </CreateContentStyled>
  );
}

const CreateContentStyled = styled.form`
  max-height: 80vh; 
  overflow-y: auto;
  padding: 15px;
  width: 100%;
  padding: 2rem;
  background: #fff;
  box-shadow: ${(props) => props.theme.shadow7};
  border-radius: 1rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #202a45;
  }

  .input-control {
    margin-bottom: 1rem;

    label {
      display: block;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #202a45;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
    }

    textarea {
      resize: none;
    }
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .mt-1 {
    margin-top: 0.25rem;
  }

  .mt-2 {
    margin-top: 0.5rem;
  }

  .p-2 {
    padding: 0.5rem;
  }

  .text-white {
    color: #fff;
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .top-1\/2 {
    top: 50%;
  }

  .right-4 {
    right: 1rem;
  }

  .-translate-y-1\/2 {
    transform: translateY(-50%);
  }

  .bg-gray-200 {
    background-color: #e2e8f0;
  }

  .rounded-md {
    border-radius: 0.375rem;
  }

  .text-red-500 {
    color: #ef4444;
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #798da7;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #657d94;
      }
    }
  }
`;

export default CreateContent;
