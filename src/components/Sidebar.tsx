import { RiBarChartFill } from "react-icons/ri";
import { TfiMedallAlt } from "react-icons/tfi";
import { LuStickyNote } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="w-[15%] bg-white text-white border-r-[2px] border-gray-100 top-0 left-0 hidden lg:block">
      {/* <div className="p-4 mt-5 text-2xl text-black font-bold flex flex-row justify-center"><img src={whatBytes} className="bg-blend-screen size-10"/>WhatBytes</div> */}
      <nav className="flex-1 pr-3">
        <ul className='mt-10'>
        <li className="px-4 py-4 hover:bg-blue-100 cursor-pointer text-gray-600 font-bold rounded-r-[25px] flex gap-4 items-center hover:text-blue-600 mb-1"><RiBarChartFill />Dashboard</li>
          <li className="px-4 py-4 bg-blue-100 cursor-pointer text-blue-600 font-bold rounded-r-[25px] flex gap-4 items-center"><TfiMedallAlt />Skill Test</li>
          <li className="px-4 py-4 hover:bg-blue-100 cursor-pointer text-gray-600 font-bold rounded-r-[25px] flex gap-4 items-center hover:text-blue-600 mt-1"><LuStickyNote />Internship</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;