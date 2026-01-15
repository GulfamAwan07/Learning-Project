import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#020304] flex flex-col items-center w-full overflow-hidden px-4">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl mt-10 gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img src="/flag.png" className="w-8 h-8" />
            <h1 className="text-white font-semibold">Prodmast</h1>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our solutions make production <br className="hidden sm:block" />
            faster and cheaper. Contact us <br className="hidden sm:block" />
            for more info.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <h1 className="text-white font-semibold">Get in Touch</h1>
          <p className="text-gray-500 text-sm">hello@prodmast.com</p>
          <div className="flex gap-6">
            <CiLinkedin className="w-6 h-6 text-white bg-[#2A2A2A] p-0.5" />
            <FaInstagram className="w-6 h-6 text-white bg-[#2A2A2A] p-0.5" />
            <FaFacebook className="w-6 h-6 text-white bg-[#2A2A2A] p-0.5" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl h-px bg-[#2A2A2A] my-6" />

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mb-4 gap-4">
        <h1 className="text-gray-500 text-sm text-center md:text-left">
          ©2026 Prodmast, <br className="md:hidden" />
          All rights reserved
        </h1>

        <div className="flex gap-4 text-sm">
          <h1 className="text-gray-500">Terms & Conditions</h1>
          <h1 className="text-gray-500">Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
