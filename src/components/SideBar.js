import React from "react";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import SportsCricketRoundedIcon from "@mui/icons-material/SportsCricketRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearData, setData } from "./utils/searchDataSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(clearData());
    dispatch(setData(item));
  };
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="fixed bg-white top-16 md:top-24 h-[77vh] md:h-[83vh] z-10 lg:h-[95vh] no-scrollbar overflow-y-auto ">
      <div className="p-2 ml-4 shadow-2xl w-44 *:text-lg border-b-2 bg-white rounded-r-lg  ">
        <ul className="flex flex-col gap-3 ">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/">
              <HomeRoundedIcon className="hover:text-red-600" /> Home
            </Link>
          </li>
        </ul>

        <h1 className="font-semibold my-2">Explore</h1>
        <ul className="flex flex-col gap-3 ">
          <Link to="/">
            <li className="hover:text-gray-500 cursor-pointer">
              <WhatshotRoundedIcon className="hover:text-red-600" /> Trending
            </li>
          </Link>
          <Link to="/searchresult">
            <li
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => {
                handleClick("Top+trending+music+songs");
              }}
            >
              <QueueMusicRoundedIcon className="hover:text-red-600" /> Music
            </li>
          </Link>
          <Link to="/searchresult">
            <li
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => {
                handleClick("latest+sports");
              }}
            >
              <SportsCricketRoundedIcon className="hover:text-red-600" /> Sport
            </li>
          </Link>
          <Link to="/searchresult">
            <li
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => {
                handleClick("Gaming");
              }}
            >
              <SportsEsportsRoundedIcon className="hover:text-red-600" /> Gaming
            </li>
          </Link>
          <Link to="/searchresult">
            <li
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => {
                handleClick("latest+movies");
              }}
            >
              <MovieFilterRoundedIcon className="hover:text-red-600" /> Movies
            </li>
          </Link>
          <Link to="/searchresult">
            <li
              className="hover:text-gray-500 cursor-pointer"
              onClick={() => {
                handleClick("learning+trending+in+india");
              }}
            >
              <LocalLibraryRoundedIcon className="hover:text-red-600" />{" "}
              Learning
            </li>
          </Link>
          <Link to="/searchresult">
            <li
              className="hover:text-gray-500 cursor-pointer border-b-2 border-black "
              onClick={() => {
                handleClick("News");
              }}
            >
              <NewspaperRoundedIcon className="hover:text-red-600" /> News
            </li>
          </Link>
        </ul>
        <ul className="lg:flex flex-col gap-3 mt-3 hidden ">
          <li className="hover:text-gray-500 cursor-not-allowed">
            <ManageAccountsRoundedIcon className="hover:text-red-600" />{" "}
            Settings
          </li>
          <li className="hover:text-gray-500 cursor-not-allowed">
            <FlagRoundedIcon className="hover:text-red-600" />
            Report history
          </li>
          <li className="hover:text-gray-500 cursor-not-allowed">
            <HelpRoundedIcon className="hover:text-red-600" /> Help
          </li>
          <li className="hover:text-gray-500 cursor-not-allowed border-b-2 border-black">
            <FeedbackRoundedIcon className="hover:text-red-600" /> Send feedback
          </li>
        </ul>
        <p className="my-2">
          Terms PrivacyPolicy & SafetyHow YouTube Works Test New features{" "}
        </p>
        <footer className="border-b-2 border-black">
          <CopyrightRoundedIcon className="hover:text-red-600" />{" "}
          <span className="text-xl font-semibold  text-red-500 hover:text-black">
            Developed by - Praveen Yadav
          </span>
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
