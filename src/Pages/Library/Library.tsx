import React from "react";
import DashLeft from "../../Components/DashLeft/DashLeft";
import LibraryCP from "../../Components/LibraryCP/LibraryCP";
import "../../index.css";

const Library: React.FC = () => {
  return (
    <div className=" flex flex-row h-[100vh]">
      <DashLeft />
      <div className=" bg-[#0A0A0A] w-[75vw] md:w-[85vw] lg:w-[68rem] dashcontent">
        <LibraryCP />
      </div>
    </div>
  );
};

export default Library;
