import React from "react";
import peopleDance from "../../Assets/Image/People dancing at disco party.png";

type FormLeftProps = {
  className: string;
};

const FormLeft: React.FC<FormLeftProps> = ({ className }) => {
  return (
    <div
      className={` hidden md:bg-[#EE7D14] md:h-[100vh] md:w-[50vw] md:${className} md:flex md:flex-col md:justify-center md:items-center`}
    >
      <img src={peopleDance} className=" h-80 w-80" />
    </div>
  );
}; 

export default FormLeft;
