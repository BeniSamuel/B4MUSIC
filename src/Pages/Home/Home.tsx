import React, { useState } from "react";
import TopDash from "../../Components/Dashboard/TopDash/TopDash";
import Hotlist from "../../Components/Home/Hotlist/Hotlist";
import Trending from "../../Components/Home/Trending/Trending";
import DashReels from "../../Components/Home/DashReel/DashReels";
import DashboardMain from "../../Layout/Dashboard/DashboardMain";

const Home: React.FC = () => {
  const [dash, setDash] = useState(true);

  return (
    <DashboardMain>
      <div className="flex-1 h-full flex flex-col">
        <TopDash setDash={setDash} dash={dash} />
        <div className={`flex flex-col gap-1 py-4 px-4 overflow-y-auto `}>
          <Hotlist />
          <Trending />
          <DashReels />
        </div>
      </div>
    </DashboardMain>
  );
};

export default Home;
