import React from "react";

const VidDescription: React.FC = () => {
  return (
    <div className=" bg-[#131212] flex flex-col gap-2 px-4 py-3 rounded-lg">
        <div className=" flex flex-row items-center gap-3 font-poppins text-sm">
            <div className=" text-white font-semibold">{120} views</div>
            <div className=" text-white">{ new Date().getUTCMonth()} {new Date().getUTCDate()} , {new Date().getUTCFullYear() }</div>
        </div>
        <div className=" text-white">
            Fireboy - yawa song 
            Enjoy listening to this new songs drop down comments and likes let's support is 😁😁😁😁
        </div>
        <div></div>
    </div>
  )
};

export default VidDescription;
