import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import vector from "./images/LOGO-DSC.png";
import vector1 from "./images/DSC.png";
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
            </ul>
            <div onClick={handleNav} className="block md:hidden">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
