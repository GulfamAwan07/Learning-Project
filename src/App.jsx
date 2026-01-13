import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";


const App = () => {
  return (
    <div className="bg-[#F5F7F9]">
    <Navbar />

    <Routes>
           <Route path="/" element={<Hero />} />  
           <Route path="/About" element={<About />}/>
    </Routes>
    </div>
)};


export default App;