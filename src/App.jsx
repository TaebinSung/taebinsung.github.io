import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";  // Import BrowserRouter
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/App.css";

const App = () => {
  return (
    <BrowserRouter>  {/* Use BrowserRouter here */}
      <div>
        <Header />
        <About />
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
