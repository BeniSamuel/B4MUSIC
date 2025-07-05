import React, { useState, useContext } from "react";
import { PlayContext } from "../../../Pages/Playlist/Playlist";

// Define a type for form data
type FormDataType = {
  namePlaylist: string;
  nameCreator: string;
  songs: File[];
};

type PlaFormProps = {
  setForm: (value: boolean) => void;
};

const PlaForm: React.FC<PlaFormProps> = ({ setForm }) => {
  const [formData, setFormData] = useState<FormDataType>({
    namePlaylist: "",
    nameCreator: "",
    songs: [],
  });

  const { playlists, setPlaylists } = useContext(PlayContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add new playlist to the existing playlists
    setPlaylists([...playlists, formData]);

    // Reset form fields
    setFormData({
      namePlaylist: "",
      nameCreator: "",
      songs: [],
    });
  };

  const handleCancelClickButton = () => {
    setFormData({ namePlaylist: "", nameCreator: "", songs: [] });
    setForm(false);
  };

  return (
    <div className="bg-black h-auto w-full max-w-[39rem] absolute top-20 left-1/2 transform -translate-x-1/2 rounded-xl p-6">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of playlist"
          aria-label="Playlist Name"
          className="h-9 w-full text-white bg-transparent outline-none border-2 border-[#ffffff] pl-2 rounded-md mb-3 font-poppins text-sm placeholder:font-poppins placeholder:text-sm"
          value={formData.namePlaylist}
          onChange={(e) =>
            setFormData({ ...formData, namePlaylist: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Name of creator"
          aria-label="Creator Name"
          className="h-9 w-full text-white bg-transparent outline-none border-2 border-[#ffffff] pl-2 rounded-md mb-3 font-poppins text-sm placeholder:font-poppins placeholder:text-sm"
          value={formData.nameCreator}
          onChange={(e) =>
            setFormData({ ...formData, nameCreator: e.target.value })
          }
        />
        <div className="pt-4 flex flex-col w-full mb-10">
          <p className="text-white font-poppins text-sm">
            Choose Songs in Your Playlist
          </p>
          <input
            type="file"
            className="text-white font-poppins text-sm"
            onChange={(e) => {
              if (e.target.files) {
                setFormData({
                  ...formData,
                  songs: [...formData.songs, ...Array.from(e.target.files)],
                });
              }
            }}
            multiple
          />
        </div>
        <div className="flex flex-row gap-4">
          <button
            type="submit"
            className="bg-white px-8 py-1 rounded-lg font-poppins text-sm"
            disabled={
              !formData.namePlaylist ||
              !formData.nameCreator ||
              !formData.songs.length
            }
          >
            Create
          </button>
          <button
            type="button"
            className="bg-[#1d1d1d] px-8 py-1 rounded-lg text-white font-poppins text-sm"
            onClick={handleCancelClickButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaForm;
