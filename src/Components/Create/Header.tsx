import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#0A0A0A] flex flex-row justify-between h-[10%] items-center px-4">
      <div
        className=" text-[#FB7800] font-poppins font-semibold cursor-pointer"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        B4MUSIC
      </div>
      <div className=" cursor-pointer bg-green-600 py-2 px-4 rounded-full">
        <p className=" text-white font-poppins font-medium">B</p>
      </div>
    </div>
  );
};

export default Header;
