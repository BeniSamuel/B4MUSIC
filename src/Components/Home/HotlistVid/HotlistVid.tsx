import React from "react";
import list from "../../../Assets/Home/Hotlist/list-white.svg";
import { useNavigate } from "react-router-dom";
import More from "../../Common/More/More";

interface videProps {
  key: number;
  id: number;
  cover: string;
  title: string;
  list?: { id: number; video: string; title: string }[];
}

const HotlistVid: React.FC<videProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col  w-[23.1rem] h-[16rem] gap-3 relative">
      <div className=" flex flex-row gap-1">
        <video
          className=" w-[19rem] h-[13rem] "
          controls
          onClick={() => {
            if (props.list && props.list.length > 0) {
              navigate(`/video/${props.list[0].id}`);
            }
          }}
        >
          <source src={props.cover} />
        </video>

        <div className=" bg-black h-[13rem] w-14 flex flex-col items-center justify-center rounded-tr-lg rounded-br-lg">
          <div>
            <img src={list} />
            <div className=" text-white">19</div>
          </div>
        </div>
      </div>
      <div className="  flex flex-row justify-between items-center relative">
        <p className=" text-white font-poppins text-sm">{props.title}</p>
        <More />
      </div>
    </div>
  );
};

export default HotlistVid;
