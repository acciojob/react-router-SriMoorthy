
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
