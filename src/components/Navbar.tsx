// import logo from "/public/whatbytes-logo.png"; // Replace with your logo path
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white p-4 border-2 rounded border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src='/whatbytes-logo.png'  className="h-10 w-auto mr-2" />
        <span className="text-2xl text-black font-bold">WhatBytes</span>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-2 border-2 rounded p-1  border-blue-200">
        <FaCircleUser className="w-5 h-5 rounded-full"/>
        <span className="font-medium text-gray-900">Rahil Siddique</span>
      </div>
    </nav>
  );
};

export default Navbar;