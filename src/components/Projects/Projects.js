import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projectsData";
import "./Projects.css";

// =========================================================
// PROJECTS COMPONENT
// Showcases completed projects using a grid of ProjectCard components.
// Just like Services, this reads data from projectsData.js so you can
// add/remove/edit projects without touching this file.
// =========================================================
const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle
          tag="Our Projects"
          title="Completed Projects"
          description="A glimpse into some of the projects we have successfully delivered across various sectors."
        />

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
