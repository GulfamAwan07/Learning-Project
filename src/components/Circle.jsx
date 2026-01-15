import { FaDropbox } from "react-icons/fa6";
import { AiTwotoneMessage } from "react-icons/ai";
import { FaCloudRain } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { GiClout } from "react-icons/gi";
import { GiCloudUpload } from "react-icons/gi";
import { FcCloseUpMode } from "react-icons/fc";
import { FcLock } from "react-icons/fc";


const Circle = ({ count = 3 , paddingPercent = 16 }) => {
     const maxSize = 100 - paddingPercent;
  return (
    <div className="relative w-[80vw] max-w-[450px] bg-[#d3f8b6] rounded-2xl aspect-square mx-auto mb-4">
      {[...Array(count)].map((_, index) => {
        const size = maxSize - (index * (maxSize / count));
        return (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="rounded-full border-2 border-[#b1f07e]"
              style={{
                width: `${size}%`,
                height: `${size}%`,
              }}
            >
            <div className="absolute flex flex-col w-full h-full top-0 left-0 items-center justify-center gap-10">
                <div className="flex flex-row top-10 justify-evenly w-full mt-4">
                <FaDropbox  className="w-8 h-8 bg-white rounded-xl p-1" />
                <AiTwotoneMessage className="w-8 h-8 bg-white rounded-xl p-1" />
               <FaCloudRain className="w-8 h-8 bg-white rounded-xl p-1"/>
               </div>

               <div className="flex flex-row gap-12 md:gap-22 ">
                   <div className="flex flex-row gap-14 md:gap-26">
                       <FaDropbox  className="w-7 h-7 p-1 bg-white rounded-xl" />
                       <AiTwotoneMessage className="w-7 bg-white h-7 p-1 rounded-xl" />
                    </div>
                    <div className="flex flex-row gap-14 md:gap-26">   
                       <GiCloudUpload className="w-7 h-7 bg-white rounded-xl p-1"/>
                       <FaCloudRain className="w-7 h-7 bg-white rounded-xl p-1"/>
                    </div>
               </div>

               <div className="flex flex-row w-full justify-evenly mb-4">
                <FaDropbox  className="w-7 h-7 bg-white rounded-xl p-1" />
                <AiTwotoneMessage className="w-7 h-7 bg-white rounded-xl p-1" />
                <FaCloudRain className="w-7 h-7 bg-white rounded-xl p-1"/>
               </div>

            </div>


                {/* <div className="absolute right-4 bottom-40">
                            <GiClover className="w-7 h-7"/>
                </div>

                <div className="absolute bottom-40 right-17">
                    <GiClout className="w-7 h-7"/>
                </div> */}

                {/* <div className="absolute bottom-5 left-40 ">
                    <GiCloudUpload className="w-7 h-7"/>
                </div>

                <div className="absolute top-29 left-40">
                    <FcCloseUpMode className="w-7 h-7 "/>
                </div>

                <div className="absolute bottom-31 left-40">
                    <FcLock className="w-7 h-7" />

                </div> */}
                

            </div>

            

          </div>
        );
      })}
    </div>
  );
};

export default Circle;
