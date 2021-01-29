import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.js';
import './App.css';
import header from "./components/header.js";

function App() {
  return (
    <Router>
      <div>
        <header />
      </div>
    </Router>
  );
}

export default App;
