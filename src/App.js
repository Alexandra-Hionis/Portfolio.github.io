import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.js';
import './App.css';
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
// import Footer from "./components/Footer.js";
function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      
        <Home />
      
        <About />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
