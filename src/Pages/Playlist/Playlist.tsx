// Playlist.tsx
import React, { useState, createContext } from "react";
import PlaylistCP from "../../Components/PlaylistCP/PlaylistCP";
import PlaForm from "../../Components/PlaForm/PlaForm";
import Playtop from "../../Components/PlayTop/Playtop";
import "../../index.css";
import DashLeft from "../../Components/DashLeft/DashLeft";

// Define a type for the playlist context
type PlaylistContextType = {
  playlists: Array<{
    namePlaylist: string;
    nameCreator: string;
    songs: File[];
  }>;
  setPlaylists: React.Dispatch<
    React.SetStateAction<
      {
        namePlaylist: string;
        nameCreator: string;
        songs: File[];
      }[]
    >
  >;
};

// Create the context with a default value
export const PlayContext = createContext<PlaylistContextType>({
  playlists: [],
  setPlaylists: () => {},
});

const Playlist: React.FC = () => {
  const [form, setForm] = useState(false);
  const [playlists, setPlaylists] = useState<PlaylistContextType["playlists"]>(
    []
  );

  return (
    <PlayContext.Provider value={{ playlists, setPlaylists }}>
      <div className="flex flex-row h-[100vh] bg-[#0A0A0A] w-[100vw]">
        <DashLeft />
        <div className="h-full lg:w-[68rem] dashcontent overflow-hidden ">
          <Playtop />
          <div className=" overflow-y-auto">
            <PlaylistCP form={form} setForm={setForm} />
          </div>
        </div>
        {form && <PlaForm />}
      </div>
    </PlayContext.Provider>
  );
};

export default Playlist;
