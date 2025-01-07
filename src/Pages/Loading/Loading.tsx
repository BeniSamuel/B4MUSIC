import React from "react";
import LoadingCP from "../../Components/LoadingCP/LoadingCP";

const Loading: React.FC = () => {
  return (
    <div className=" bg-black h-[100vh] flex flex-col justify-center">
      <LoadingCP />
    </div>
  );
};

export default Loading;
