import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "./utils/constrans";
import Shimmer from "./Shimmer";
import ActionButtons from "./ActionButtons";
import VideoCards from "./VideoCards";
import WatchpageShimmer from "./WatchpageShimmer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [details, setDetails] = useState(null);
  const [recommendVideos, setRecommendVideos] = useState([]);

  const videoID = searchParam.get("v");
  // const titleData = details?.snippet?.title || " ";
  // const title = titleData ? titleData.slice(0, 15) : "";

  useEffect(() => {
    if (videoID) {
      dispatch(closeMenu());
      getVideos();
    }
  }, [videoID]);

  const getVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${GOOGLE_API_KEY}&part=snippet,statistics`
      );
      if (!response.ok) throw new Error(`status:${response.status}`);
      const data = await response.json();
      setDetails(data.items[0]);
      getRecommendVideos(data.items[0]?.snippet?.title);
    } catch (error) {
      console.log("Error occured While Fetching Videos" + error.message);
    }
  };

  const getRecommendVideos = async (videoTitle) => {
    const title = videoTitle.slice(0, 30);
    console.log(title);

    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${title}&type=video&maxResults=30&regionCode=IN&key=` +
          GOOGLE_API_KEY
      );
      if (!response.ok) throw new Error(`status:${response.status}`);
      const data = await response.json();
      setRecommendVideos(data.items);
    } catch (err) {
      console.error("ERROR OCCURED " + err);
    }
  };
  // console.log(recommendVideos);

  if (!details) {
    <WatchpageShimmer />;
  }

  return (
    <div className=" fixed flex top-20 md:top-24 -z-20 xl:gap-10">
      <div className=" mx-1 md:mx-3 lg:mr-1 lg:ml-2 lg:my-3 xl:ml-16 h-[77vh] md:h-[83vh] lg:h-[88vh] no-scrollbar overflow-auto ">
        <iframe
          className="w-[380px] h-[180px] -z-20 sm:w-[720px] sm:h-[360px] rounded-md  shadow-2xl lg:w-[720px] lg:h-[360px] xl:w-[1400px] xl:h-[700px]"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <ActionButtons info={details} />
      </div>
      <div className="hidden lg:flex lg:flex-col ">
        {" "}
        <div className="overflow-y-scroll h-[94vh] no-scrollbar scroll-smooth">
          {recommendVideos.length !== 0 ? (
            recommendVideos.map((rec, index) => (
              <Link
                to={"/watch?v=" + rec.id.videoId}
                key={rec.id.videoId ? rec.id.videoId : index}
              >
                <VideoCards info={rec} />
              </Link>
            ))
          ) : (
            <Shimmer className="flex flex-col" />
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
