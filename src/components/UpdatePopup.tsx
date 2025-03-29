"use client";

import React, { useState } from "react";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";

interface DefaultValues {
  rank: number;
  percentile: number;
  score: number;
}

interface UpdatePopupProps {
  onSave: (values: DefaultValues) => void;
  onClose: () => void;
  defaultValues: DefaultValues;
}

interface Errors {
  rank?: string;
  percentile?: string;
  score?: string;
}

const UpdatePopup: React.FC<UpdatePopupProps> = ({ onSave, onClose, defaultValues }) => {
  const [rank, setRank] = useState<number>(defaultValues.rank);
  const [percentile, setPercentile] = useState<number>(defaultValues.percentile);
  const [score, setScore] = useState<number>(defaultValues.score);
  const [errors, setErrors] = useState<Errors>({});

  const validateInputs = (): boolean => {
    const newError: Errors = {};

    if (!rank || isNaN(rank) || rank < 1) {
      newError.rank = "required | should be a number";
    }
    if (!percentile || isNaN(percentile) || percentile < 0 || percentile > 100) {
      newError.percentile = "required | percentile 0-100";
    }
    if (!score || isNaN(score) || score < 0 || score > 15) {
      newError.score = "required | score 0-15";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSave = () => {
    if (validateInputs()) {
      onSave({ rank, percentile, score });
    }
  };

  return (
    <div className="fixed inset-0 backdrop-brightness-50  flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-[650px]  h-auto ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold mb-4">Update Scores</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML Logo"
            className="w-10 h-10 mr-4"
          />
        </div>

        {/* Rank Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center">
            <TbCircleNumber1Filled className="text-blue-900 text-xl mr-2" />
            <label className="text-sm font-medium text-gray-700">
              Update your <strong className="text-black">Rank</strong>
            </label>
          </div>
          <input
            type="text"
            className={`w-full sm:w-24 px-3 py-2 border ${
              errors.rank ? "border-red-500" : "border-blue-300"
            } rounded-md font-semibold   `}

            value={rank}
            placeholder="Rank"
            onChange={(e) => setRank(Number(e.target.value))}
          />
        </div>
        {errors.rank && <p className="text-red-500 text-sm">{errors.rank}</p>}

        {/* Percentile Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center">
            <PiNumberCircleTwoFill className="text-blue-900 text-xl mr-2" />
            <label className="text-sm font-medium text-gray-700">
              Update your <strong className="text-black">Percentile</strong>
            </label>
          </div>
          <input
            type="text"
            className={`w-full sm:w-24 px-3 py-2 border ${
              errors.percentile ? "border-red-500" : "border-blue-300"
            } rounded-md font-semibold`}
            value={percentile}
            placeholder="Percentile"
            onChange={(e) => setPercentile(Number(e.target.value))}
          />
        </div>
        {errors.percentile && (
          <p className="text-red-500 text-sm">{errors.percentile}</p>
        )}

        {/* Score Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center">
            <PiNumberCircleThreeFill className="text-blue-900 text-xl mr-2" />
            <label className="text-sm font-medium text-gray-700">
              Update your{" "}
              <strong className="text-black">
                Current Score (Out of 15)
              </strong>
            </label>
          </div>
          <input
            type="text"
            className={`w-full sm:w-24 px-3 py-2 border ${
              errors.score ? "border-red-500" : "border-blue-300"
            } rounded-md font-semibold`}
            value={score}
            placeholder="Score"
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </div>
        {errors.score && <p className="text-red-500 text-sm">{errors.score}</p>}

        {/* Buttons */}
        <div className="flex justify-end items-center space-x-4 mt-4">
          <button
            className="bg-white text-sm font-semibold text-blue-950 px-4 py-2 rounded-md border border-blue-950"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-950 text-sm font-semibold hover:bg-blue-800 text-white px-5 py-2 border-2 border-gray-700 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePopup;