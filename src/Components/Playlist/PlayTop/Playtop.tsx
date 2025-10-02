import React from "react";
import searchIcon from "../../../assets/Playlist/search.png";
import sort from "../../../assets/Playlist/hoLIst.svg";


const Playtop: React.FC = () => {
  return (
    <div
      className={`w-[75vw] md:w-[80vw] lg:w-[85vw] flex flex-row justify-between items-center px-4 pt-3 dashcontent `}
    >
      <div className=" flex flex-row">
        <input
          type="search"
          placeholder="Search"
          className=" bg-transparent placeholder:font-poppins placeholder:text-sm font-poppins outline-none text-sm text-white w-80 md:w-[24rem] h-10 border-[#FB7800] border-2 rounded-tl-lg rounded-bl-lg px-4 inputLength"
        />
        <div className=" h-10 flex flex-col items-center justify-center bg-[#FB7800] w-14 rounded-tr-lg rounded-br-lg">
          <img src={searchIcon} className=" h-4 w-5" />
        </div>
      </div>
      <div className="  flex flex-row items-center gap-3 justify-center">
        <span className=" text-white font-poppins text-sm">Alphabetical</span>
        <img src={sort} />
      </div>
    </div>
  );
};

export default Playtop;
