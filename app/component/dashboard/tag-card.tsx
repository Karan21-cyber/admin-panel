import React from "react";
import { IconType } from "react-icons";

interface ITagType {
  title: string;
  location: string;
  percentage: string;
  icon: IconType;
 bgcolor:string;
 textcolor:string;
}

function TagCard({ ...props }: ITagType) {
 
  return (
    <div className="tag-wrapper flex gap-16">
      <div className="tag-content flex gap-6 items-center">
        <div className="tag-icon p-3 rounded-lg" style={{background:props?.bgcolor}}><props.icon  size={12}  style={{color:props?.textcolor}}/></div>
        <div className="tag-information">
          <h1 className="tag-title  text-[#151D48] text-xs font-semibold">{props?.title}</h1>
          <p className="tag-location   text-[#737791] text-xs font-semibold">{props?.location}</p>
        </div>
      </div>
      <h1 className="tag-percentage" style={{color:props?.textcolor}}>{props?.percentage}</h1>
    </div>
  );
}

export default TagCard;
