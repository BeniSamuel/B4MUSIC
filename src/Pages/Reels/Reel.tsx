import React from "react";
import DashLeft from "../../Components/DashLeft/DashLeft";
import reels from "../../assets/camera_reels.svg";
import Reels from "../../Components/Reels/Reels";
import "../../index.css";

const Reel: React.FC = () => {
  return (
    <div className=" flex flex-row h-[100vh] bg-[#0A0A0A] w-[100vw]">
      <DashLeft />

      <div className=" flex flex-col items-center justify-center  md:w-[75vw] lg:w-[68rem] container dashcontent gap-3">
        <div className=" flex flex-row gap-3 items-center">
          <p className=" text-white font-poppins text-sm">Reels</p>
          <img src={reels} className=" h-6 w-6" />
        </div>
        <Reels />
      </div>
    </div>
  );
};

export default Reel;
