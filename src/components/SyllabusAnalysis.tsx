import React from "react";

const SyllabusAnalysis = () => {
  const data = [
    { label: "HTML Tools, Forms, History", value: 80 },
    { label: "Tags & References in HTML", value: 60 },
    { label: "Tables & References in HTML", value: 24 },
    { label: "Tables & CSS Basics", value: 96 },
  ];

  return (
    <div>
      <div className="mb-4 p-3">
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-700 pb-4">HTML Tools, Forms, History</span>
          <span className="text-blue-500 font-bold">80%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-[80%]"></div>
        </div>
      </div>
      <div className="mb-4 p-3">
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-700 pb-4">Tags & References in HTML</span>
          <span className="text-orange-500 font-bold">60%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full w-[60%]"></div>
        </div>
      </div>
      <div className="mb-4 p-3">
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-700 pb-4">Tables & References in HTML</span>
          <span className="text-red-500 font-bold">24%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-red-500 h-2 rounded-full w-[24%]"></div>
        </div>
      </div>
      <div className="mb-4 p-3">
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-gray-700 pb-4">Tables & CSS Basics</span>
          <span className="text-green-500 font-bold">96%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-[96%]"></div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusAnalysis;