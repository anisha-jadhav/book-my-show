import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Mumbai
            <BiChevronDown />
          </span>
        </div>
        <div className="flex items-center flex-row  gap-3">
          <button className="bg-red-600 text-white px-2 py-1 text-sm text-bold rounded-lg">
            Use App
          </button>
          <div className="w-8 h-8">
            <BiSearch className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-6">
        <div className="w-20 h-10">
          <img
            src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            placeholder="Search for movies, events, plays, sports and activities"
            className="w-full bg-transparent border-none focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-around">
        <div className="flex items-center w-1/2 gap-6">
          <div className="w-20 h-10">
            <img
              src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus::outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white ">
            Mumbai <BiChevronDown />
          </span>

          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

// Main component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-800 px-4 py-3">
      {/* Mobile Screen Navbar*/}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium/tab Screen Navbar*/}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large Screen Navbar*/}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
