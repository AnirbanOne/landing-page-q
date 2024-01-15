import React, { useEffect, useState } from "react";
import { upperData } from "../assets/standout"; // Import the array component
import { lowerData } from "../assets/standout"; // Import the array component


const StandOut = () => {
let counter = 10;
let counterSmall = 6;
const [isSmall, setIsSmall] = useState(false);

useEffect(() => {
  if (window.innerWidth < 1024) {
    setIsSmall(true);
  } else {
    setIsSmall(false);
  }
}, [])

  return (
    <div className="w-full mb-16 flex flex-col gap-y-4 md:gap-y-7">
      {/* Heading */}
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Why we <span className="text-primary">stand out </span>
          from others
        </h1>
      </div>

      {/* Design */}
      <div className="relative mb-5">
        <div className="w-[3px] h-[18px] absolute bg-black"></div>
        <p className="text-sm ml-2 uppercase font-semibold">Who we are</p>
      </div>

      {/* Card section */}
      <div className="flex flex-col w-full">
        {/* Upper Division */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 lg:rounded-xl border-r-2 lg:border-[2px] border-primary lg:border-l-0">
          {/* Map over the upperData array */}
          {upperData.map((card, index) => (
            <div
              key={index}
              className="relative w-full px-5 lg:px-0 border-t-2 border-primary lg:border-none  lg:w-[210px] h-full flex flex-col md:items-center"
            >
              {/* Circle */}
              <div className="absolute flex justify-center items-center left-0 -top-5 py-2 px-4 h-[40px] w-[40px] rounded-full border border-primary bg-primary text-white font-bold">
                {index + 1}
              </div>
              {/* Card Content */}
              <div className="w-full h-full flex flex-col gap-y-4 py-[50px]">
                <h2 className="text-lg font-medium text-black">
                  {card.title}
                </h2>
                <p className="text-sm font-normal text-[#646464]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower division */}
        <div className="w-full grid grid-cols-1  lg:grid-cols-5 rounded-br-xl lg:rounded-xl border-[2px] border-primary border-t-0 border-l-0 lg:border-none ">
          {/* Map over the upperData array */}
          {lowerData.map((card, index) => (
            <div
              key={index}
              className="relative w-full px-4 lg:px-0 lg:w-[210px] h-full border-t-2 border-primary lg:border-none flex flex-col items-start"
            >
              {/* Circle */}
              <div className="absolute flex justify-center items-center left-0 -top-5 h-[40px] w-[40px] rounded-full border border-primary bg-primary text-white text-sm font-semibold md:text-lg  md:font-bold">
                {isSmall ? (counterSmall + index) : (counter - index)}
              </div>
              {/* Card Content */}
              <div className="w-full h-full flex flex-col gap-y-4 py-[50px]">
                <h2 className="text-lg font-medium text-black">
                  {card.title}
                </h2>
                <p className="text-sm font-normal text-[#646464]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandOut;
