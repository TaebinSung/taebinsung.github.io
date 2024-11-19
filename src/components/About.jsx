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
        <h2 className="name">Taebin Sung</h2>
        <p className="intro">
          Hi there! I'm a UBC mathematics major student
        </p>
      </div>
    </div>
  );
};

export default About;
