import React, { useState } from "react";
import TopDash from "../../Components/TopDash/TopDash";
import Hotlist from "../../Components/Hotlist/Hotlist";
import DashLeft from "../../Components/DashLeft/DashLeft";
import Trending from "../../Components/Trending/Trending";
import DashReels from "../../Components/DashReel/DashReels";

const Dashboard: React.FC = () => {
  const [dash, setDash] = useState(true);

  return (
    <div className="bg-[#0A0A0A] h-screen w-screen flex overflow-hidden">
      {dash && <DashLeft />}
      <div className="flex-1 h-full flex flex-col">
        <TopDash setDash={setDash} dash={dash} />
        <div className="flex flex-col gap-6 py-4 px-4 overflow-y-auto">
          <Hotlist />
          <Trending />
          <DashReels />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
