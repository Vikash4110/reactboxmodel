import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full py-4 bg-gray-900">
      <div className="flex justify-between items-center w-full lg:w-auto px-4 lg:px-0">
        <Link className="mx-auto lg:ml-[75px] text-green text-3xl text-green-500" to="/">
         <h1>BoxModelReact</h1>
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-x-6 text-white lg:mr-9 text-xl text-center">
          <li>
            <Link className="hover:text-green-500" to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-500" to="/courses" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-500" to="/internship" onClick={toggleMenu}>
             Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
