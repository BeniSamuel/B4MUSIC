import React from "react";

type listProp = {
  id: number;
  name: string;
  singer: string;
  hour: string;
};

const List: React.FC<listProp> = ({ id, name, hour, singer }) => {
  return (
    <div className=" flex flex-row gap-5 ">
      <div>
        <p className=" text-white">{id}</p>
      </div>
      <div>
        <p className=" text-white font-poppins text-sm">{name}</p>
      </div>
      <div>
        <p className=" text-white font-poppins text-sm">{singer}</p>
      </div>
      <div>
        <p className=" text-white">{hour}</p>
      </div>
    </div>
  );
};

export default List;
