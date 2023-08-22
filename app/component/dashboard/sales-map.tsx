"use client";
import Image from "next/image";
import React from "react";
import WorldMap from "./world-map";

interface IChartProps {
  title: string;
}

function SalesMap({ title }: IChartProps) {
  const handleCountryHover = (
    e: React.MouseEvent<SVGElement>,
    countryName: string
  ) => {
    e.preventDefault();
    console.log(countryName);
  };
  return (
    <div className="graph-chart min-w-[420px] w-[28%]  min-h-[350px] h-[350px] flex flex-col gap-3 bg-white p-5 shadow-sm rounded-2xl">
      <h1 className="graph-title text-xl font-semibold text-dark-text">
        {title}
      </h1>
      <div className="map-image min-w-[500px] h-full">
        <WorldMap />
      </div>
    </div>
  );
}

export default SalesMap;
