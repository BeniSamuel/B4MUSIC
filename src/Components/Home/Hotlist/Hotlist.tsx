import React from "react";
import hotlistIc from "../../../Assets/Home/Hotlist/list-white.svg";
import HotlistVid from "../HotlistVid/HotlistVid";
import videos from "../../../Data/HotlistVid/HotlistVid";

const Hotlist: React.FC = () => {
  return (
    <div className=" flex flex-col gap-7 px-6 py-4 w-full">
      <div className=" flex md:flex-row items-center gap-3">
        <span className=" text-white font-semibold text-sm font-poppins">
          HOTLIST
        </span>
        <img src={hotlistIc} className=" w-5 h-5 " />
      </div>
      <div className=" w-full overflow-x-auto">
        <div className={` flex flex-row gap-12 w-fit py-2 px-1`}>
          {videos.map((item) => {
            return (
              <HotlistVid
                key={item.id}
                cover={item.cover}
                title={item.title}
                id={item.id}
                list={item.list}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hotlist;
