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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div>
      <div className="p-2 ml-4 shadow-lg w-44 *:text-lg border-b-2  ">
        <ul className="flex flex-col gap-3 ">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/">
              <HomeRoundedIcon className="hover:text-red-600" /> Home
            </Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <PlayCircleFilledRoundedIcon className="hover:text-red-600" />{" "}
            Shorts
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <SubscriptionsRoundedIcon className="hover:text-red-600" />{" "}
            Subscription
          </li>
          <li className="hover:text-gray-500 cursor-pointer border-b-2 border-black ">
            <QueueMusicRoundedIcon className="hover:text-red-600" /> Youtube
            Music
          </li>
        </ul>

        <h1 className="font-semibold my-2">Explore</h1>
        <ul className="flex flex-col gap-3 ">
          <li className="hover:text-gray-500 cursor-pointer">
            <WhatshotRoundedIcon className="hover:text-red-600" /> Trending
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <QueueMusicRoundedIcon className="hover:text-red-600" /> Music
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <SportsCricketRoundedIcon className="hover:text-red-600" /> Sport
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <SportsEsportsRoundedIcon className="hover:text-red-600" /> Gaming
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <MovieFilterRoundedIcon className="hover:text-red-600" /> Movies
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <LocalLibraryRoundedIcon className="hover:text-red-600" /> Learning
          </li>
          <li className="hover:text-gray-500 cursor-pointer border-b-2 border-black ">
            <NewspaperRoundedIcon className="hover:text-red-600" /> News
          </li>
        </ul>
        <ul className="flex flex-col gap-3 mt-3 ">
          <li className="hover:text-gray-500 cursor-pointer">
            <ManageAccountsRoundedIcon className="hover:text-red-600" />{" "}
            Settings
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <FlagRoundedIcon className="hover:text-red-600" />
            Report history
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <HelpRoundedIcon className="hover:text-red-600" /> Help
          </li>
          <li className="hover:text-gray-500 cursor-pointer border-b-2 border-black">
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
