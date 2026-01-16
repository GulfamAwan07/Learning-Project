import { FaDropbox } from "react-icons/fa6";
import { AiTwotoneMessage } from "react-icons/ai";
import { FaCloudRain } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { GiClout } from "react-icons/gi";
import { GiCloudUpload } from "react-icons/gi";
import { FcCloseUpMode } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Circle = ({ count = 3, paddingPercent = 16 }) => {
  const maxSize = 100 - paddingPercent;
  useGSAP(() => {
    gsap.fromTo(
      ".circle",
      {
        opacity: 0,
        x: -90,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".circle",
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".icons",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.4,
        scrollTrigger: {
          trigger: ".icons",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);
  return (
    <div className="relative w-[80vw] max-w-[450px] bg-[#d3f8b6] rounded-2xl aspect-square mx-auto mb-4 circle">
      {[...Array(count)].map((_, index) => {
        const size = maxSize - index * (maxSize / count);
        return (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="rounded-full border-2 border-[#b1f07e] "
              style={{
                width: `${size}%`,
                height: `${size}%`,
              }}
            >
              <div className="absolute flex flex-col w-full h-full top-0 left-0 items-center justify-center gap-10">
                <div className="icons flex flex-row top-10 justify-evenly w-full mt-4">
                  <FaDropbox className="w-8 h-8 bg-white rounded-xl p-1" />
                  <AiTwotoneMessage className="w-8 h-8 bg-white rounded-xl p-1" />
                  <FaCloudRain className="w-8 h-8 bg-white rounded-xl p-1" />
                </div>

                <div className="flex flex-row gap-12 md:gap-22 ">
                  <div className="icons flex flex-row gap-14 md:gap-26">
                    <FaDropbox className="w-7 h-7 p-1 bg-white rounded-xl" />
                    <AiTwotoneMessage className="w-7 bg-white h-7 p-1 rounded-xl" />
                  </div>
                  <div className="icons flex flex-row gap-14 md:gap-26">
                    <GiCloudUpload className="w-7 h-7 bg-white rounded-xl p-1" />
                    <FaCloudRain className="w-7 h-7 bg-white rounded-xl p-1" />
                  </div>
                </div>

                <div className="icons flex flex-row w-full justify-evenly mb-4">
                  <FaDropbox className="w-7 h-7 bg-white rounded-xl p-1" />
                  <AiTwotoneMessage className="w-7 h-7 bg-white rounded-xl p-1" />
                  <FaCloudRain className="w-7 h-7 bg-white rounded-xl p-1" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
