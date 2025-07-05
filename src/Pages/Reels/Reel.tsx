import React from "react";
import reels from "../../assets/Reels/camera_reels.svg";
import reelsData from "../../Data/Reels/Reels";
import Reels from "../../Components/Reel/Reels/Reels";
import "../../index.css";
import DashboardMain from "../../Layout/Dashboard/DashboardMain";

const Reel: React.FC = () => {
  return (
    <DashboardMain>
      <div className="flex flex-col items-center justify-center h-[95%]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="flex flex-row gap-3 items-center justify-center">
            <p className="text-white font-poppins text-sm">Reels</p>
            <img src={reels} className="h-6 w-6" alt="Reels Icon" />
          </div>
        </div>

        {/* Reels Section with Hidden Scrollbar */}
        <div
          className="flex flex-col items-center gap-16 overflow-y-auto h-[90%] w-full scrollbar-hide"
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
    </DashboardMain>
  );
};

export default Reel;
