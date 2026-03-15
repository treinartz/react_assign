function ProjectCard({ name, description, url, image, isOpen, onToggle }) {
  return (
    <div className="project-card">
      {/* Image of the project */}
      <img src={image} alt={name} className="project-image" />

      {/* Project title */}
      <h2 className="project-name">{name}</h2>

      {/* Toggle button */}
      <button onClick={onToggle} className="toggle-button">
        {isOpen ? "Hide Description" : "Show Description"}
      </button>

      {/* Description container is shown only if isOpen is true */}
      <div className={`project-description-container ${isOpen ? "open" : ""}`}>
        <p className="project-description">{description}</p>
      </div>

      <br />

      {/* Link to live project */}
      <a href={url} className="project-link">
        Visit Project
      </a>
    </div>
  );
}

export default ProjectCard;
