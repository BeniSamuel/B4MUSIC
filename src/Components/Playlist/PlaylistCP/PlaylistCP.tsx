import React from "react";
import PlaylistDisplay from "../PlayDisplay/PlayDisplay";

type playProps = {
  form: boolean;
  setForm: (value: boolean) => void;
};
const PlaylistCP: React.FC<playProps> = ({ setForm }) => {
  function handleClick() {
    setForm(true);
  }

  return (
    <div className=" flex flex-col justify-between h-screen pb-16">
      <div className=" h-screen overflow-y-auto">
        <PlaylistDisplay />
      </div>
      <div className=" flex flex-col items-center ">
        <button
          className=" bg-white h-12 w-12 rounded-3xl "
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PlaylistCP;
