import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full p-10 gap-10 md:gap-14 mt-10 mb-6 overflow-hidden">
      <div className="bg-[#F8FAFB] w-screen md:w-[36rem] flex justify-center items-center rounded-2xl">
        <div className="relative bg-[#FFFFFF] w-screen md:w-[28rem] mt-12 rounded-2xl mb-6">
          <div className="flex flex-col  mt-2 mx-2">
            <h1 className="font-sans text-gray-400 text-xl">Total Projects</h1>
            <div className="flex flex-row gap-4 mt-2">
              <h1 className="font-semibold">1457</h1>
              <div className="flex flex-row gap-1 ">
                <MdArrowOutward className="w-4 h-4 mt-0.5  text-green-400 bg-gray-200 rounded-full p-0.5 " />
                <h1 className="text-green-400">34%</h1>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 mt-4 mx-6"></div>

          <div className="flex flex-col mt-4 justify-center items-center gap-3">
            <div className="flex flex-row gap-6 ">
              <h1 className="text-gray-400">Finished</h1>
              <div className="flex flex-row gap-14">
                <div className="w-48 h-5 bg-gray-200 rounded-xl mt-0.5"></div>
                <h1 className="font-semibold ">10%</h1>
              </div>
            </div>

            <div className="flex flex-row gap-4 justify-start items-start">
              <h1 className="text-gray-400">In Progress</h1>
              <div className="w-56 h-5 bg-gray-200 rounded-xl mt-0.5"></div>
              <h1 className="font-semibold ">13%</h1>
            </div>

            <div className="flex flex-row gap-6">
              <h1 className="text-gray-400">Rejected</h1>
              <div className="flex flex-row gap-10">
                <div className="w-52 h-5 bg-gray-200 rounded-xl mt-0.5"></div>
                <h1 className="font-semibold ">11%</h1>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 mt-4 mx-6"></div>

          <div className="w-48 rounded-xl h-6 bg-gray-200 mt-4 mx-10"> </div>

          <div className="flex flex-row mt-4 mx-10 gap-6 items-end">
            <div className="w-8 h-32 bg-[#0C363C]"></div>
            <div className="w-8 h-24 bg-[#17A882]"></div>
            <div className="w-8 h-32 bg-[#0C363C]"></div>
            <div className="w-8 h-24 bg-[#17A882]"></div>
          </div>

          <div className="absolute bg-white  rounded-2xl w-64  h-40 right-1 md:-right-16 -bottom-10 shadow-xl">
            <div className="flex justify-between w-56 items-center mx-4 mt-4">
              <BsGrid1X2 className="bg-[#E2FFC8]  text-[#0E363D] w-8 h-8 p-2" />
              <CiMenuKebab className="w-4 h-4 " />
            </div>

            <div className="flex justify-start gap-1 mt-4 w-52 mx-4">
              <h1>Total Projects</h1>
              <IoArrowRedoCircleSharp className="mt-1" />
              <h1>8%</h1>
            </div>

            <div className="flex flex-col justify-start w-52 mx-4">
              <h1 className="text-4xl text-black font-bold">1951+</h1>
              <h1>
                increase of <span className="text-green-400">126</span> this
                month
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-4xl font-sans font-semibold">
          Key Benefits of Our System for <br /> Your Business Efficiency
        </h1>
        <p className="text-gray-500 font-sans mt-6">
          Our systems boost productivity, cut costs, and drive business growth.
        </p>

        <div className="flex flex-row gap-6 mt-4">
          <FaCheckCircle className="w-4 h-4 mt-3" />
          <div>
            <h1 className="font-sans text-2xl font-semibold">
              Boosting Quality with Tech
            </h1>
            <p className="text-gray-500">
              With advanced technology, we help you achieve top product quality.
              <br /> Discover how we can enhance your standards.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6 mt-4">
          <FaCheckCircle className="w-4 h-4 mt-3" />
          <div>
            <h1 className="font-sans text-2xl font-semibold">
              Optimization Production Process
            </h1>
            <p className="text-gray-500 text-clip break-all">
              Boost factory efficiency and productivity with our innovative
              solutions.
              <br /> See how the latest technology can maximize your output.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6 mt-4">
          <FaCheckCircle className="w-4 h-4 mt-3" />
          <div>
            <h1 className="font-sans text-2xl font-semibold">
              AI-Driven Production
            </h1>
            <p className="text-gray-500 break-all">
              Leverage the power of AI to transform your manufacturing
              processes, <br />
              achieving faster and more effective results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
