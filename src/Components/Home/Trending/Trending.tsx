import React from "react";
import Video from "../../../Data/TrendingVideo/TrendingVideo";
import logo from "../../../Assets/Home/Trending/arrow-logo.svg";
import HotlistVid from "../HotlistVid/HotlistVid";

const Trending: React.FC = () => {
  return (
    <div className=" flex-col w-full px-4 py-2">
      <div className="flex flex-row h-24 w-48  items-center gap-3 ">
        <span className=" text-[20px] font-semibold text-white font-poppins text-sm">
          TRENDING
        </span>
        <img src={logo} />
      </div>
      <div className=" w-full  overflow-x-auto">
        <div className="flex flex-row gap-12 py-2 px-1 w-fit">
          {Video.map((item, index) => {
            return (
              <HotlistVid
                key={index}
                id={item.id}
                cover={item.image}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
