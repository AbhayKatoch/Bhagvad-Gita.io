import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Sloks() {
  const { chap, slokid } = useParams();
  const [data, setData] = useState("");
  const [totalVerses, setTotalVerses] = useState(0);
  const [prevTotalVerses, setPrevTotalVerses] = useState(0);

  useEffect(() => {
    fetch(`https://vedicscriptures.github.io/slok/${chap}/${slokid}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });

    fetch(`https://vedicscriptures.github.io/chapter/${chap}/`)
      .then((response) => response.json())
      .then((data) => {
        setTotalVerses(data.verses_count);
      });

    if (parseInt(chap) > 1) {
      fetch(`https://vedicscriptures.github.io/chapter/${parseInt(chap) - 1}/`)
        .then((response) => response.json())
        .then((data) => {
          setPrevTotalVerses(data.verses_count);
        });
    }
  }, [chap, slokid]);

  if (!data) {
    return (
      <>
        <div className="right-4 sm:right-8 lg:right-16 items-center justify-center fixed top-1/2 animate-pulse">
          <div className="px-4 py-4 bg-gray-200 border border-gray-400 rounded-full ml-auto"></div>
        </div>
        <div className="left-4 sm:left-8 lg:left-16 items-center justify-center fixed top-1/2 animate-pulse">
          <div className="px-4 py-4 bg-gray-200 border border-gray-400 rounded-full ml-auto"></div>
        </div>

        <div className="flex flex-col items-center gap-y-8 text-center px-4 sm:px-8 lg:px-20 py-4 animate-pulse">
          <div className="flex flex-col gap-y-5 items-center">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mt-2"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mt-2"></div>
          <div className="px-20 gap-y-6 flex flex-col">
            <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
            <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
          </div>
        </div>
      </>
    );
  }

  let commentary;
  if (data.chinmay?.hc !== "No commentary.") {
    commentary = (
      <div className="flex flex-col gap-y-2 leading-normal text-lg sm:text-xl">
        <div>"{data.tej?.ht}"</div>
        <div>by {data.tej?.author}</div>
      </div>
    );
  } else {
    commentary = (
      <div className="flex flex-col gap-y-2 leading-normal text-lg sm:text-xl">
        <div>"{data.chinmay?.hc}"</div>
        <div>by {data.chinmay?.author}</div>
      </div>
    );
  }

  let engcommentary;
  if (data.shiva?.hc !== "No commentary.") {
    engcommentary = (
      <div className="flex flex-col gap-y-2 leading-normal text-lg sm:text-xl">
        <div>"{data.siva?.et}"</div>
        <div>by {data.siva?.author}</div>
      </div>
    );
  } else {
    engcommentary = (
      <div className="flex flex-col gap-y-2 leading-normal text-lg sm:text-xl">
        <div>{data.san?.et}"</div>
        <div>by {data.san?.author}</div>
      </div>
    );
  }

  const handleNext = () => {
    if (parseInt(slokid) < totalVerses) {
      window.location.href = `/${chap}/verse/${parseInt(slokid) + 1}`;
    } else {
      window.location.href = `/${parseInt(chap) + 1}/verse/1`;
    }
  };

  const handleBack = () => {
    if (parseInt(slokid) > 1) {
      window.location.href = `/${chap}/verse/${parseInt(slokid) - 1}`;
    } else if (parseInt(chap) > 1) {
      window.location.href = `/${parseInt(chap) - 1}/verse/${prevTotalVerses}`;
    }
  };

  return (
    <>
      <div className="right-4 sm:right-8 lg:right-16 items-center justify-center fixed top-1/2 transform -translate-y-1/2">
        {parseInt(chap) <= 18 && (
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

      <div className="flex flex-col items-center gap-y-8 text-center px-16 sm:px-20 lg:px-56 py-4">
        <div className="flex flex-col gap-y-5 items-center">
          <div className="font-bold text-orange-500 text-xl sm:text-2xl">
            Chapter {data.chapter}
          </div>
          <div className="font-bold text-orange-600 text-3xl sm:text-5xl">
            Slok {data.verse}
          </div>
        </div>
        <p className="font-medium text-lg sm:text-3xl mx-auto max-w-md text-center leading-normal text-orange-700">
          {data.slok}
        </p>
        <p className="font-medium text-lg sm:text-2xl mx-auto text-center max-w-lg leading-normal">
          {data.transliteration}
        </p>
        <div className="px-4 sm:px-20 gap-y-6 flex flex-col">
          {commentary}
          {engcommentary}
        </div>
      </div>
    </>
  );
}

export default Sloks;
