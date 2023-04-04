import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiOpenSourceFill } from "react-icons/ri";
import { Link } from "react-scroll";
import Dsc_logo from "../assests/images/DSC_logo_name.png";
import Vector from "../assests/images/Vector.png";
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 text-white ">
        <img src={Dsc_logo} alt="logo " className="logo_dsc" />
        <ul className="hidden md:flex ul_navbar">
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link to="" spy={true} smooth={true} offset={-100} duration={800}>
              Home
            </Link>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              About
            </Link>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="prizes"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Prizes
            </Link>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="tracks"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Tracks
            </Link>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="judges"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              JUDGES
            </Link>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Team
            </Link>
          </li>
          {/* <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="faqs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Faqs
            </Link>
          </li> */}
          {/* <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="sponsor"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Sponsors
            </Link>
          </li> */}
          <li className="p-4 text-2xl whitespace-nowrap  navbar hover:text-blue-300 hover:underline navbar_text cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden z-20 menu_top">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-newcolor ease-in-out duration-500 z-0 nav_nav"
              : "fixed right-[-100%] nav_nav"
          }
        >
          <img src={Vector} alt="vector" className="pt-4 ml-10 invisible" />

          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to=""
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                About
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="prizes"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                Prizes
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="tracks"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
              >
                Tracks
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="judges"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                judges
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                Team
              </Link>
            </li>
            {/* <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="judges"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
              >
                JUDGES
              </Link>
            </li> */}
            {/* <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="faqs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                Faqs
              </Link>
            </li> */}
            {/* <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="sponsor"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                Sponsors
              </Link>
            </li> */}
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-blue-400">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setNav(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
