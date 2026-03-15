import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects({ limit }) {
  // State lifted to parent so we can control which card is open.
  // Stores the ID of the currently open project. null = no card open
  const [openProjectId, setOpenProjectId] = useState(null);

  // Slice projects if a limit is provided
  const displayed = limit ? projects.slice(0, limit) : projects;

  // Toggle function called by a child ProjectCard
  const handleToggle = (id) => {
    // If the clicked card is already open, close it
    // Otherwise, open the clicked card and close any other
    setOpenProjectId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="projects-grid">
      {displayed.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          url={project.url}
          image={project.image}
          // ✅ Controlled prop: only true if this card's id matches the open one
          isOpen={openProjectId === project.id}
          // ✅ Pass toggle function specific to this card
          onToggle={() => handleToggle(project.id)}
        />
      ))}
    </div>
  );
}

export default Projects;
