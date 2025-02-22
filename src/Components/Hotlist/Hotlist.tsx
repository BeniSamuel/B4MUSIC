import React from "react";
import hotlistIc from "../../assets/hoLIst.svg";
import HotlistVid from "../HotlistVid/HotlistVid";
import videos from "../../Data/HotlistVid/HotlistVid";


type HotlistProps = {
  dash: boolean,
}

const Hotlist: React.FC<HotlistProps> = ({ dash }) => {
  return (
    <div className=" flex flex-col gap-7 px-6">
      <div className=" flex md:flex-row items-center gap-3">
        <span className=" text-white font-semibold text-sm font-poppins">
          HOTLIST
        </span>
        <img src={hotlistIc} className=" w-5 h-5 " />
      </div>
      <div className={` flex flex-col items-center md:flex-row w-fit ${ dash ? "gap-12" : " gap-12"}`}>
        {videos.map((item) => {
          return (
            <HotlistVid
              key={item.id}
              cover={item.cover} 
              title={item.title}
              id={item.id}
              list={item.list[0].id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hotlist;
