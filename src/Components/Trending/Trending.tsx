import React from "react";
import Video from "../../Data/TrendingVideo/TrendingVideo";
import logo from "../../assets/arrow-logo.svg";
import HotlistVid from "../HotlistVid/HotlistVid";

const Trending: React.FC = () => {
  return (
    <div className=" flex-col w-fit px-6">
      <div className="flex flex-row h-24 w-48  items-center gap-3 ">
        <span className=" text-[20px] font-semibold text-white font-poppins text-sm">
          TRENDING
        </span>
        <img src={logo} className="direction-arrow" />
      </div>
      <div className="flex flex-row gap-12 w-fit">
        {Video.map((item, index) => {
          return (
            <HotlistVid key={index} id={item.id} cover={item.image} title={item.title} />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
