import React from "react";
import list from "../../assets/list-white.svg";
import { useNavigate } from "react-router-dom";
import More from "../More/More";

interface videProps {
  id: number;
  cover: string;
  title: string;
  list?: number;
}

const HotlistVid: React.FC<videProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col  w-66 h-32 gap-3">
      <div className=" flex flex-row">
        <img
          src={props.cover}
          onClick={() => {
            navigate(`/video/${props.list}`);
          }}
          className=" w-[11rem] h-[8rem] "
        />

        <div className=" bg-black h-30 w-12 flex flex-col items-center justify-center">
          <div>
            <img src={list} />
            <div className=" text-white">19</div>
          </div>
        </div>
      </div>
      <div className="  flex flex-row justify-between items-center">
        <p className=" text-white font-poppins text-sm">{props.title}</p>
        <More/>
      </div>
    </div>
  );
};

export default HotlistVid;
