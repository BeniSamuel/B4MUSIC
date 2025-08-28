import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className=" bg-[#0A0A0A] h-[100vh] flex flex-col items-center py-12">
      <div className=" bg-black h-24 w-96 flex flex-row items-center  gap-4 rounded-lg">
        <div className=" bg-[#FB7800] w-2 h-24 rounded-xl"></div>
        <p className=" text-[#FB7800] font-poppins text-sm">
          Oops!, the page you are trying to reach doesn't exist
          return to home.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
