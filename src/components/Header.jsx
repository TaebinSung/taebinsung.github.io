import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">My Portfolio</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">About</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;
