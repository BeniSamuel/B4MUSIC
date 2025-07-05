import React, { useState } from "react";
import Nodownload from "../../Components/Downloads/Nodownload";
import DashboardMain from "../../layout/Dashboard/DashboardMain";

const Downloads: React.FC = () => {
  const [downloads, setDownloads] = useState(false);
  return (
    <DashboardMain>
      <div
        className={`
             flex flex-col items-center py-10 gap-7
        `}
      >
        {downloads ? "hy" : <Nodownload />}
        <div
          onClick={() => {
            setDownloads(true);
          }}
          className=" text-white font-poppins cursor-pointer text-sm"
        >
          Download
        </div>
      </div>
    </DashboardMain>
  );
};

export default Downloads;
