import React from "react";
import Circle from "./Circle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Integration = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        x: -90,
      },
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        delay: 0.4,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".para",
          start: "top 70%",
          once: true,
        },
      }
    );
  }, []);

 
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="flex flex-col md:flex-row gap-16 ">
        <div className="flex flex-col gap-8 mt-16 mb-4 ">
          <h1 className="para text-2xl font-bold md:text-4xl md:font-semibold font-sans mx-2">
            Empowering Top Companies <br />
            with Seamless Integrations
          </h1>
          <p className="para text-gray-500  mx-2">
            Experience seamless connections with our innovative solutions,
            designed <br />
            to effortlessly integrate with your existing systems, enhance
            productivity, <br />
            and drive your business towards greater success.
          </p>
          <button className="para bg-[#d3f8b6] text-black w-32 p-2 rounded-2xl mx-2 ">
            Work With US
          </button>
        </div>

        {/* <div className="w-[30rem] h-[26rem] relative bg-[#d3f8b6] flex justify-center items-center mb-4 rounded-2xl">
                <div className="w-[30rem] h-[26rem] flex justify-center items-center rounded-full border-2 border-[#bee2a2]">
                    <div className="w-[25rem] h-[21rem] flex justify-center items-center rounded-full border-2 border-[#bee2a2]"></div>
                </div>
            </div> */}

        <Circle id="circle" count={3} />
      </div>
    </div>
  );
};
export default Integration;
