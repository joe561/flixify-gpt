// import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-semibold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="flex">
        <button className="bg-white text-black p-2 px-8 text-xl hover:bg-opacity-80 rounded-md flex">
          <FaPlay className="my-1 mr-2" /> Play
        </button>
        <button className="bg-gray-500 text-white mx-2 p-2 px-8 text-xl rounded-md flex">
          <IoInformationCircleOutline className="my-1 mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
