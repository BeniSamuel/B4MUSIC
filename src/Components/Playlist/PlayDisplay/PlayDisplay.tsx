// PlaylistDisplay.tsx
import React, { useContext } from "react";
import { PlayContext } from "../../../Pages/Playlist/Playlist";

const PlaylistDisplay: React.FC = () => {
  const { playlists } = useContext(PlayContext);

  return (
    <div className=" overflow-y-auto">
      {playlists.map((playlist, index) => (
        <div key={index} className=" text-white p-4 flex flex-row gap-12">
          <div className=" bg-[#171717] h-44 w-80 rounded-lg"></div>
          <div className=" flex flex-col gap-1 justify-center">
            <h2 className="text-sm font-poppins">{playlist.namePlaylist}</h2>
            <p className=" font-poppins text-sm">
              Created by: {playlist.nameCreator}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistDisplay;
