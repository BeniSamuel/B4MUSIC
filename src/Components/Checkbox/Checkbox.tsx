import React, { useState } from "react";
import tick from "../../assets/tick.png";

const Checkbox: React.FC = () => {
  const [click, setClick] = useState(false);
  return (
    <div
      className={`${
        click === true
          ? "bg-[#FB7800] h-6 w-6 flex flex-col items-center justify-center rounded-md"
          : "border-[#FB7800] border-2 w-6 h-6 rounded-md"
      }`}
      onClick={() => setClick(click ? false : true)}
    >
      {click === true ? <img src={tick} className=" h-4 w-5" /> : null}
    </div>
  );
};

export default Checkbox;
