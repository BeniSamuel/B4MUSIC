import React from "react";
import PlaylistDisplay from "../PlayDisplay/PlayDisplay";

type playProps = {
  form: any;
  setForm: any;
};
const PlaylistCP: React.FC<playProps> = ({ setForm, form }) => {
  function handleClick() {
    setForm(form ? false : true);
  }

  return (
    <div className=" flex flex-col justify-between h-screen pb-16">
      <div className=" h-screen overflow-y-auto">
        <PlaylistDisplay />
      </div>
      <div className=" flex flex-col items-center relative">
        <button
          className=" bg-white h-12 w-12 rounded-3xl absolute bottom-10 left-[35rem]"
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PlaylistCP;
