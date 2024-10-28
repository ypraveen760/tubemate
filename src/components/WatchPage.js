import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "./utils/constrans";
import Shimmer from "./Shimmer";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Details } from "@mui/icons-material";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import VideoCards from "./VideoCards";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [video, SetVideo] = useState([]);
  const [deatils, setDetails] = useState([]);
  const [descriptionToggle, setDescriptionToggle] = useState(false);

  const videoID = searchParam.get("v");
  const { snippet, statistics } = deatils || {};
  const { channelTitle, title, description, publishedAt } = snippet || {};
  const { viewCount, likeCount, commentCount } = statistics || {};

  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, [videoID]);
  const toggleDescription = () => {
    setDescriptionToggle(!descriptionToggle);
  };

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      if (!response.ok) throw new Error(`status:${response.status}`);
      const data = await response.json();
      SetVideo(data.items);
      const videoData = data.items.find((video) => video.id === videoID);
      setDetails(videoData);
    } catch (error) {
      console.log("Error occured While Fetching Videos" + error);
    }
  };
  console.log(Details);

  if (!deatils) {
    <Shimmer />;
  }
  console.log(video);
  return (
    <div className=" fixed flex top-20 md:top-24 xl:gap-10">
      <div className=" mx-1 md:mx-3 lg:mr-1 lg:ml-2 lg:my-3 xl:ml-16 h-[77vh] md:h-[83vh] lg:h-[88vh] no-scrollbar overflow-auto ">
        <iframe
          className="w-[380px] h-[180px]  sm:w-[720px] sm:h-[360px] rounded-md  shadow-2xl lg:w-[720px] lg:h-[360px] xl:w-[1400px] xl:h-[700px]"
          // width="560"
          // height="315"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
          <div className="flex my-1 lg:my-4">
            <div className="m-1">
              <h1 className=" w-[370px] sm:w-[720px] lg:w-[720px] xl:w-[1400px] text-lg font-semibold ">
                {title}
              </h1>
              <div className="flex  flex-col sm:flex-row xl:justify-between ">
                <div className="flex items-center my-3 gap-2">
                  <PersonRoundedIcon className="border-black border rounded-full " />
                  <h2 className="text-sm">{channelTitle}</h2>
                  <button className="bg-black text-white mx-5 p-1 px-3 text-sm hover:bg-red-600 hover:text-black hover:font-semibold rounded-2xl">
                    Subscribe
                  </button>
                </div>
                <div className="flex gap-2 items-center  ">
                  <button className="bg-gray-200 rounded-2xl text-sm p-1 px-3 gap-1 items-center  text-center flex flex-row hover:bg-black hover:text-white cursor-pointer">
                    <ThumbUpAltOutlinedIcon /> {(likeCount / 10000).toFixed(0)}M
                  </button>
                  <button className="bg-gray-200 rounded-2xl text-sm p-1 px-3 gap-1 items-center text-center flex flex-row hover:bg-black hover:text-white cursor-pointer">
                    <ReplyAllRoundedIcon /> Share
                  </button>
                  <button className="bg-gray-200 rounded-2xl hidden text-sm p-1 px-3 gap-1 items-center text-center  md:flex flex-row hover:bg-black hover:text-white cursor-pointer">
                    <DownloadRoundedIcon /> Download
                  </button>
                  <button className="bg-gray-200 rounded-2xl text-sm p-1 px-3 gap-1 items-center text-center flex flex-row hover:bg-black hover:text-white cursor-pointer">
                    <BookmarkBorderRoundedIcon /> Save
                  </button>
                  <button className="bg-gray-200 rounded-2xl text-sm p-1 px-3 gap-1 items-center text-center flex flex-row hover:bg-black hover:text-white cursor-pointer">
                    <MoreHorizRoundedIcon />
                  </button>
                </div>
              </div>
              <div>
                <div className=" text-sm mt-4 bg-gray-200 p-2 font-medium rounded-md  ">
                  <div
                    className="flex items-center justify-between md:text-lg py-2 "
                    onClick={toggleDescription}
                  >
                    <div className="ml-1 ">
                      {channelTitle} {(viewCount / 100000).toFixed(2)} lakh
                      Views{" "}
                    </div>
                    <div className="mr-1">
                      Uploded {publishedAt ? publishedAt.slice(0, 10) : "N/A"}
                    </div>
                  </div>
                  {descriptionToggle ? (
                    <div className="p-3"> {description}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="bg-red-400 hidden ">
              <PersonRoundedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-col ">
        {" "}
        <div className="overflow-y-scroll h-[94vh] no-scrollbar scroll-smooth">
          {video.map((val) => (
            <Link to={"/watch?v=" + val.id} key={val.id}>
              <VideoCards info={val} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
