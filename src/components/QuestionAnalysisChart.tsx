"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
// import target from "./public/target.png";

interface QuestionAnalysisChartProps {
  correct: number;
  total: number;
}

const QuestionAnalysisChart: React.FC<QuestionAnalysisChartProps> = ({ correct, total }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return; // Ensure the ref is available

    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2.5;
    const data = [correct, total - correct];

    // Clear any previous chart content
    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(["#4F46E5", "#E5E7EB"]);

    const pie = d3.pie<number>();
    const arc = d3
      .arc<d3.PieArcDatum<number>>()
      .innerRadius(50)
      .outerRadius(radius);

    svg
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(String(i)) as string);

    svg
      .append("image")
      .attr("xlink:href", "/target.png")
      .attr("x", -24) // Center the image horizontally
      .attr("y", -24) // Center the image vertically
      .attr("width", 48)
      .attr("height", 48);
  }, [correct, total]);

  return (
    <div>
      <p className="text-gray-700 mb-4">
        <strong>
          You scored {correct} question correct out of {total}
        </strong>
        . However it still needs some improvements.
      </p>
      <div className="flex justify-center" ref={chartRef}></div>
    </div>
  );
};

export default QuestionAnalysisChart;
