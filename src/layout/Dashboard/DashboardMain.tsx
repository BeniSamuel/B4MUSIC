import React, { ReactNode } from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";

type DashboardMainProps = {
  children: ReactNode;
};

const DashboardMain: React.FC<DashboardMainProps> = ({ children }) => {
  return (
    <div className=" bg-[#0A0A0A] h-screen w-screen flex flex-row overflow-hidden">
      <DashboardLeft />
      <DashboardRight>{children}</DashboardRight>
    </div>
  );
};

export default DashboardMain;
