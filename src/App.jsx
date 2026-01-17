import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Plans from "./components/Plans";
import Integration from "./components/Integration";
import Circle from "./components/Circle";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#F5F7F9]">
      <Navbar />

      <Routes>
        {" "}
        //in last, change the Whole Structure...
        //upgrade  name 
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Integration" element={<Integration />} />
        <Route path="/Circle" element={<Circle />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
