import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "News",
    "Cricket",
    "Movies",
  ];
  return (
    <div className=" grid-flow-col mx-3 overflow-x-auto scroll-smooth col-span-11  ">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
