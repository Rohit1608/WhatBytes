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
import App from "./skill-test/page";

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

    <App/>
    
  );
}
