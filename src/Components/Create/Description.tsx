import React from "react";

const Description: React.FC = () => {
  return (
    <div className=" w-[50%] flex flex-col gap-10 px-12 justify-center">
      <div className=" bg-[#0c0c0c] h-16  flex flex-row items-center  gap-4 rounded-lg">
        <div className=" bg-[#1e1e1e] w-1.5 h-16 rounded-xl"></div>
        <p className=" text-white font-poppins text-sm">
          Enter information related to the uploaded song.
        </p>
      </div>
      <input
        type="text"
        placeholder="Enter name"
        className=" placeholder:font-poppins placeholder:text-sm py-4 rounded-md px-4 font-poppins text-sm bg-black border-2 border-[#1e1e1e]"
      />
      <input
        type="text"
        placeholder="Enter a description"
        className=" placeholder:font-poppins placeholder:text-sm py-4 rounded-md px-4 font-poppins text-sm bg-black border-2 border-[#1e1e1e]"
      />
      <input
        type="submit"
        value="Submit"
        className=" font-poppins text-white text-sm bg-[#1e1e1e] py-4 rounded-md"
      />
    </div>
  );
};

export default Description;
