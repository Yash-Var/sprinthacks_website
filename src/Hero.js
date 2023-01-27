import React from "react";
import Main from "./images/MainImage(1).png";
import shape from "./images/Shape.png";
import path268 from "./images/path268.png";
import path26 from "./images/path268(2).png";
import vector3 from "./images/Vector(3).png";
import vector4 from "./images/Vector(4).png";
import group from "./images/Group4.png";
const Hero = () => {
  return (
    <div>
      <div className="px-40 py-5 flex">
        <div className="relative">
          <img src={path268} className="pl-64 pt-8" />
          <img src={Main} className="pt-4 pl-28 -pb-8 z-10" />
          <img src={shape} alt="" srcset="" className="z-0" />
          <img src={path268} className="pl-4 w-12  pt-8" />
        </div>
        <div>
          <img src={path26} className="pl-[650px]" />
          <div className="text-right pt-52 pl-72 space-y-4">
            <h1 className="main text-white text-7xl">SprintHacks 2023</h1>
            <h1 className="navbar text-white text-6xl">
              9TH FEB - 10TH FEB'23
            </h1>
            <button className="bg-white rounded  px-14 py-4">
              <div className="flex space-x-4">
                <div>
                  <img src={vector3} />
                  {/* <img src={vector4} /> */}
                </div>
                <h1 className="text-xl font-mono pt-1 text-gray-800 ">
                  Apply with Devfolio
                </h1>
              </div>
            </button>
          </div>
          <img src={path26} className="pt-44 pl-72" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
