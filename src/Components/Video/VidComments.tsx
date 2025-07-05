import React, {useState} from "react";

const VidComments: React.FC = () => {
    const [comment, setComment] = useState("");
  return (
    <div className=" flex flex-col gap-5 py-2">
      <div className=" text-white font-poppins text-sm">Comments</div>
      <div className=" flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter a comment..."
          value={comment}
          onChange={(e) => {setComment(e.target.value)}}
          className="bg-transparent outline-none border-[#131212] border-2 w-full h-24 rounded-lg px-3 placeholder:font-poppins placeholder:text-sm text-[#4d4b4b] font-poppins text-sm"
        />
        <input
          type="submit"
          value="Comment"
          className=" outline-none bg-[#131212] text-white font-poppins text-sm px-6 py-2 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default VidComments;
