// Navbar.js
import React from "react";
import logo from "../assets/logo.jpeg";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 fixed top-0 w-full border-radius-5">
      <div className="mx-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
          <div className="text-white text-xl font-bold ml-2">Edustream</div>
          {/* Menu List */}
          <ul className="flex space-x-4" >
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <Link  to="/">Home</Link>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <Link to="/about" >About</Link>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Services
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Right side - Login Button and Profile Icon */}
        <div className="flex items-center space-x-4 mx-0">
          {/* Login Button */}
          <ul className="flex space-x-4 list-none">
            <li className="text-white bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
          </ul>
          {/* Profile Icon */}
          <div className="text-white">
            <img
              src={user}
              alt="Profile Icon"
              className="h-9 w-9 rounded-full cursor-pointer text-white rounded"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
