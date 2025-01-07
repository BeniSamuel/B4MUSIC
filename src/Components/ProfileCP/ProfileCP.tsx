import React from "react";

const ProfileCP: React.FC = () => {
  return (
    <div className="  h-[32rem] flex flex-col items-center gap-8">
      <div className=" h-32 w-24">
        <img />
        <p className=" font-poppins text-sm">Beni Samuel</p>
      </div>
      <div className=" flex flex-col gap-5 md:flex-row md:gap-48">
        <div>
          <p className=" text-white font-poppins text-sm">
            Username: Beni Samuel
          </p>
        </div>
        <div>
          <p className=" text-white font-poppins text-sm">
            Email: benisamuel566@gmail.com
          </p>
        </div>
      </div>

      <div>
        <button className=" text-white bg-[#FB7800] h-10 w-48 rounded-lg font-poppins text-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileCP;
