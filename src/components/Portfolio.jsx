import React from "react";
import "./App.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A brief description of Project 1.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A brief description of Project 2.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>A brief description of Project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
