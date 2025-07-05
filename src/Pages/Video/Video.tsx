import React from "react";
import VIdeoCP from "../../components/Video/VIdeoCP";
import VideoRect from "../../components/Video/VideoRect";
import MorePeople from "../../components/Video/MorePeople";
import Similar from "../../components/Video/Similar";
import VidDescription from "../../components/Video/VidDescription";
import VidComments from "../../components/Video/VidComments";

const Video: React.FC = () => {
  return (
    <div className=" bg-black flex flex-col h-[100vh]">
      <VIdeoCP />
      <div className=" flex flex-row gap-32 py-10 px-12 h-[90%]">
        <div className=" w-[55vw] px-3 py-2 h-full overflow-y-auto">
          <VideoRect />
          <div className=" flex flex-col gap-4">
            <div className=" ">
              <img />
              <p className=" text-white font-poppins text-sm">
                Yawa - <span className=" text-[#EE7D14]">Fire Boy</span>
              </p>
            </div>
            <VidDescription />
            <VidComments />
          </div>
        </div>
        <div className=" flex flex-col gap-8 w-[40vw] h-full overflow-y-auto px-2 py-2">
          <MorePeople />
          <Similar />
        </div>
      </div>
    </div>
  );
};

export default Video;
