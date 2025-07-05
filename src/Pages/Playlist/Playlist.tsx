// Playlist.tsx
import React, { useState, createContext } from "react";
import PlaylistCP from "../../Components/Playlist/PlaylistCP/PlaylistCP";
import PlaForm from "../../Components/Playlist/PlaForm/PlaForm";
import Playtop from "../../Components/Playlist/PlayTop/Playtop";
import DashboardMain from "../../Layout/Dashboard/DashboardMain";

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
      <DashboardMain>
        <div className="h-full overflow-hidden ">
          <Playtop />
          <div className=" overflow-y-auto">
            <PlaylistCP form={form} setForm={setForm} />
          </div>
        </div>
        {form && <PlaForm setForm={setForm} />}
      </DashboardMain>
    </PlayContext.Provider>
  );
};

export default Playlist;
