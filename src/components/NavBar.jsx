import React, { useState } from "react";
import Logo from "../assets/Karthik.png";
import { FaChevronRight } from "react-icons/fa6";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className=" text-red-50 bg-gray-950 z-50 w-full -mb-7 py-3 fixed">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:p-0">
        {/* logo section */}
        <div>
          <a href="/">
            <img src={Logo} alt="user-logo" className="w-[170px]" />
          </a>
        </div>
        {/* menu section */}
        <nav className=" hidden md:block">
          <ul className="flex gap-7 text-xl items-center font-semibold text-white">
            <a href="/">
              <li className="cursor-pointer">Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#education">
              <li>Education & Experience</li>
            </a>
            <a href="#project">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <button className="flex items-center gap-1 px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33cccc,0_0_15px_#33cccc,0_0_30px_#33cccc] shadow-blue-500 border-blue-400 border-2">
                Contact
                <FaChevronRight />
              </button>
            </a>
          </ul>
        </nav>
        <div className="md:hidden text-white text-4xl">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default NavBar;
