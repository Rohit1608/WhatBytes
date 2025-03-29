"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DynamicComparisonGraphProps {
  percentile: number;
}

const DynamicComparisonGraph: React.FC<DynamicComparisonGraphProps> = ({ percentile }) => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphRef.current) return; // Ensure ref is available

    const containerWidth = graphRef.current.offsetWidth;
    const width = Math.min(containerWidth, 400); // Set max width
    const height = width * 0.5; // Maintain aspect ratio
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    // Clear previous graph
    d3.select(graphRef.current).selectAll("*").remove();

    const svg = d3
      .select(graphRef.current)
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
      )
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Simulated data
    const data = d3.range(0, 100).map((d) => ({
      x: d,
      y: Math.sin(d / 10) * 40 + 50 + Math.random() * 5,
    }));

    // Scales
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    // Line generator
    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveMonotoneX);

    // Draw the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#4F46E5")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add data points
    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 2)
      .attr("fill", "#4F46E5");

    // Percentile line
    svg
      .append("line")
      .attr("x1", xScale(percentile))
      .attr("x2", xScale(percentile))
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke", "gray")
      .attr("stroke-dasharray", "4");

    // Label for percentile line
    svg
      .append("text")
      .attr("x", xScale(percentile) + 5)
      .attr("y", 10)
      .attr("fill", "gray")
      .text("Your Percentile");

    // Add X Axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    // X-Axis Label
    svg
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height + margin.bottom - 10)
      .text("Percentile (%)")
      .attr("fill", "#333");
  }, [percentile]);

  return (
    <div>
      <p className="text-gray-700 mb-4">
        <strong>You scored {percentile}% percentile</strong> which is lower than
        <br /> the average percentile <strong>72%</strong> of all the engineers who took
        this assessment.
      </p>
      <div ref={graphRef} className="w-full"></div>
    </div>
  );
};

export default DynamicComparisonGraph;
