import React from "react";
import More from "../../Common/More/More";

type dashReel = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const DashReel: React.FC<dashReel> = (props) => {
  return (
    <div className=" flex flex-col gap-2 ">
      <div className=" h-[23rem] w-72">
        <video controls className=" h-[23rem] w-72 rounded-2xl bg-[#0e0d0d]">
          <source src={props.image} />
        </video>
      </div>
      <div className=" flex flex-row justify-between items-center ">
        <div className=" flex flex-col gap-1">
          <p className=" font-poppins text-sm text-white">{props.title}</p>
          <p className=" font-poppins text-sm text-[#343232]">
            {props.subtitle}
          </p>
        </div>
        <More />
      </div>
    </div>
  );
};

export default DashReel;
