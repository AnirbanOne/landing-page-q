import React from "react";
import bulb from "../assets/bulb.svg";

const AdvertisementBanner = () => {
  return (
    <div className="h-auto lg:h-[426px] px-4 lg:px-[140px] mb-16 w-full flex flex-col lg:flex-row bg-[#141416] text-white">
      {/* Bulb Image */}
      <div className="flex items-center justify-center w-full md:w-full lg:w-1/2 p-4">
        <img src={bulb} className="h-[300px] md:h-[320px] lg:h-[400px] w-full object-cover md:object-fill" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center md:gap-y-12 lg:gap-0 px-4 py-8 md:py-16 w-full md:w-full lg:w-1/2">
        <h1 className="text-2xl md:text-4xl mt-4 md:mt-0 font-semibold uppercase text-center lg:text-left">
          Creative <span className="text-primary">challenges</span> are our
          passion
        </h1>
        <p className="mt-6 md:mt-10 text-base md:text-lg font-normal text-center md:text-left">
          Stay one step ahead with our future-proof technology services. We
          leverage the latest innovations and industry best practices to ensure
          your business remains agile, competitive, and prepared for the
          challenges of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default AdvertisementBanner;
