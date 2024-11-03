import React from "react";

const ShimmerCard = () => {
  return (
    <div className="m-2 shadow-xl w-[340px] overflow-hidden h-[300px] bg-gray-100 rounded-xl p-1">
      <div>
        <img className="bg-gray-200"></img>
      </div>
      <div className="flex m-1">
        <div className="m-1">
          <h1 className="text-sm font-semibold flex-wrap flex w-[310px]  "></h1>

          <div className="flex items-center gap-2 text-sm font-light bg-gray-200 ">
            {" "}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
