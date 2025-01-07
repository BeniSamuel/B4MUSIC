import React from "react";

const LoadingCP: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Animated B4MUSIC Text */}
      <span className="text-[#FB7800] font-bold text-xl font-poppins mb-3 animate-pulse">
        <span className="inline-block animate-fade-scale ">B4MUSIC</span>
        {/* <span className="inline-block animate-fade-scale animation-delay-500">B4MUSIC</span> */}
      </span>
      
      {/* Bouncing Dots */}
      <div className="flex gap-1">
        <div className="animate-bounce bg-[#FB7800] h-1 w-2 rounded-full"></div>
        <div className="animate-bounce bg-[#FB7800] h-1 w-2 rounded-full animation-delay-200"></div>
        <div className="animate-bounce bg-[#FB7800] h-1 w-2 rounded-full animation-delay-400"></div>
      </div>
    </div>
  );
};

export default LoadingCP;
