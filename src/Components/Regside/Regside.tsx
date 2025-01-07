import React from "react";
import peopDance from "../../assets/People dancing at disco party.png";

interface Regprops {
  className: string;
}

const Regside: React.FC<Regprops> = ({ className }) => {
  return (
    <div
      className={` hidden md:bg-[#EE7D14] md:h-[100vh] md:w-[40vw] md:${className} md:flex md:flex-col md:justify-center md:items-center`}
    >
      <img src={peopDance} className=" h-80 w-80" />
    </div>
  );
};

export default Regside;
