import React from "react";
import ProfileCP from "../../components/ProfileCP/ProfileCP";
import DashboardMain from "../../layout/Dashboard/DashboardMain";

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
