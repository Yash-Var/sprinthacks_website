import React from "react";
import vector from "./images/Vector.png";
import vector1 from "./images/Vector(1).png";
import vector2 from "./images/Vector(2).png";
import path from "./images/path388.png";
// import "fontsource-staatliches";
const Navbar = () => {
  return (
    <div className="bg-newcolor p-10 ">
      <nav className="flex justify-between">
        <div>
          <div className="flex">
            <img src={vector} alt="vector" />
            <div className="pt-2 px-2">
              <img src={vector1} alt="vector1" className="h-6" />
              <img src={vector2} alt="vector2" className="" />
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <ul className="flex  text-white uppercase space-x-6 font-semibold text-2xl pt-2 pr-4 ">
            <li className="hover:text-blue-300 hover:underline">Home</li>
            <li className="hover:text-blue-300 hover:underline">About</li>
            <li className="hover:text-blue-300 hover:underline">Prizes</li>
            <li className="hover:text-blue-300 hover:underline">Tracks</li>
            <li className="hover:text-blue-300 hover:underline">Faqs</li>
            <li className="hover:text-blue-300 hover:underline">Sponsors</li>
            <li className="hover:text-blue-300 hover:underline">Contact us</li>
            <div className="">
              <img src={path} alt="" srcset="" className="-pt-4" />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
