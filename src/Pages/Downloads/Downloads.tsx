import React, { useState } from "react";
import DashLeft from "../../Components/DashLeft/DashLeft";
import Nodownload from "../../Components/Downloads/Nodownload";
import "../../index.css";

const Downloads: React.FC = () => {
  const [downloads, setDownloads] = useState(false);
  return (
    <div className=" h-[100vh] bg-[#0A0A0A] flex flex-row ">
      <DashLeft />
      <div
        className={`w-[75vw] md:w-[85vw] lg:w-[68rem] ${
          downloads === false
            ? "flex flex-col items-center pt-8"
            : "flex flex-col"
        } dashcontent`}
      >
        {downloads ? "hy" : <Nodownload />}
        <div onClick={() => { setDownloads(true)}}>
          download
        </div>
      </div>
    </div>
  );
};

export default Downloads;
