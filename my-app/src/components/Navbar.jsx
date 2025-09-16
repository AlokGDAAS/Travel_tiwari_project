import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CgMenuLeft } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
  
      <div className=" bg-transparent md:py-[1.5vw] py-[6vw] px-[3vw] nav_bar fixed top-0 md:w-full w-[100vw]  font_16 z-20">
        <div className="bg-white md:rounded-full rounded-[2vw] md:px-[1.5vw] px-[4vw]  md:py-[1.25vw] py-[4vw] flex justify-between items-center shadow-lg">
          <div>
          <img src={assets.logo} alt="" className="md:w-[9vw] w-[30vw]"/>
        </div>


            <div className="border-2 border-gray-500 p-[0.5vw] rounded md:hidden ">
              <BiMenuAltRight className="text-2xl" onClick={() => setShowMenu(true)} />
            </div>

            {/*--------------------- mobile-menu ------------------------------- */}
            <div
              className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white z-20 transition-transform duration-300 md:hidden ${
                showMenu ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between px-5 py-6">
                <img src={assets.logo} alt="logo" className="w-36" />
                <img
                  onClick={() => setShowMenu(false)}
                  src={assets.cross_icon}
                  alt="close"
                  className="w-7 cursor-pointer"
                />
              </div>

              <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                <li onClick={() => setShowMenu(false)}>
                  <p>Home</p>
                </li>
                <li onClick={() => setShowMenu(false)}>
                  <p className="px-4 py-2 rounded inline-block">All Doctors</p>
                </li>
                <li onClick={() => setShowMenu(false)}>
                  <p className="px-4 py-2 rounded inline-block">About</p>
                </li>
                <li onClick={() => setShowMenu(false)}>
                  <p className="px-4 py-2 rounded inline-block">Contact</p>
                </li>
              </ul>
            </div>


        <div className=" gap-[2.5vw] font-bold justify-between hidden md:flex">
          <div className="hover:text-[var(--primary)]">Home</div>
          <div className="hover:text-[var(--primary)]">Tours</div>
          <div className="hover:text-[var(--primary)]">Destinations</div>
          <div className="hover:text-[var(--primary)]">Pages</div>
          <div className="hover:text-[var(--primary)]">Blogs</div>
          <div className="hover:text-[var(--primary)]">Contact</div>
        </div>


        <div className="md:flex hidden gap-[1vw] ">

          <div className="flex items-center border rounded-full px-[1.25vw] py-[0.5vw] font_18"><CiSearch/></div>
          <div className="flex items-center border rounded-full px-[0.75vw] py-[0.5vw] font_28"><CgMenuLeft/></div>
          <div className="group bg-[var(--primary)] text-white px-[1.5vw] py-[1vw] rounded-full font-bold  hover:bg-black transition-all ease-out duration-300">
            <span className="group-hover:pr-[1vw] transition-all ease-out duration-300">Get A Quote </span><span className=' '> ➺</span></div>
        </div>

        </div>

      </div>

  );
};

export default Navbar;
