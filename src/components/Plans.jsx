import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  useGSAP(() => {
    gsap.from(".text", {
      y: -70,
      opacity: 0,
      duration: 0.5,

      ease: "power3.out",
      scrollTrigger: {
        trigger: ".text",
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(".card", {
      y: -90,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.3,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".card",
        start: "top 70%",
        once: true,
      },
    });
  }, []);
  return (
    <div className="bg-[#0B0F12] flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="text mt-24 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Tailored Plans for Your <br /> Manufacturing Scale
        </h1>
        <p className="text-gray-400 ">
          Flexible pricing for any business size.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="card w-screen md:w-96 bg-[#3a3838] flex flex-col gap-5 mt-10 rounded-2xl p-4">
          <h1 className="text-2xl  text-white">Starter</h1>
          <p className="text-gray-300">
            This package offers the basic features you need to get started.
          </p>
          <h1 className="text-3xl font-semibold text-white">
            $39 <span className="text-gray-400 text-sm">/month</span>
          </h1>
          <button className="text-white text-lg border-white border-2 rounded-3xl pt-1 pb-1 mx-6">
            Get Started
          </button>

          <div className="flex flex-row gap-4">
            <hr className="w-36 mt-2 border-gray-400 mx-6" />
            <h1 className="text-sm text-gray-400">Features</h1>
            <hr className="w-36 mt-2 border-gray-400 mx-6" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">
                Production upto 10,000 units per months
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">24/7 technical spport</p>
            </div>

            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">Access the production dashboard</p>
            </div>

            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">Initial setup guide</p>
            </div>
          </div>
        </div>

        <div className="card w-screen md:w-96 bg-[#3a3838] flex flex-col gap-5 mt-10 rounded-2xl p-4">
          <h1 className="text-2xl  text-white">Enterprise</h1>
          <p className="text-gray-300">
            This package provides full access to all premium features.
          </p>
          <h1 className="text-3xl font-semibold text-white">
            $99 <span className="text-gray-400 text-sm">/month</span>
          </h1>
          <button className="text-white text-lg border-white border-2 rounded-3xl pt-1 pb-1 mx-6">
            Get Started
          </button>

          <div className="flex flex-row gap-4">
            <hr className="w-36 mt-2 border-gray-400 mx-6" />
            <h1 className="text-sm text-gray-400">Features</h1>
            <hr className="w-36 mt-2 border-gray-400 mx-6" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">Unlimited production units</p>
            </div>

            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">Dedicated account manager</p>
            </div>

            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">Tailored manufacturing solutions</p>
            </div>

            <div className="flex flex-row gap-2">
              <FaCheckCircle className="w-4 h-4 text-gray-300 mt-1" />
              <p className="text-gray-300">
                Predictive production optimization
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-[#0C363C] flex flex-col justify-center gap-6 items-center mt-10 rounded-2xl w-full  md:max-w-[50rem] mb-4">
        <h1 className="text-white mt-6 text-2xl">Professional</h1>
        <p className="text-gray-400">
          Designed for greater flexibility, this solution offers <br /> advanced
          tools for custom tailoring to your needs.
        </p>
        <button className="bg-white text-xl text-[#0E363D] rounded-3xl w-32 p-2 cursor-pointer mb-4">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Plans;
