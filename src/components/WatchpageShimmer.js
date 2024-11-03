import React from "react";

const WatchpageShimmer = () => {
  return (
    <div className=" fixed flex top-20 md:top-24 -z-20 xl:gap-10">
      <div className=" mx-1 md:mx-3 lg:mr-1 lg:ml-2 lg:my-3 xl:ml-16 h-[77vh] md:h-[83vh] lg:h-[88vh] no-scrollbar overflow-auto bg-gray-200 ">
        <iframe className="w-[380px] h-[180px] -z-20 sm:w-[720px] sm:h-[360px] rounded-md  shadow-2xl lg:w-[720px] bg-gray-200 lg:h-[360px] xl:w-[1400px] xl:h-[700px]"></iframe>
      </div>
    </div>
  );
};

export default WatchpageShimmer;
