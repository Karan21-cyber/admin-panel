import { data } from "@/utils/dashboard/visitors-data";
import React from "react";
import RecentSales from "./component/dashboard/sales-componen";
import GraphChart from "./component/dashboard/graph-chart";
import BarGraphChart from "./component/dashboard/bar-chart";
import AreaGraphChart from "./component/dashboard/area-chart";
import TotalProduct from "./component/dashboard/total-product";
import { product } from "@/utils/dashboard/total-product";
import SalesMap from "./component/dashboard/sales-map";

interface IData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export default function Home() {
  const gdata: IData[] = data;
  const revenueColor = {
    color1: "#0095FF",
    color2: "#00E096",
  };

  const targetColor = {
    color1: "#27AE60",
    color2: "#FFA412",
  };

  return (
    <main className="overview-container flex flex-col  gap-7">
      <div className="flex gap-4 flex-wrap">
        <RecentSales width="min-w-[650px] w-[55%]" />
        <GraphChart
          title="Visitor Insights"
          data={gdata}
          width="min-w-[475px] w-[40%]"
        />
      </div>

      <div className="flex w-full gap-4 ">
        <BarGraphChart
          width="w-[40%]"
          title="Total Revenue"
          data={gdata}
          color={revenueColor}
          graphType="barChart"
        />

        <AreaGraphChart title="Customer Satisfaction" data={gdata} />

        <BarGraphChart
          width="w-[28%]"
          title="Target vs Reality"
          data={gdata}
          color={targetColor}
          graphType="chartReality"
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        <TotalProduct title="Top Products" data={product} />

        <SalesMap title="Sales Mapping by Country" />

        <BarGraphChart
          width="w-[28%]"
          title="Volume vs Service Level"
          data={gdata}
          color={revenueColor}
          graphType="mixed"
        />
      </div>
    </main>
  );
}
