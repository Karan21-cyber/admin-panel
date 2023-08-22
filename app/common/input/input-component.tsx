import React, { ChangeEvent } from 'react'

interface inputType{
    type:string,
    placeholder:string,
   
}

interface IInputType{
    label:string,
    className:string,
    data:inputType,
    handleChange:(value:string) => void;
}
function Input({label, className,data,handleChange}:IInputType) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value);
      };
    
  return (
    <div className="input-wrapper flex flex-col gap-2">
      <label>{label}</label>
      <input
        type={data.type}
        placeholder={data.placeholder}
        className={className}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Input