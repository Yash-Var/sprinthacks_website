import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiOpenSourceFill } from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";
import Dsc_logo from "./images/DSC_logo_name.png";
import Vector from "./images/Vector.png";
const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // console.log('useEffect');
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
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 text-white">
        <img src={Dsc_logo} alt="logo " className="logo_dsc" />
        <ul className="hidden md:flex">
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text">
            <a href="">Home</a>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text">
            <a href="www.google.com">About</a>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text">
            <a href="www.google.com">Prizes</a>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text">
            <a href="fosscu-blog.vercel.app">Tracks</a>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text">
            <a href="www.google.com">Faqs</a>
          </li>
          <li className="p-4 text-2xl navbar hover:text-blue-300 hover:underline navbar_text">
            <a href="www.google.com">Sponsors</a>
          </li>
          <li className="p-4 text-2xl whitespace-nowrap  navbar hover:text-blue-300 hover:underline navbar_text">
            <a href="www.google.com ">Contact Us</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <center>
            <img src={Vector} alt="vector" className="pt-4" />
          </center>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Home</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">About</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Prizes</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="https://github.com/FOSS-Community">Tracks</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Faqs</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Sponsors</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="www.google.com">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
