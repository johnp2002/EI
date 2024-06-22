import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroBanner = () => {
  return (
    <div className="w-full h-2/3 bg-yellow-400 relative">
      <div className="p-8">
        <h1 className=" text-blue-800 com text-7xl max-w-5xl font-bold">
          Crafting Possibilities, Delivering Delights
        </h1>
        <button className="btn flex justify-center items-center gap-2 mt-8 group">
          View them <FaArrowRightLong className="group-hover:translate-x-2" />
        </button>
      </div>
 
      <img
        className="absolute right-0 bottom-0 pb-8  "
        src="./assets/hero.png"
        width={800}
        alt=""
      />
    </div>
  );
};

export default HeroBanner;
