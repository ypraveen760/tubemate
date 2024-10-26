import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <iframe
      className="w-[400px] h-[200px] mx-auto sm:w-[720px] sm:h-[360px] lg:mx-3 lg:my-2 shadow-2xl lg:w-[720px] lg:h-[360px] xl:w-[1400px] xl:h-[700px]"
      // width="560"
      // height="315"
      src={"https://www.youtube.com/embed/" + searchParam.get("v")}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default WatchPage;
