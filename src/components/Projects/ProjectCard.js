import React from "react";

// =========================================================
// PROJECT CARD COMPONENT
// Renders ONE completed project card with an image, category
// tag, title, and short description. Used by the Projects
// component, once per item in projectsData.js.
// =========================================================
const ProjectCard = ({ image, title, category, description }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrap">
        <img src={image} alt={title} className="project-image" />
        <span className="project-category">{category}</span>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
