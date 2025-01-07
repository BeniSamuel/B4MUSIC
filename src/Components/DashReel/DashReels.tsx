import React from "react";
import reels from "../../Data/Reels/Reels";
import reel from "../../assets/camera_reels.svg"
import DashReel from "./DashReel";

const DashReels: React.FC = () => {
  return (
    <div className=" flex flex-col py-16 px-6 gap-12">
      <div className=" flex flex-row gap-3 items-center">
        <span className="text-[20px] font-semibold text-white font-poppins text-sm ">Reels</span>
        <img src={reel} className=' w-5 h-5'/>
      </div>
      <div className=" flex flex-row gap-16 justify-center">
        {reels.map((item, index) => {
          return (
            <DashReel
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashReels;
