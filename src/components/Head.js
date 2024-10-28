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
      const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
      const data = await response.json();
      setSuggestion(data[1]);
    } catch (err) {
      console.log("Error occured" + err);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
              className="w-36 hidden  sm:block "
              alt="logo"
              src="https://images.ctfassets.net/6n252fx9hkkr/3cRehswScPb7Hu0F83FgL/5edbc5fcad04028fced5081dc42777f7/logo_YoutubePremium.webp?fm=webp&w=384&q=75"
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
            <input
              placeholder="Search"
              className="border border-gray-400 w-5/12 p-1 rounded-r-none rounded-l-2xl pl-4  "
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
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
          <div className=" fixed bg-gray-50  md:ml-28 lg:ml-48 xl:ml-96  w-3/12 z-10 rounded-md overflow-x-hidden max-sm:w-8/12 shadow-xl ">
            {showSuggestion && (
              <ul className="sticky z-20">
                {suggestion.map((item) => (
                  <li
                    className="py-2 px-2 rounded-lg  hover:shadow-sm hover:bg-gray-200"
                    key={item}
                  >
                    <SearchIcon fontSize="small" /> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className=" flex text-gray-400 col-span-1 p-1 hover:text-red-600 cursor-pointer items-center">
          <AccountCircleRoundedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Head;
//fixed bg-gray-200 ml-12 md:ml-32 lg:ml-48 xl:ml-96 px-4 w-5/12
