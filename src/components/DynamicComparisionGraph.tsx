"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DynamicComparisonGraphProps {
  percentile: number; // e.g., 90
}

const DynamicComparisonGraph: React.FC<DynamicComparisonGraphProps> = ({ percentile }) => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphRef.current) return;

    // Clear content
    d3.select(graphRef.current).selectAll("*").remove();

    // Set dimensions
    const containerWidth = graphRef.current.offsetWidth;
    const width = Math.min(containerWidth, 600);
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    // Create SVG
    const svg = d3
      .select(graphRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const chartG = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Generate data
    const data = d3.range(0, 101, 1).map((x) => {
      const mu1 = 30, sigma1 = 8, amplitude1 = 300;
      const y1 = amplitude1 * Math.exp(-((x - mu1) ** 2) / (2 * sigma1 ** 2));

      const mu2 = 70, sigma2 = 8, amplitude2 = 500;
      const y2 = amplitude2 * Math.exp(-((x - mu2) ** 2) / (2 * sigma2 ** 2));

      return { x, y: Math.round(y1 + y2) };
    });

    // Set scales
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const maxY = d3.max(data, (d) => d.y) || 1;
    const yScale = d3.scaleLinear().domain([0, maxY]).range([height, 0]).nice();

    // Draw line
    const lineGenerator = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveMonotoneX);

    chartG
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#4F46E5")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);

    // Draw points
    chartG
      .selectAll("circle.data-point")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "data-point")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 3)
      .attr("fill", "#4F46E5");

    // User line
    const userX = xScale(percentile);
    chartG
      .append("line")
      .attr("x1", userX)
      .attr("x2", userX)
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke", "gray")
      .attr("stroke-dasharray", "4,4");

    // Highlight point & box
    const userData = data.find((d) => d.x === percentile);
    if (userData) {
      const userY = yScale(userData.y);
      chartG
        .append("circle")
        .attr("cx", userX)
        .attr("cy", userY)
        .attr("r", 5)
        .attr("fill", "#4F46E5");

      const boxWidth = 120, boxHeight = 40;
      const boxX = userX + 10;
      const boxY = userY - boxHeight - 5;

      // Box bg
      chartG
        .append("rect")
        .attr("x", boxX)
        .attr("y", boxY)
        .attr("width", boxWidth)
        .attr("height", boxHeight)
        .attr("fill", "#fff")
        .attr("stroke", "#ccc")
        .attr("rx", 4)
        .attr("ry", 4);

      // Percentile text
      chartG
        .append("text")
        .attr("x", boxX + 5)
        .attr("y", boxY + 15)
        .style("font-size", "12px")
        .attr("fill", "#333")
        .text(`Percentile: ${percentile}%`);

      // Student count
      chartG
        .append("text")
        .attr("x", boxX + 5)
        .attr("y", boxY + 30)
        .style("font-size", "12px")
        .attr("fill", "#333")
        .text(`Students: ${userData.y}`);
    }

    // Draw axes
    chartG
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(10));
    chartG.append("g").call(d3.axisLeft(yScale).ticks(5));

    // Add labels
    chartG
      .append("text")
      .attr("x", width)
      .attr("y", height + margin.bottom - 5)
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      .attr("fill", "#333")
      .text("Percentile (%)");

    chartG
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 15)
      .attr("x", -margin.top)
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      .attr("fill", "#333")
      .text("Number of Students");
  }, [percentile]);

  return (
    <div>
      <p className="text-gray-700 mb-4">
        <strong>You scored {percentile}% percentile</strong> which is lower than the average percentile
        <strong>72%</strong> of all engineers who took this assessment.
      </p>
      <div ref={graphRef} className="w-full" />
    </div>
  );
};

export default DynamicComparisonGraph;
