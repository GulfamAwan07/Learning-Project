import React from "react";
import { RiGeminiFill } from "react-icons/ri";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import { FaRegFileLines } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { ImMeter } from "react-icons/im";
import About from "./About";

const Hero = () => {
  return (
    <div className=" bg-[#F5F7F9] flex flex-col  items-center justify-center pt-20">
      <div className="flex flex-col justify-center text-center gap-4 ">
        <h1 className="flex text-center justify-center text-4xl md:text-5xl font-sans font-semibold text-[#0E363D]">
          The Future of Manufacturing <br /> with Lastest Technology
        </h1>
        <p className="text-[#0E363D] text-normal">
          Expert tech to elevate the manufacturing. Let's take your business
          further.
        </p>
      </div>

      {/* <div className="w-36 h-36 relative">
        <div className="absolute right-6 top-1 flex items-center justify-center">
        <RiGeminiFill className=" w-10 h-10  text-[#0E363D]" />
       </div> 
         <div className="absolute bottom-2 left-4 flex items-center justify-center">
        <PiArrowCircleUpRightThin className=" w-10 h-10 font-semibold  text-[#0E363D]" />
        </div>

         <div className="absolute right-6 bottom-4  flex items-center justify-center">
        <FaRegFileLines className=" w-10 h-10 text-[#0E363D] " />
         </div>
      </div> */}

      <div className="flex  justify-start md:justify-center mitems-center mt-6 gap-4">
        <button className="bg-[#0E363D] font-semibold font-sans rounded-full p-2 text-white">
          Get Started
        </button>
        <button className="text-[#0E363D] font-semibold font-sans rounded-full px-4 py-2 p-2 bg-white ">
          Demo
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-6">
        <div className="flex gap-2">
          <div className="flex gap-0 ">
            <MdStar className="w-6 h-6 text-yellow-400" />
            <MdStar className="w-6 h-6 text-yellow-400" />
            <MdStar className="w-6 h-6 text-yellow-400" />
            <MdStar className="w-6 h-6 text-yellow-400" />
            <MdStar className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h1 className="font-sans font-semibold">5.0</h1>
          </div>
        </div>

        <div>
          <h1 className="text-gray-500">
            from 80+{" "}
            <span className="font-sans font-semibold text-black">reviews</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-center mt-6 gap-12 mb-6">
        <div>
          <img src="/imgggg.PNG" alt="img" className="rounded-2xl w-72 h-80" />
        </div>

        <div className="w-40 h-64 bg-[#0E363D] rounded-2xl flex justify-center text-center items-center">
          <h1 className="text-gray-300 text-xl">
            <span className="text-4xl font-semibold text-white">100+</span>{" "}
            <br />
            Our Esteemed Clients and Partners
          </h1>
        </div>

        <div className="w-64 h-48 bg-white rounded-2xl flex flex-col gap-3 justify-center items-center">
          <div className="flex justify-between w-52 ">
            <BsGrid1X2 className="bg-[#E2FFC8]  text-[#0E363D] w-8 h-8 p-2" />
            <CiMenuKebab className="w-4 h-4 " />
          </div>

          <div className="flex justify-start gap-1 mt-4 w-52">
            <h1>Total Projects</h1>
            <IoArrowRedoCircleSharp className="mt-1" />
            <h1>8%</h1>
          </div>

          <div className="flex flex-col justify-start w-52">
            <h1 className="text-4xl text-black font-bold">1951+</h1>
            <h1>
              increase of <span className="text-green-400">126</span> this month
            </h1>
          </div>
        </div>

        <div className="w-40 h-64 bg-[#E2FFC8] rounded-2xl flex text-center justify-center items-center">
          <h1 className="text-md ">
            <span className="text-4xl font-bold">6+</span> <br />
            Years of <br /> Dedicated <br /> Service
          </h1>
        </div>

        <div className="w-72 h-80 bg-[#142F32]  rounded-2xl flex flex-col justify-end text-start items-center m">
          <div className="flex justify-start w-64 items-start ">
            <ImMeter className="w-8 h-8 text-white mx-7" />
          </div>
          <h1 className="text-xl text-white mt-4 mb-2">
            Acheive Optimal <br /> Effeciency and Boost <br /> Productive
          </h1>
        </div>
      </div>
      <About />
    </div>
  );
};
export default Hero;
