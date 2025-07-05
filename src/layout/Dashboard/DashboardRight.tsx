import React, { ReactNode } from "react";

type DashboardRightProp = {
  children: ReactNode;
};

const DashboardRight: React.FC<DashboardRightProp> = ({ children }) => {
  return <div className=" w-[100%] h-[100vh] md:w-[85%]">{children}</div>;
};

export default DashboardRight;
