import React, { useState } from "react";
import vector from "./images/Vector.png";
import vector1 from "./images/Vector(1).png";
import vector2 from "./images/Vector(2).png";
import path from "./images/path388.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import "fontsource-staatliches";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="bg-newcolor py-10">
        <nav className="flex justify-around ">
          <div>
            <div className="flex image_navbar ">
              <img src={vector} alt="vector" />
              <div className="pt-2 px-2">
                <img src={vector1} alt="vector1" className="h-6" />
                <img src={vector2} alt="vector2" className="" />
              </div>
            </div>
          </div>
          <div className="flex">
            <ul className="flex  text-white uppercase space-x-6 font-semibold text-2xl listtt pt-2 navbar_ul navbar">
              <li className="hover:text-blue-300 hover:underline">Home</li>
              <li className="hover:text-blue-300 hover:underline">About</li>
              <li className="hover:text-blue-300 hover:underline">Prizes</li>
              <li className="hover:text-blue-300 hover:underline">Tracks</li>
              <li className="hover:text-blue-300 hover:underline">Faqs</li>
              <li className="hover:text-blue-300 hover:underline">Sponsors</li>
              <li className="hover:text-blue-300 hover:underline">
                Contact us
              </li>
              {/* <i class="fa-solid fa-bars invisible menu "></i> */}
            </ul>
            <div onClick={handleNav} className="block md:hidden">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>
        </nav>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <center>
            {/* <RiOpenSourceFill size={65} color="green" /> */}
            <h1 className="w-full text-3xl font-bold text-[#0DFF1C] m-4">
              FOSSCU
            </h1>
          </center>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Contact</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Contact</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Contact</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="https://github.com/FOSS-Community">Projects</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
