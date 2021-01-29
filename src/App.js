import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.js';
import './App.css';
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
// import Footer from "./components/Footer.js";
function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
