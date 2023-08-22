"use client";
import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
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
}

function AreaGraphChart({ title, data }: IChartProps) {
  return (
    <div className="graph-chart  w-[28%] min-h-[350px] h-[350px] flex flex-col gap-3 bg-white p-5 shadow-sm rounded-2xl">
      <h1 className="graph-title text-xl font-semibold text-dark-text">
        {title}
      </h1>

      <ResponsiveContainer width="100%" height={270}>
        <AreaChart
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
          {/* <CartesianGrid strokeDasharray=" 3 3" /> */}
          {/* <XAxis dataKey="name" />
          <YAxis /> */}
          <Tooltip />
          <Legend />
          <Area
            type="natural"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            dot={{ stroke: '#8884d8', strokeWidth: 2,fill:"#8884d8" }}
          />
          <Area
            type="natural"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            dot={{ stroke: '#82ca9d', strokeWidth: 2 ,fill:'#82ca9d'}}
          />
          <Area
            type="natural"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
            dot={{ stroke: '#ffc658', strokeWidth: 2 ,fill:'#ffc658'}}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaGraphChart;
