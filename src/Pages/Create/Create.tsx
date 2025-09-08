import React from "react";
import Header from "../../Components/Create/Header";
import Select from "../../Components/Create/Select";
import Description from "../../Components/Create/Description";

const Create: React.FC = () => {
  return (
    <div className=" bg-black h-[100vh]">
      <Header />
      <div className=" flex flex-row h-[90%]">
        <Select />
        <Description />
      </div>
    </div>
  );
};

export default Create;
