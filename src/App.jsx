import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Plans from "./components/Plans";


const App = () => {
  return (
    <div className="bg-[#F5F7F9]">
    <Navbar />

    <Routes>               //in last, change the Whole Structure...
           <Route path="/" element={<Hero />} />  
           <Route path="/About" element={<About />}/>
           <Route path="/Benefits" element={<Benefits />}/>
           <Route path="/Plans" element={<Plans />} />
    </Routes>
    </div>
)};


export default App;