import React from "react";
import DashLeft from "../../Components/DashLeft/DashLeft";
import reels from "../../assets/camera_reels.svg";
import reelsData from "../../Data/Reels/Reels";
import Reels from "../../Components/Reels/Reels";
import "../../index.css";

const Reel: React.FC = () => {
  return (
    <div className="flex flex-row h-[100vh] bg-[#0A0A0A] w-[100vw]">
      <DashLeft />

      <div className="flex flex-col items-center justify-center md:w-[75vw] lg:w-[68rem] container dashcontent">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="flex flex-row gap-3 items-center justify-center">
            <p className="text-white font-poppins text-sm">Reels</p>
            <img src={reels} className="h-6 w-6" alt="Reels Icon" />
          </div>
        </div>

        {/* Reels Section with Hidden Scrollbar */}
        <div
          className="flex flex-col items-center gap-16 overflow-y-scroll h-[90%] w-full scrollbar-hide"
          style={{ scrollSnapType: "y mandatory" }}
        >
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="snap-center flex justify-center items-center w-full"
            >
              <Reels image={reel.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reel;
