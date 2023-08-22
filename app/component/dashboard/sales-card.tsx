import React from "react";
import { IconType } from "react-icons";

interface Icard {
  card: {
    id: number;
    number: string;
    title: string;
    percentage: string;
    icon: IconType;
    bgColor: string;
    iconColor: string;
  };
}

function SalesCard({ card }: Icard) {
  return (
    <div
      className={`card-wrapper rounded-2xl p-4 flex flex-col gap-4`}
      style={{ background: `${card?.bgColor}` }}
    >
      <div
        className={`icon-wrapper w-10 h-10 rounded-[50%] flex justify-center items-center text-white`}
        style={{ background: `${card?.iconColor}` }}
      >
        <card.icon size={20} className="icon" />
      </div>

      <div className="card-items flex flex-col gap-2">
        <h1 className="card-numbers text-lg font-semibold ">{card?.number}</h1>
        <h1 className="card-title text-xs font-medium text-[#425166]">
          {card?.title}
        </h1>
        <p className="card-percentage text-[10px] font-medium text-[#4079ED]">
          {card?.percentage}
        </p>
      </div>
    </div>
  );
}

export default SalesCard;
