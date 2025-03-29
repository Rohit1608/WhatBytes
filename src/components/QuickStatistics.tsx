"use client";

import React from "react";
import { FaTrophy, FaClipboard, FaCheckSquare } from "react-icons/fa";

interface QuickStatisticsProps {
  rank: number;
  percentile: number;
  correctAnswers: number;
}

const QuickStatistics: React.FC<QuickStatisticsProps> = ({ rank, percentile, correctAnswers }) => {
  return (
    <div className="bg-white rounded-lg p-4 w-full mt-3 border-2 border-gray-100">
      <h2 className="text-sm font-bold sm:text-lg">Quick Statistics</h2>
      <div className="sm:grid-cols-3 gap-4 sm:gap-0 text-center sm:flex sm:justify-between">
        {/* Rank Section */}
        <div className="flex flex-row items-center ml-7 mt-2 mb-2">
          <div className="bg-gray-100 w-[70px] h-[70px] border-gray-200 border-2 rounded-full flex items-center justify-center">
            <FaTrophy className="text-yellow-500 sm:text-3xl text-2xl mb-2" />
          </div>
          <div className="flex flex-col items-start ml-4">
            <span className="text-2xl font-bold">{rank}</span>
            <span className="text-gray-500 text-sm mt-1">Your Rank</span>
          </div>
        </div>
        <div className="hidden lg:block h-[100px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

        {/* Percentile Section */}
        <div className="flex flex-row items-center ml-7 mt-2 mb-2">
          <div className="bg-gray-100 w-[70px] h-[70px] border-gray-200 border-2 rounded-full flex items-center justify-center">
            <FaClipboard className="text-blue-500 sm:text-3xl text-2xl mb-2" />
          </div>
          <div className="flex flex-col items-start ml-4">
            <span className="text-2xl font-bold">{percentile}</span>
            <span className="text-gray-500 text-sm mt-1">PERCENTILE</span>
          </div>
        </div>
        <div className="hidden lg:block h-[100px] min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

        {/* Correct Answers Section */}
        <div className="flex flex-row items-center ml-7 mt-2 mb-2">
          <div className="bg-gray-100 w-[70px] h-[70px] border-gray-200 border-2 rounded-full flex items-center justify-center">
            <FaCheckSquare className="text-green-500 sm:text-3xl text-2xl mb-2" />
          </div>
          <div className="flex flex-col items-start ml-4">
            <span className="text-2xl font-bold">
              {correctAnswers} / 15
            </span>
            <span className="text-gray-500 text-sm mt-1">CORRECT ANSWERS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
