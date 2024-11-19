import React from "react";
import "./App.css";

const About = () => {
  return (
    <div className="about">
      <div className="profile">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="name">Your Name</h2>
        <p className="intro">
          Hello! I'm a software developer specializing in building (and
          occasionally designing) exceptional digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
