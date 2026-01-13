import React from "react";
import { TbNorthStar } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";
import { PiStackSimple } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

const About = () => {
  return (
    <div className="bg-[#0C363C] w-full mt-10 flex flex-col justify-center items-center overflow-hidden">
      <div className="mt-10 mb-4 ">
        <div className="flex flex-col gap-6 justify-center text-center">
          <h1 className="text-4xl font-sans text-white font-semibold">
            Efficient And Integrated <br /> Manufacturing Services
          </h1>
          <h1 className="text-gray-300">
            Simply operations with our efficient, quality-focused services.
          </h1>
        </div>
      </div>

      <div className="mt-6 flex flex-col  md:flex-row justify-center mb-5 gap-10">
        <div className="bg-[#143E44] w-66 md:w-96 h-66 rounded-2xl ">
          <div className="flex justify-between">
            <TbNorthStar className="w-10 h-10 text-white m-5" />
            <GoArrowUpRight className="w-6 h-6 mt-7 right-5 text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold  mx-4 mt-10">
            Production and Assmebly
          </h1>
          <p className="text-white mx-4 mt-2">
            Details on production processes, assembly, <br /> capacity and
            product types.
          </p>
        </div>

        <div className="bg-[#143E44] w-66 md:w-96 h-66 rounded-2xl ">
          <div className="flex justify-between">
            <PiStackSimple className="w-10 h-10 text-white m-5" />
            <GoArrowUpRight className="w-6 h-6 mt-7 right-5 text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold  mx-4 mt-10">
            Custom Manufacturing
          </h1>
          <p className="text-white mx-4 mt-2">
            Custom product creation with design and
            <br /> customization options.
          </p>
        </div>

        <div className="bg-[#143E44] w-66 md:w-96 h-66 rounded-2xl ">
          <div className="flex justify-between">
            <LuWrench className="w-10 h-10 text-white m-5" />
            <GoArrowUpRight className="w-6 h-6 mt-7 right-5 text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold  mx-4 mt-10">
            Quality Control
          </h1>
          <p className="text-white mx-4 mt-2">
            Procedures and systems in place to ensure
            <br /> high product quality.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col  md:flex-row justify-center mb-5 gap-10">
        <div className="bg-[#143E44] w-66 md:w-96 h-66 rounded-2xl ">
          <div className="flex justify-between">
            <MdOutlineShield className="w-10 h-10 text-white m-5" />
            <GoArrowUpRight className="w-6 h-6 mt-7 right-5 text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold  mx-4 mt-10">
            Technology and Innovation
          </h1>
          <p className="text-white mx-4 mt-2">
            Details on latest manufacturing <br /> technology and ongoing
            innovation.
          </p>
        </div>

        <div className="bg-[#143E44] w-66 md:w-96 h-66 rounded-2xl ">
          <div className="flex justify-between">
            <IoCubeOutline className="w-10 h-10 text-white m-5" />
            <GoArrowUpRight className="w-6 h-6 mt-7 right-5 text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold  mx-4 mt-10">
            Packaging and Logistics
          </h1>
          <p className="text-white mx-4 mt-2">
            Packaging and logistics for shipping to <br /> customers and
            distributors.
          </p>
        </div>

        <div className="bg-[#143E44] w-66 md:w-96 h-66 rounded-2xl ">
          <div className="flex justify-between">
            <GoGraph className="w-10 h-10 text-white m-5" />
            <GoArrowUpRight className="w-6 h-6 mt-7 right-5 text-white" />
          </div>

          <h1 className="text-white text-xl font-semibold  mx-4 mt-6">
            Consulting Market Research
          </h1>
          <p className="text-white mx-4 mt-2">
            Services to help companies understand
            <br /> market needs and provide strategic advice.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
