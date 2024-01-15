import React from "react";
import meet from "../assets/contact.svg";

const MeetTeam = () => {
  return (
    <div className="w-full mb-10 flex flex-col gap-y-7">
      {/* Title */}
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">Get in touch</h1>
      </div>

      {/* Box panel */}
      <div className="bg-black text-gray-400  flex flex-col lg:flex-row rounded-md lg:h-[491px]">
        {/* Image */}
        <div className="w-full lg:w-[60%] flex justify-center md:py-8 py-6  px-6 md:px-[116px] bg-[#55ADCC] rounded-t-md rounded-b-2xl lg:rounded-r-2xl lg:rounded-l-md">
          <img
            src={meet}
            className="object-cover w-[300px] md:h-[429px] md:w-[486px]"
          />
        </div>

        {/* Form */}
        <div className="bg-transparent w-full lg:w-[40%] flex flex-col gap-y-7 items-center px-8 py-6 md:py-[35px] md:px-[81px]">
          <p className="text-sm font-light">
            Please fill out our request for proposal form to get a quote or
            contact us about your upcoming project. we’ll get back to you
            shortly.
          </p>

          <div className="relative bg-transparent w-full">
            <input
              autoComplete="off"
              id="name"
              name="name"
              type="text"
              className="peer placeholder-transparent h-10 w-full bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
              placeholder="Email address"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-gray-500 text-xs md:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Full Name*
            </label>
          </div>

          <div className="relative bg-transparent w-full">
            <input
              autoComplete="off"
              id="email"
              name="email"
              type="text"
              className="peer placeholder-transparent h-10 w-full bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email Address*
            </label>
          </div>

          <div className="relative bg-transparent w-full">
            <input
              autoComplete="off"
              id="phone"
              name="phone"
              type="tel"
              className="peer placeholder-transparent h-10 w-full bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
              placeholder="Email address"
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Phone Number (optional)
            </label>
          </div>

          <div className="relative bg-transparent w-full">
            <textarea
              autoComplete="off"
              id="message"
              name="message"
              type="text"
              className="peer placeholder-transparent row-span-3 h-20 w-full bg-transparent border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600"
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-11 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Message
            </label>
          </div>
          <button className="bg-primary mr-auto text-white rounded hover:bg-secondary text-xs md:text-sm font-semibold w-[60px] md:w-[97px] py-2 px-2 md:py-2 md:px-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
