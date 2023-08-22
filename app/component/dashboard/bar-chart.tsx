"use client";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import TagCard from "./tag-card";

interface IChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface IChartProps {
  title: string;
  color: {
    color1: string;
    color2: string;
  };
  width: string;
  graphType: string;
  data: IChartData[];
}

function BarGraphChart({ title, data, color, graphType, width }: IChartProps) {
  return (
    <div
      className={`graph-chart ${width}  min-w-[300px] min-h-[350px] h-[350px] flex flex-col gap-3 bg-white p-6 shadow-sm rounded-2xl`}
    >
      <h1 className="graph-title text-xl font-semibold text-dark-text">
        {title}
      </h1>

      <ResponsiveContainer
        width="100%"
        height={graphType === "chartReality" ? 170 : 270}
      >
        <BarChart
          barCategoryGap="25%"
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
          {graphType === "barChart" ? (
            <>
              <CartesianGrid strokeDasharray=" 3 3" />

              <XAxis dataKey="name" />
              <YAxis />
            </>
          ) : (
            ""
          )}
          <Tooltip />

          {graphType === "chartReality" ? "" : <Legend iconType="circle" />}

          <Bar
            dataKey="pv"
            {...(graphType === "mixed" ? { stackId: "a" } : "")}
            fill={color?.color1}
          />
          <Bar
            dataKey="uv"
            {...(graphType === "mixed" ? { stackId: "a" } : "")}
            fill={color?.color2}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="tag-container w-full flex flex-col gap-3">
        {graphType === "chartReality" ? (
          <>
            <TagCard
              title="Reality Sales"
              location="Global"
              percentage="8.8823"
              icon={HiMiniShoppingBag}
              bgcolor="#E2FFF3"
              textcolor={color?.color1}
            />
            <TagCard
              title="Target Sales"
              location="Global"
              percentage="10.8823"
              bgcolor="#FFF4DE"
              icon={FaRegMoneyBill1}
              textcolor={color?.color2}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BarGraphChart;
