import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid-flow-col grid m-3 shadow-lg">
      <div className=" grid-span-1 p-1 flex items-center  ">
        <MenuIcon
          onClick={toggleMenuHandler}
          className="text-black hover:text-red-500 cursor-pointer "
          fontSize="large"
        />{" "}
        <img
          className="w-36 hidden  sm:block "
          alt="logo"
          src="https://images.ctfassets.net/6n252fx9hkkr/3cRehswScPb7Hu0F83FgL/5edbc5fcad04028fced5081dc42777f7/logo_YoutubePremium.webp?fm=webp&w=384&q=75"
        ></img>
      </div>
      <div className="flex col-span-10 justify-center  items-center">
        <input
          placeholder="Search"
          className="border border-gray-400 w-5/12 p-1 rounded-r-none rounded-l-2xl pl-4  "
          type="text"
        ></input>
        <div
          className="bg-gray-400 w-10 text-white p-1 text-center hover:bg-black cursor-pointer   rounded-r-2xl font-bold "
          fontSize="medium"
        >
          <SearchIcon />
        </div>
        <div
          className="bg-gray-400 w-10 text-white text-center p-1 hover:bg-black cursor-pointer border rounded-full ml-2 font-bold"
          fontSize="medium"
        >
          <MicNoneOutlinedIcon />
        </div>
      </div>

      <div className=" flex text-gray-400 col-span-1 p-1 hover:text-red-600 cursor-pointer items-center">
        <AccountCircleRoundedIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Head;
