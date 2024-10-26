import React from "react";

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const { viewCount } = statistics;

  return (
    <div className="m-2 shadow-xl w-[340px] rounded-xl p-1">
      <div>
        <img
          className="rounded-lg"
          src={thumbnails?.medium.url}
          alt="video thumbnai"
        ></img>
      </div>
      <div className="flex m-1">
        <div className="m-1">
          <h1 className="text-sm font-semibold flex-wrap flex w-[310px]  ">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm font-light ">
            {channelTitle} {(viewCount / 100000).toFixed(2)} lakh Views
            <br /> uploded {publishedAt.slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
