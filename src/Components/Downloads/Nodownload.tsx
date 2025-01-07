import React from "react";

const Nodownload: React.FC = () => {
  return (
    <div className=" bg-black h-24 w-96 flex flex-row items-center  gap-4 rounded-lg">
      <div className=" bg-[#FB7800] w-2 h-24 rounded-xl"></div>
      <p className=" text-[#FB7800] font-poppins text-sm">
        Oops!, no Downloads you have now you can Download songs in order to see
        your Downloads.
      </p>
    </div>
  );
};

export default Nodownload;
