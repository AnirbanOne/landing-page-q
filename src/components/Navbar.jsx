import React, { useState } from "react";
import navbg from "../assets/navbg.svg";
import logoqloron from "../assets/company-logo.svg";
import { FaUser, FaAngleDown } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pr-3 w-full bg-black sticky top-0 z-50">
      <nav className="flex pr-3 items-center justify-between gap-6">
        {/* Logo */}
        <div
          className="items-center justify-center w-[256px] h-[92px]"
          style={{ backgroundImage: `url(${navbg})` }}
        >
          <img src={logoqloron} className="w-[204px] h-[77px] mr-auto ml-1" />
        </div>

        {/* Items and buttons */}
        <div className="flex justify-between gap-12">
          <ul className="hidden lg:flex lg:flex-row  flex-col md:items-center gap-[4vw] md:gap-12 items-center justify-center">
            <li>
              <a className="text-white">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <select className="text-white bg-transparent">
                  <option>About us</option>
                </select>
                {/* <FaAngleDown className="text-white ml-1" /> */}
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <select className="text-white bg-transparent">
                  <option>Services and support</option>
                </select>
                {/* <FaAngleDown className="text-white ml-1" /> */}
              </div>
            </li>
            <li>
              <a className="text-white">Technologies</a>
            </li>
            <li>
              <a className="text-white">Portfolios</a>
            </li>
            <li>
              <a className="text-white">Contact Us</a>
            </li>
            <li>
              <a className="text-white">Hire Developers</a>
            </li>
          </ul>
          <div className="flex gap-6 items-center ml-10">
            <button className="hidden lg:inline-flex px-[10px] py-4 bg-[#12B1BE] text-white rounded-[27px] w-[95px] h-[34px] items-center justify-center shadow-md">
              SortBoxs
            </button>
            <div className="hidden lg:block text-white">
              <FaUser />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden block">
              <button onClick={handleMenuToggler}>
                {isMenuOpen ? (
                  <FaXmark className="w-5 h-5 text-primary " />
                ) : (
                  <FaBarsStaggered className="w-5 h-5 text-primary " />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`px-4 py-5 ${
          isMenuOpen ? "" : "hidden"
        } bg-black rounded-md`}
      >
        <ul className="flex flex-col items-center gap-[4vw] md:gap-12">
          <li>
            <a className="text-white">Home</a>
          </li>
          <li>
            <div className="flex items-center">
              <select className="text-white bg-transparent">
                <option>About us</option>
              </select>
              {/* <FaAngleDown className="text-white ml-1" /> */}
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <select className="text-white bg-transparent">
                <option>Services and support</option>
              </select>
              {/* <FaAngleDown className="text-white ml-1" /> */}
            </div>
          </li>
          <li>
            <a className="text-white">Technologies</a>
          </li>
          <li>
            <a className="text-white">Portfolios</a>
          </li>
          <li>
            <a className="text-white">Contact Us</a>
          </li>
          <li>
            <a className="text-white">Hire Developers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
