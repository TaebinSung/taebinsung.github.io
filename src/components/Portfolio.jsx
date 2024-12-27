import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project-card">
          <h3>Project 1</h3>
          <Link to="/project/1">
            <p>A brief description of Project 1.</p>
          </Link>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <Link to="/project/2">
            <p>A brief description of Project 2.</p>
          </Link>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <Link to="/project/3">
            <p>A brief description of Project 3.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
