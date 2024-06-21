import React from "react";
import About from "./About";
import Chapters from "./All Chapters/Chapters";
import { Link } from "react-router-dom";

function Interface() {
  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:px-2">
        <div className="flex flex-col items-center">
          <div className="relative w-full sm:w-3/4 lg:w-2/3">
            <img
              src="download.jfif"
              alt=""
              className="w-full rounded-2xl"
              loading="lazy" 
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="font-serif font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-white">
                Experience the Gita
                <span className="font-bold block text-yellow-200 mt-4">
                  Anywhere, Anytime
                </span>
              </h2>
              <Link
                to="/chapter/1"
                className="mt-6 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-sm md:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-orange-600 text-white shadow-md shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="mb-12">
        <About />
      </div>
      <div id="chapters">
        <Chapters />
      </div>
    </>
  );
}

export default Interface;
