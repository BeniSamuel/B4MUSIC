import React from "react";
import List from "../List/List";
import library from "../../Data/Library/Library";
import libraryImage from "../../assets/Image/library_image.png";

const LibraryCP: React.FC = () => {
  return (
    <div className=" h-full">
      <div className=" h-1/2 bg-custom-gradient">
        <img src={libraryImage} className=" h-full" />
      </div>
      <div className=" h-1/2 pl-12 pt-6">
        {library.map((item) => {
          return (
            <List
              key={item.id}
              id={item.id}
              name={item.name}
              singer={item.singer}
              hour={item.hour}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LibraryCP;
