import React from "react";
import VIdeoCP from "../../Components/VideoCP/VIdeoCP";
import VideoRect from "../../Components/VideoCP/VideoRect";
import MorePeople from "../../Components/VideoCP/MorePeople";
import Similar from "../../Components/VideoCP/Similar";
import TopDash from "../../Components/TopDash/TopDash";

const Video: React.FC = () => {
  return (
    <div className=" bg-black flex flex-col">
      <VIdeoCP />
      <div className=" flex flex-row gap-28 pt-16">
        <div className=" h-fit w-[55vw] pl-14">
          <VideoRect />
          <div className=" flex flex-col gap-10">
            <div className=" ">
              <img />
              <p className=" text-white font-poppins text-sm">
                Plenty - <span className=" text-[#EE7D14]">Burna Boy</span>
              </p>
            </div>
            <MorePeople />
            <Similar />
          </div>
        </div>
        <div className=" flex flex-col gap-8 md:w-[30vw]">
          <MorePeople />
          <Similar />
        </div>
      </div>
    </div>
  );
};

export default Video;
