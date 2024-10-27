import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "./utils/constrans";
import VideoCards from "./VideoCards";
import Shimmer from "./Shimmer";
import { Details } from "@mui/icons-material";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [video, SetVideo] = useState([]);
  const [deatils, setDetails] = useState([]);
  const videoID = searchParam.get("v");
  const { snippet, statistics } = deatils || {};
  const { channelTitle, title, thumbnails, publishedAt } = snippet || {};

  const { viewCount } = statistics || {};

  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, []);

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
  if (!deatils) {
    <Shimmer />;
  }
  console.log(video);
  return (
    <div className="mx-auto lg:mx-3 lg:my-2">
      <iframe
        className="w-[400px] h-[200px]  sm:w-[720px] sm:h-[360px]   shadow-2xl lg:w-[720px] lg:h-[360px] xl:w-[1400px] xl:h-[700px]"
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
        <div className="flex m-1">
          <div className="m-1">
            <h1 className=" w-[400px] sm:w-[720px] lg:w-[720px] xl:w-[1400px] text-lg font-semibold ">
              {title}
            </h1>

            <div className="flex items-center gap-2 text-sm font-light ">
              {channelTitle} {(viewCount / 100000).toFixed(2)} lakh Views
              <br /> uploded {publishedAt ? publishedAt.slice(0, 10) : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
