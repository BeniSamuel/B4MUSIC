import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search.png";
import menu from "../../assets/menu.png";
import "../../index.css";

interface topProp {
  setDash?: any;
  dash?: any;
}

const TopDash: React.FC<topProp> = ({ setDash, dash }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState(false);
  const [searchWid, setSearchWid] = useState(false);

  function handleClick() {
    setHistory(history ? false : true);
  }

  function handleLoginState () {
    setIsLoggedIn(true);
  }

  return (
    <div className=" flex flex-col gap-2">
      <div
        className={` flex flex-row justify-between items-center w-[100vw] px-4 pt-3  ${
          dash
            ? "w-[75vw] md:w-[80vw] lg:w-[85vw]"
            : "md:w-[100vw] lg:w-[100vw]"
        } `}
      >
        <div className=" flex flex-row gap-4 items-center">
          <img
            src={menu}
            className=" h-4 w-5"
            onClick={() => {
              setDash(dash ? false : true);
            }}
          />
          <span className=" text-[#FB7800] font-bold text-lg font-poppins" onClick={handleLoginState}>
            B4MUSIC
          </span>
        </div>

        <div className=" flex flex-row">
          <input
            type="search"
            placeholder="Search"
            className={` bg-transparent text-white outline-none font-poppins text-sm ${
              searchWid && !dash ? "w-44" : "w-0"
            } md:w-[28rem] ${
              dash
                ? "md:w-[16rem] lg:w-[24rem]"
                : " md:w-[23.5rem] lg:w-[34rem]"
            }  h-11 border-[#FB7800] border-2 rounded-tl-lg rounded-bl-lg px-4 dashcontent placeholder:font-poppins placeholder:text-sm`}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onClick={handleClick}
          />
          <div
            className=" h-11 flex flex-col items-center justify-center bg-[#FB7800] w-14 rounded-tr-lg rounded-br-lg"
            onClick={() => {
              setSearchWid(true);
            }}
          >
            <img src={searchIcon} alt="" />
          </div>
        </div>

        {isLoggedIn ? (
          <div className=" flex flex-row">
            <div className=" bg-green-700 py-1 px-3 rounded-full">
              <span className=" text-white text-xl font-bold">B</span>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        ) : (
          <div className=" flex flex-row">
            <button
              className={` font-poppins text-sm ${
                dash
                  ? "px-2 lg:px-6 py-2 bg-[#FB7800] text-white rounded-tl-lg"
                  : "px-2 md:px-4  lg:px-6 py-2 bg-[#FB7800] text-white rounded-tl-lg"
              }`}
            >
              <Link to="/">LOGIN</Link>
            </button>
            <button
              className={` font-poppins text-sm ${
                dash
                  ? " px-2 lg:px-6 py-2 bg-white text-[#FB7800] rounded-br-lg"
                  : "px-2 md:px-4 lg:px-6 py-2 bg-white text-[#FB7800] rounded-br-lg"
              } `}
            >
              <Link to="/signup">SIGNUP</Link>
            </button>
          </div>
        )}
      </div>
      {history ? (
        <div
          className={`px-5 py-2 w-[35rem] h-48 bg-black absolute ${
            dash ? " top-16 left-[26rem]" : "top-16 md:left-40 lg:left-80"
          } rounded-lg `}
        >
          {search}
        </div>
      ) : null}
    </div>
  );
};

export default TopDash;
