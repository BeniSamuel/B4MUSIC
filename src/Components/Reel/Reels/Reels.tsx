import React from "react";
import like from "../../../Assets/Reels/like.svg";
import dislike from "../../../Assets/Reels/dislike.svg";
import comment from "../../../Assets/Reels/comment.svg";
import share from "../../../Assets/Reels/share.svg";
import More from "../../Common/More/More";


type ReelsProps = {
  image: string;
}

const Reels: React.FC<ReelsProps> = () => {
  return (
    <div className=" pb-6">
      <div className=" flex flex-row gap-4">
        <div className=" h-[30rem] w-[26rem] rounded-3xl bg-black">
          <video controls className=" h-[30rem] w-[26rem] rounded-3xl">
            <source />
          </video>
        </div>
        <div className=" flex flex-col gap-20 items-center justify-center">
          <img src={like} className=" h-5 w-5 cursor-pointer" />
          <img src={dislike} className=" h-5 w-5 cursor-pointer" />
          <img src={comment} className=" h-5 w-5 cursor-pointer" />
          <img src={share} className=" h-5 w-5 cursor-pointer" />
          <More/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Reels;
