import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Verses1 from "../Verses/Verses1";
import Verse_count from "../Verse_count";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Chapter1() {
  const { chap } = useParams();
  const [activeBox, setActiveBox] = useState(null);
  const boxRef = useRef(null);
  const [data, setData] = useState("");

  const handleClick = (box) => {
    setActiveBox((preSet) => (preSet === box ? null : box));
  };

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setActiveBox(null);
    }
  };

  useEffect(() => {
    fetch(`https://vedicscriptures.github.io/chapter/${chap}/`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chap]);

  const handleNext = () => {
    window.location.href = `/chapter/${parseInt(chap) + 1}`;
  };

  const handleBack = () => {
    window.location.href = `/chapter/${parseInt(chap) - 1}`;
  };

  if (!data.translation) {
    return (
      <>
        <div className="right-16 items-center justify-center fixed top-1/2 animate-pulse">
          <button className="px-4 py-4 hover:bg-gray-100 bg-white border border-gray-400 rounded-full ml-auto">
            <div className="h-5 w-5 bg-gray-200"></div>
          </button>
        </div>

        <div className="left-16 items-center justify-center fixed top-1/2 animate-pulse">
          <button className="px-4 py-4 hover:bg-gray-100 bg-white border border-gray-400 rounded-full ml-auto">
            <div className="h-5 w-5 bg-gray-200"></div>
          </button>
        </div>

        <div className="px-4 sm:px-12 lg:px-20 py-4 w-full animate-pulse">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-6 pb-10">
              <div className="text-center h-10 bg-gray-200 rounded-md w-1/4 self-center mb-4"></div>
              <div className="text-center h-10 bg-gray-200 rounded-md w-full mb-4"></div>
              <div className="text-center h-10 bg-gray-200 rounded-md w-full"></div>
            </div>
            <div className="flex flex-col gap-y-5 text-center pb-8">
              <div className="h-0.5 bg-gray-400"></div>
              <div className="flex flex-row px-8 justify-between items-center">
                <div className="h-10 bg-gray-200 rounded-md w-1/4"></div>
                <button className="px-6 py-2 h-10 bg-gray-200 rounded-md w-1/4"></button>
              </div>
              <div className="h-0.5 bg-gray-400"></div>
            </div>

            <div className="flex flex-wrap flex-row gap-y-4 px-6 justify-center gap-x-10">
              <div className="h-24 bg-gray-200 rounded-md w-3/4"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="right-4 sm:right-8 lg:right-16 items-center justify-center fixed top-1/2 transform -translate-y-1/2">
        {parseInt(chap) < 18 && (
          <button
            onClick={handleNext}
            className="px-4 py-4 hover:bg-gray-100 bg-white border border-gray-400 rounded-full ml-auto"
          >
            <FaArrowRight className="text-black" />
          </button>
        )}
      </div>
      <div className="left-4 sm:left-8 lg:left-16 items-center justify-center fixed top-1/2 transform -translate-y-1/2">
        {parseInt(chap) > 1 && (
          <button
            onClick={handleBack}
            className="px-4 py-4 hover:bg-gray-100 bg-white border border-gray-400 rounded-full ml-auto"
          >
            <FaArrowLeft className="text-black" />
          </button>
        )}
      </div>
      <div className="px-20 sm:px-20 lg:px-48 py-4 w-full">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-6 pb-10">
            <div className="text-center chapter_no font-bold text-orange-500 text-3xl">
              Chapter {chap}
            </div>
            <div className="text-center name text-3xl font-medium">
              {data.translation}
            </div>
            <div className="text-center description">
              {data.summary && data.summary.en}
            </div>
          </div>
          <div className="flex flex-col gap-y-5 text-center pb-8">
            <hr className="bg-gray-400 h-0.5" />
            <div className="flex flex-row px-8 justify-between items-center">
              <div className="text-xl font-semibold">
                {data.verses_count} Sloks
              </div>
              <button
                onClick={() => handleClick(1)}
                className="px-6 py-2 rounded-md bg-orange-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-orange-500"
              >
                Go to verse
              </button>
              {activeBox === 1 && (
                <div
                  ref={boxRef}
                  className="flex flex-wrap absolute mt-8 rounded-md border-gray-200 bg-white p-2 gap-y-2 gap-x-1 shadow-lg w-64 sm:w-80 right-8 sm:right-16 transform translate-y-28 z-10"
                >
                  <button className="px-2 rounded-md bg-orange-400 text-white">
                    ALL
                  </button>
                  {Array.from({ length: data.verses_count }, (_, index) => (
                    <Verse_count key={index} chap={chap} slok={index + 1} />
                  ))}
                </div>
              )}
            </div>
            <hr className="bg-gray-400 h-0.5" />
          </div>

          <div className="flex flex-wrap flex-row gap-y-4 px-6 justify-center gap-x-4 sm:gap-x-6 lg:gap-x-10">
            {Array.from({ length: data.verses_count }, (_, index) => (
              <Verses1 key={index} chap={chap} slok={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chapter1;
