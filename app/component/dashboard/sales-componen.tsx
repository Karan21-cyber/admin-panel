import { data } from "@/utils/dashboard/sales-data";
import React from "react";
import { BiExport } from "react-icons/bi";
import SalesCard from "./sales-card";

function RecentSales({width}:{width:string}) {
  return (
    <div className={`recent-sales-components  ${width} flex flex-wrap flex-col p-5   gap-10 bg-white shadow-sm rounded-2xl`}>

      <div className="recent-header flex justify-between items-center">
        <div className="recent-highlight flex flex-col gap-1">
          <h1 className="recent-titile text-xl font-semibold text-dark-text">Today's Sales</h1>
          <h1 className="recent-summary text-base font-normal text-[#737791]">Sales Summery</h1>
        </div>
        <button className="recent-exportbun flex gap-2 px-3 py-2 border border-[#C3D3E2]  rounded-lg">
          <BiExport size={16} />
          <h1 className="export-btn font-medium text-sm ">Export</h1>
        </button>
      </div>

      <div className="sales-card-contianer flex justify-around gap-4 flex-wrap">
        {
            data?.map((card) => (
            <SalesCard key={card?.id} card={card} />
            ))
        }
      </div>

    </div>
  );
}

export default RecentSales;
