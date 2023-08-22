import React from "react";
interface IButton{
    className:string;
    name:string,
    handleClick:() => void;
}

function Button({className,name,handleClick}:IButton) {
  return (
    <button className={` ${className}`} onClick={handleClick}>
      {name}
    </button>
  );
}

export default Button;
