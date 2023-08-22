"use client";
import { openFont, poppin } from "@/app/layout";
import React, { useEffect, useState } from "react";

interface IProduct {
  id: number;
  title: string;
  popularity: number;
  sales: number;
  textcolor: string;
  lightColor: string;
}

interface IChartProps {
  title: string;
  data: IProduct[];
}

function TotalProduct({ title, data }: IChartProps) {
  return (
    <div className="graph-chart w-[40%] min-h-[350px] h-[350px] flex flex-col gap-2 bg-white p-6 shadow-sm rounded-2xl ">
      <h1 className="graph-title text-xl font-semibold text-dark-text">
        {title}
      </h1>

      <div className="w-full h-[300px] overflow-hidden overflow-y-scroll">
        <table className="w-full">
          <thead>
            <tr
              className={` ${openFont.className}  border-b text-[#96A5B8] font-normal text-[13px]`}
            >
              <th className="p-2">S.No.</th>
              <th className="p-2">Name</th>
              <th className="p-2">Popularity</th>
              <th className="p-2">Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item?.id}
                className={`${poppin.className} border-b text-sm text-[#444A6D] font-normal `}
              >
                <td className="p-2">{item?.id}</td>
                <td className="p-2">{item?.title}</td>
                <td className="p-2">
                  <div
                    className="range relative w-[150px] h-[5px] rounded-lg"
                    style={{ background: item?.lightColor }}
                  >
                    <div
                      className="range absolute w-full h-full top-0 rounded-lg"
                      style={{
                        width: `${item?.popularity * 1.5}px`,
                        background: item?.textcolor,
                      }}
                    ></div>
                  </div>
                </td>
                <td className="p-2">
                  <h1
                    className={`text-[13px] font-normal text-center px-3 py-1 rounded-lg`}
                    style={{
                      color: item?.textcolor,
                      background: item?.lightColor,
                      border: `1px solid ${item?.textcolor}`,
                    }}
                  >
                    {item?.sales}%
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TotalProduct;
