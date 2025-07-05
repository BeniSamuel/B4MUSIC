import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashLeft: React.FC = () => {
  const location = useLocation();
  const [tab, setTab] = useState(location.pathname);

  // Function to check if the current tab is active
  const isActive = (path: string) => tab === path;

  return (
    <div className="bg-black w-48 flex flex-col justify-between py-4 pl-7 dashleft">
      <div className="flex flex-col gap-9">
        <span className="font-bold text-[#FB7800] font-poppins">B4MUSIC</span>

        <ul className="flex flex-col gap-6">
          <li
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setTab("/dashboard")}
          >
            {isActive("/dashboard") && (
              <div className="h-6 w-[0.2rem] bg-[#FB7800] rounded-[12px]" />
            )}
            <span
              className={`font-semibold font-poppins text-sm ${
                isActive("/dashboard") ? "text-[#FB7800]" : "text-white"
              }`}
            >
              <Link to="/dashboard">Dashboard</Link>
            </span>
          </li>

          <li
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setTab("/dashboard/reel")}
          >
            {isActive("/dashboard/reel") && (
              <div className="h-6 w-[0.2rem] bg-[#FB7800] rounded-[12px]" />
            )}
            <span
              className={`font-semibold font-poppins text-sm ${
                isActive("/dashboard/reel") ? "text-[#FB7800]" : "text-white"
              }`}
            >
              <Link to="/dashboard/reel">Reels</Link>
            </span>
          </li>

          <li
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setTab("/dashboard/playlist")}
          >
            {isActive("/dashboard/playlist") && (
              <div className="h-6 w-[0.2rem] bg-[#FB7800] rounded-[12px]" />
            )}
            <span
              className={`font-semibold font-poppins text-sm ${
                isActive("/dashboard/playlist")
                  ? "text-[#FB7800]"
                  : "text-white"
              }`}
            >
              <Link to="/dashboard/playlist">Playlist</Link>
            </span>
          </li>

          <li
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setTab("/dashboard/downloads")}
          >
            {isActive("/dashboard/downloads") && (
              <div className="h-6 w-[0.2rem] bg-[#FB7800] rounded-[12px]" />
            )}
            <span
              className={`font-semibold font-poppins text-sm ${
                isActive("/dashboard/downloads")
                  ? "text-[#FB7800]"
                  : "text-white"
              }`}
            >
              <Link to="/dashboard/downloads">Downloads</Link>
            </span>
          </li>

          <li
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setTab("/dashboard/library")}
          >
            {isActive("/dashboard/library") && (
              <div className="h-6 w-[0.2rem] bg-[#FB7800] rounded-[12px]" />
            )}
            <span
              className={`font-semibold font-poppins text-sm ${
                isActive("/dashboard/library") ? "text-[#FB7800]" : "text-white"
              }`}
            >
              <Link to="/dashboard/library">Library</Link>
            </span>
          </li>

          <li
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setTab("/dashboard/profile")}
          >
            {isActive("/dashboard/profile") && (
              <div className="h-6 w-[0.2rem] bg-[#FB7800] rounded-[12px]" />
            )}
            <span
              className={`font-semibold font-poppins text-sm ${
                isActive("/dashboard/profile") ? "text-[#FB7800]" : "text-white"
              }`}
            >
              <Link to="/dashboard/profile">Profile</Link>
            </span>
          </li>
        </ul>
      </div>

      <div
        className="flex flex-row gap-2 items-center cursor-pointer"
        onClick={() => setTab("/dashboard/settings")}
      >
        {isActive("/dashboard/settings") && (
          <div className="h-6 w-[0.2rem] bg-[#FB7800] rounded-[12px]" />
        )}
        <span
          className={`font-semibold font-poppins text-sm ${
            isActive("/dashboard/settings") ? "text-[#FB7800]" : "text-white"
          }`}
        >
          <Link to="/dashboard/settings">Settings</Link>
        </span>
      </div>
    </div>
  );
};

export default DashLeft;
