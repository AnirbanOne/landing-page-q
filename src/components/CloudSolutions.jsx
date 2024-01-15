import React from "react";
import cloudsolutions from "../assets/cloud.svg";

const CloudSolutions = () => {
  return (
    <div className=" w-full mb-16 flex flex-col items-center gap-y-4 md:gap-y-7">
      {/* Heading */}

      <div className=" max-w-2xl text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          The company that leaders{" "}
          <span className="text-primary">trust to help </span>
          them grow and thrive
        </h1>
      </div>

      {/* Advertise */}
      <div className="w-full flex flex-col">
        <div className="relative mb-5">
          <div className="w-[3px] h-[18px] absolute bg-black"></div>
          <p className="text-sm ml-2 uppercase font-semibold">
            Who we are
          </p>
        </div>

        {/* Main panel */}
        <div className="w-full  flex flex-col lg:items-center lg:flex-row gap-y-6 lg:gap-x-6">
          <img
            src={cloudsolutions}
            alt="Image"
            className="lg:w-[721px] lg:h-full object-cover"
          />
          <div className="pr-4 lg:pr-0 lg:ml-[60px] flex flex-col justify-center gap-y-6">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              Cloud solutions for{" "}
              <span className="text-primary">every business</span>
            </h1>
            <p className="text-sm lg:text-lg font-normal">
              Proven and best in class: integrated, with silos down,
              productivity up, and potential unleashed.
            </p>
            <button className="bg-primary w-[215px] lg:w-[215px]  justify-center shadow-[0px_4px_25px_0px_#00000024] hover:bg-secondary text-white rounded-md py-2 px-4 flex md:px-2 md:w-[190px] lg:px-4 ">
              Get Started With Qloron
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
