"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface IChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface IChartProps {
  title: string;
  data: IChartData[];
  width: string;
}

function GraphChart({ title, data, width }: IChartProps) {
  return (
    <div
      className={`graph-chart  ${width} h-[325px] flex flex-col gap-3 bg-white p-6 shadow-sm rounded-2xl`}
    >
      <h1 className="graph-title text-xl font-semibold text-dark-text">
        {title}
      </h1>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.7} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Legend iconType="square" />

          <Line type="natural" dataKey="pv" stroke="#8884d8" strokeWidth={3} />
          <Line type="natural" dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
          <Line type="natural" dataKey="amt" stroke="red" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphChart;
