import React from "react";
import { useNavigate } from "react-router-dom";
import search from "../../Assets/Video/search.png";

const VIdeoCP: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="  flex flex-row justify-between items-center h-[10%] px-7 py-3">
      <div
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <span className=" text-[#fb7800] font-bold font-poppins cursor-pointer">
          B4MUSIC
        </span>
      </div>
      <div className=" flex flex-row items-center">
        <input
          type="text"
          placeholder="Search"
          className=" border-2 border-[#fb7800] bg-transparent placeholder:font-poppins placeholder:text-sm outline-none text-white font-poppins text-sm w-80 md:w-[30rem] h-10 rounded-tl-lg rounded-bl-lg pl-3"
        />
        <button className=" bg-[#fb7800] h-10 w-14 rounded-tr-lg rounded-br-lg flex flex-row items-center justify-center">
          <img src={search} />
        </button>
      </div>
      <div>
        <img />
        <div className=" bg-green-500 h-8 flex flex-col items-center justify-center px-3 rounded-full">
          <p className=" text-white">B</p>
        </div>
      </div>
    </div>
  );
};

export default VIdeoCP;
