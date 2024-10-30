import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "./utils/constrans";
import Shimmer from "./Shimmer";
import VideoCards from "./VideoCards";

const VideoContainer = () => {
  const [video, SetVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      if (!response.ok) throw new Error(`status:${response.status}`);
      const data = await response.json();
      SetVideo(data.items);
    } catch (error) {
      console.log("Error occured While Fetching Videos" + error);
    }
  };

  return video.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap fixed h-[87vh] md:top-24 -z-20  no-scrollbar overflow-y-scroll ">
      {video.map((val) => (
        <Link to={"/watch?v=" + val.id} key={val.id}>
          <VideoCards info={val} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
