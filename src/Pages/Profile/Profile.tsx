import React from "react";
import ProfileCP from "../../Components/ProfileCP/ProfileCP";
import DashboardMain from "../../Layout/Dashboard/DashboardMain";

const Profile: React.FC = () => {
  return (
    <DashboardMain>
      <div className=" py-12">
        <ProfileCP />
      </div>
    </DashboardMain>
  );
};

export default Profile;
