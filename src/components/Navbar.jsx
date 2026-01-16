import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-center fixed items-center h-12 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg w-full z-10">
      <div className="container  mb-2 fixed w-full ">
        <nav className="flex items-center justify-between overflow-hidden">
          <div className="flex flex-row  md:gap-2 md:pl-6">
            <img
              src="/flag.png"
              alt="logo "
              className="w-10 h-10 mt-2 cursor-pointer"
            />
            <h1 className="text-lg font-bold text-black pt-4 cursor-pointer">
              Prodmast
            </h1>
          </div>

          <div className="hidden md:flex md:flex-row md:gap-8 mt-2 sm:gap-1 ">
            {/* <Link to="/Hero" className="cursor-pointer font-sans">Home</Link> */}
            <Link to="/About" className="cursor-pointer font-sans">
              About
            </Link>
            <Link to="/Plans" className="cursor-pointer font-sans">
              Services
            </Link>
            <Link to="/Integration" className="cursor-pointer font-sans">
              Contact
            </Link>
            <Link to="/Benefits" className="cursor-pointer font-sans">
              Work
            </Link>
          </div>

          <div className="pr-6 mt-2">
            <button className="bg-[#0E363D] rounded-full text-white p-2 mx-1 cursor-pointer">
              Signup
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
