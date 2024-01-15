import React, { useState } from "react";
import worlsvg from "../assets/worldMap2.svg";
import Mahindra from "../assets/sliderImages/mahindra.svg";
import Aeagle from "../assets/sliderImages/americaneagle.svg";
import Nike from "../assets/sliderImages/nike.svg";
import supersource from "../assets/sliderImages/smartsourcing.svg";
import smartdata from "../assets/sliderImages/smartdata.svg";
import htc from "../assets/sliderImages/htc.svg";
import Slider from "react-infinite-logo-slider";
import { IoPlay } from "react-icons/io5";
import { IoIosPause } from "react-icons/io";

const WorldLayout = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="w-full mb-16 px-8 md:px-24 lg:px-36 py-6 flex flex-col items-center gap-y-6 md:gap-y-8 bg-cover bg-center bg-no-repeat lg:h-[548px]"
      style={{ backgroundImage: `url(${worlsvg})` }}
    >
      <div className="w-full md:mt-4 md:max-w-4xl text-center flex flex-col gap-y-7 md:gap-y-24 lg:gap-y-32 items-center justify-between py-10">
        <h1 className="text-2xl md:text-4xl font-semibold">
          <span className="text-primary">Trusted by companies </span>small and
          large around the globe
        </h1>
        <button className="bg-primary text-sm md:text-lg justify-center shadow-[0px_4px_25px_0px_#00000024] hover:bg-secondary text-white rounded-md py-2 px-4 flex gap-x-2">
          Get Started With Qloron
        </button>
      </div>

      {/* Marquee / Animation Logo slider */}
      <div className="w-full md:max-w-4xl lg:max-w-6xl relative flex justify-center overflow-x-hidden ">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul
            className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${
              isPaused ? "" : "animate-infinite-scroll"
            }`}
          >
            <li className="">
              <img
                src={htc}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={Aeagle}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={Nike}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={supersource}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={smartdata}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={Mahindra}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
          </ul>
          <ul
            className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${
              isPaused ? "" : "animate-infinite-scroll"
            }`}
            aria-hidden="true"
          >
            <li>
              <img
                src={htc}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={Aeagle}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={Nike}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={supersource}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={smartdata}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
            <li>
              <img
                src={Mahindra}
                alt="Facebook"
                className="w-20 h-12 md:w-32 md:h-20 shadow-lg"
              />
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="bg-primary inline-flex justify-center shadow-[0px_4px_25px_0px_#00000024] hover:bg-secondary text-white rounded-full p-1 md:py-2 md:px-2 "
      >
        {isPaused ? (
          <IoPlay className="text-white md:text-sm" />
        ) : (
          <IoIosPause className="text-white md:text-sm" />
        )}
      </button>
    </div>
  );
};

export default WorldLayout;
