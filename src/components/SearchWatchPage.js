import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "./utils/constrans";
import VideoCards from "./VideoCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchWatchPage = () => {
  const searchkey = useSelector((store) => store.searchData);
  const keyword = searchkey.replace(/ /g, "+");

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, [keyword]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${
          keyword ? keyword : "Hare+krishna"
        }&type=video&maxResults=30&regionCode=IN&key=` + GOOGLE_API_KEY
      );
      if (!response.ok) throw new Error(`status:${response.status}`);
      const data = await response.json();

      setSearchResult(data.items);
    } catch (err) {
      console.error("Error Occured" + err.message);
    }
  };

  return searchResult.length === 0 ? (
    <Shimmer className="flex flex-wrap" />
  ) : (
    <div className="absolute top-20 overflow-y-auto flex flex-wrap -z-20  h-[88vh] md:top-24">
      {" "}
      {searchResult.map((val) => (
        <Link to={"/watch?v=" + val.id.videoId} key={val.id.videoId}>
          <VideoCards info={val} />
        </Link>
      ))}{" "}
    </div>
  );
};

export default SearchWatchPage;
