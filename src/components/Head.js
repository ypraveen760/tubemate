import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PROXY_URL, YOUTUBE_SUGGESTION_API } from "./utils/constrans";

import { clearData, setData } from "./utils/searchDataSlice";
import ClearIcon from "@mui/icons-material/Clear";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const event = setTimeout(() => {
      fetchSearchQuery();
    }, 200);
    return () => {
      clearTimeout(event);
    };
  }, [searchQuery]);

  const fetchSearchQuery = async () => {
    try {
      const response = await fetch(
        PROXY_URL + YOUTUBE_SUGGESTION_API + searchQuery
      );
      const data = await response.json();
      setSuggestion(data[1]);
    } catch (err) {
      console.log("Error occured" + err.message);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleClear = () => {
    setSearchQuery("");
  };
  const handleSuggestionClick = (item) => {
    setSearchQuery(item);
    console.log(item);
    dispatch(clearData());
    dispatch(setData(item));
    setShowSuggestion(false);
  };
  return (
    <div className="fixed bg-white w-full">
      <div className="grid-flow-col grid m-3 shadow-lg ">
        <div className=" grid-span-1 p-1 flex items-center  ">
          <MenuIcon
            onClick={toggleMenuHandler}
            className="text-black hover:text-red-500 cursor-pointer "
            fontSize="large"
          />{" "}
          <Link to="/">
            <img
              className="w-36 hidden ml-5 sm:block "
              alt="logo"
              src="/logo.png"
            ></img>
          </Link>
        </div>
        <div className="flex items-center ml-2 hover:text-red-500 cursor-pointer md:hidden ">
          <Link to="/">
            <Home />
          </Link>
        </div>
        <div className="col-span-10   ">
          <div className="flex relative mt-1  md:mt-5 justify-center items-center ">
            <SearchIcon className="relative left-8 text-gray-400" />
            <input
              placeholder="Search"
              className="border border-gray-400 w-5/12 p-1  rounded-r-none rounded-l-2xl pl-11  "
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setTimeout(() => setShowSuggestion(false), 500)}
            ></input>

            <div
              className="bg-gray-400 w-10 text-white p-1 text-center hover:bg-black cursor-pointer   rounded-r-2xl font-bold "
              fontSize="medium"
            >
              {searchQuery ? (
                <Link to="/searchresult">
                  <SearchIcon
                    onClick={(e) => {
                      handleSuggestionClick(searchQuery);
                    }}
                  />
                </Link>
              ) : (
                <SearchIcon />
              )}
            </div>
            <div
              className="bg-gray-400 w-10 text-white text-center p-1 hover:bg-black cursor-not-allowed border rounded-full ml-2 font-bold"
              fontSize="medium"
            >
              <MicNoneOutlinedIcon />
            </div>
            {searchQuery && (
              <ClearIcon
                onClick={handleClear}
                className="relative right-28 pr-2 text-gray-400 hover:text-red-600"
              />
            )}
          </div>
          <div className=" fixed bg-gray-50  md:ml-28 lg:ml-48 xl:ml-96  w-3/12 z-10 rounded-md overflow-x-hidden max-sm:w-8/12 shadow-xl ">
            {showSuggestion && (
              <ul className="sticky z-20">
                {suggestion.map((item) => (
                  <Link to="/searchresult" key={item}>
                    <li
                      onClick={() => {
                        handleSuggestionClick(item);
                      }}
                      className="py-2 px-2 rounded-lg  hover:shadow-sm cursor-pointer hover:bg-gray-200"
                    >
                      <SearchIcon fontSize="small" /> {item}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className=" flex text-gray-400 col-span-1 p-1 hover:text-red-600 cursor-not-allowed items-center">
          <AccountCircleRoundedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Head;
