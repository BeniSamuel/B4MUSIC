import React, { useState } from "react";
import more from "../../../assets/Common/more.svg";

const More: React.FC = () => {
  
  const [ show, setShow ] = useState(false);
  return (
    <div className=" flex flex-col relative">
      <div onClick={ () => { show === false ? setShow(true) : setShow(false)}} className=" cursor-pointer ">
        <img src={more} />
      </div>

      { show && 
        <div className=" bg-[#1a1a1a] flex flex-col gap-2 px-3 py-3 absolute top-7 right-[-10px] text-white rounded-lg">
            <div className=" cursor-pointer font-poppins text-sm font-medium">Like</div>
            <div className=" cursor-pointer font-poppins text-sm font-medium">Share</div>
            <div className=" cursor-pointer font-poppins text-sm font-medium">Download</div>
        </div>
      }
    </div>
  );
};

export default More;
