

"use client"; // For Next.js App Router with client components

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SkillTestCard from "@/components/SkillTestCard";
import QuickStatistics from "@/components/QuickStatistics";
import DynamicComparisonGraph from "@/components/DynamicComparisionGraph";
import QuestionAnalysisChart from "@/components/QuestionAnalysisChart";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import UpdatePopup from "@/components/UpdatePopup";
import { BsGraphUpArrow } from "react-icons/bs";


export default function HomePage() {
  // State for your data
  const [rank, setRank] = useState(7);
  const [percentile, setPercentile] = useState(50);
  const [correctAnswers, setCorrectAnswers] = useState(12);
  const [showPopup, setShowPopup] = useState(false);

  // Handlers for the update popup
  const handleUpdateClick = () => {
    setShowPopup(true);
  };

  const handleSave = (updatedValues: {
    rank: number;
    percentile: number;
    score: number;
  }) => {
    setRank(updatedValues.rank);
    setPercentile(updatedValues.percentile);
    setCorrectAnswers(updatedValues.score);
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (

    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

    

      {/* Main layout: Sidebar on the left, content on the right */}
      <div className="flex flex-col ">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-4 lg:p-8   absolute  left-[16%]  w-[80%]">
          {/*
            Create a 2-column layout on larger screens (lg: breakpoint).
            The left column will hold:
              - Skill Test Card
              - Quick Statistics
              - Comparison Graph
            The right column will hold:
              - Syllabus Wise Analysis
              - Question Analysis
          */}
           <span className="text-2xl  font-semibold text-gray-00 mb-2 block">
                  Skill Test
                </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            
            <div className="space-y-4">
              {/* Skill Test Card */}
              
              <div>
               
                <SkillTestCard onUpdateClick={handleUpdateClick} />
              </div>

              {/* Quick Statistics */}
              <QuickStatistics
                rank={rank}
                percentile={percentile}
                correctAnswers={correctAnswers}
              />

              {/* Comparison Graph */}
              <div className="bg-white rounded-lg border-2 border-gray-100 p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold">Comparison Graph</h2>
                  <div className="bg-gray-100 w-[50px] h-[50px] border-gray-200 border-2 rounded-full flex items-center justify-center">
                    <BsGraphUpArrow />
                  </div>
                </div>
                <DynamicComparisonGraph percentile={percentile} />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Syllabus Wise Analysis */}
              <div className="bg-white rounded-lg border-2 border-gray-100 p-4">
                <h2 className="text-sm font-bold mb-2">Syllabus Wise Analysis</h2>
                <SyllabusAnalysis />
              </div>

              {/* Question Analysis */}
              <div className="bg-white rounded-lg border-2 border-gray-100 p-4 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold">Question Analysis</h2>
                  <span className="text-sm font-bold text-blue-700">
                    {correctAnswers}/15
                  </span>
                </div>
                <QuestionAnalysisChart correct={correctAnswers} total={15} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Popup */}
      {showPopup && (
        <UpdatePopup
          onSave={handleSave}
          onClose={handleClose}
          defaultValues={{ rank, percentile, score: correctAnswers }}
        />
      )}
    </div>


  
  );
}


