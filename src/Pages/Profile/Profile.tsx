import React from "react";
import DashLeft from "../../Components/DashLeft/DashLeft";
import ProfileCP from "../../Components/ProfileCP/ProfileCP";
import "../../index.css";

const Profile: React.FC = () => {
  return (
    <div className=" h-[100vh] flex flex-row ">
      <DashLeft />
      <div className=" bg-[#0A0A0A] w-[85vw] md:w-[85vw] lg:w-[68rem] pt-12 dashcontent">
        <ProfileCP />
      </div>
    </div>
  );
};

export default Profile;
