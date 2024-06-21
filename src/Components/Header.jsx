import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import { Link, useNavigate } from "react-router-dom";
import Chapters from "./All Chapters/Chapters";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [dropdown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);


  const handleChapterClick = (chap) => {
    setDropDown(false);
    navigate(`/chapter/${chap}`);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className=" flex justify-center conte p-6">
        <div className=" flex items-center  max-w-full  min-w-2/5 h-16 rounded-full bg-orange-500  border border-gray-100 border-opacity-80 text-white shadow-xl">
          <div className=" flex max-w-full font-semibold p-8 text-lg gap-x-6 opacity-100   ">
            <Link to={"/"} className="cursor-pointer hover:text-yellow-100  ">
              Home
            </Link>
            <div className="relative cursor-pointer hover:text-yellow-100" ref={dropdownRef}>
              <button
                onClick={() => setDropDown(!dropdown)}
                className="flex items-center "
              >
                Chapters <FaChevronDown className="ml-2 mt-1  " />
              </button>
              {dropdown && (
                <div className="grid grid-cols-2  absolute mt-2 w-56 p-2 bg-white text-orange-600 rounded-lg shadow-lg z-10 ">
                  {Array.from({ length: 18 }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handleChapterClick(i + 1)}
                      className="block w-24 text-left px-1 py-1 hover:bg-yellow-100 hover:rounded-lg"
                    >
                      Chapter {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="https://www.linkedin.com/in/abhaykatoch/" className="cursor-pointer hover:text-yellow-100">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
