import React, { useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const ActionButtons = (info) => {
  const { snippet, statistics } = info.info || {};
  const { channelTitle, title, description, publishedAt } = snippet || {};
  const [descriptionToggle, setDescriptionToggle] = useState(false);

  const { viewCount, likeCount } = statistics || {};
  const toggleDescription = () => {
    setDescriptionToggle(!descriptionToggle);
  };
  return (
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
                {channelTitle} {(viewCount / 100000).toFixed(2)} lakh Views{" "}
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
    </div>
  );
};

export default ActionButtons;
