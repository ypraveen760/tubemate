import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-300 m-1 px-4  hover:bg-black hover:text-white cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl ">
      {name}
    </button>
  );
};

export default Button;
