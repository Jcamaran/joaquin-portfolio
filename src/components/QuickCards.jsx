import React, { useEffect, useState } from "react";
import quickLinksData from "./quickLinksData.json";

function QuickLinks() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 900); // Delay for cards to appear
  }, []);

  return (
    <div
      className={`relative flex flex-col sm:flex-row justify-center items-center w-[90%] sm:w-2/3  md:w-1/3 lg:w-1/3  lg:max-w-xl p-[3px] mt-10 max-sm:mt-4 transition-opacity duration-1000 rounded-lg mx-auto overflow-hidden bg-slate-700  ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="z-10 animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>

      <div className="relative flex flex-row  sm:flex-row justify-center items-center w-full max-w-xl p-4 max-sm:mt-0 transition-opacity duration-1000 rounded-lg mx-auto bg-slate-800 z-20 ">
        {quickLinksData.map((item) => (
          <div
            key={item.id}
            onClick={() => document.getElementById(item.scrollTitle).scrollIntoView({ behavior: 'smooth' })}
            className={`text-white w-20 sm:w-20 lg:w-44 rounded-lg overflow-hidden sm:mx-2 mb-0 sm:mb-0 z-10 bg-slate-800 flex items-center justify-center group cursor-pointer hover:bg-slate-700 transition-all ease-in-out duration-500`}

          >
            <button
              aria-label={item.title}
              className=" font-bold flex items-center p-1 text-sm sm:text-sm md:text-md lg:text-lg  justify-center w-full h-auto   transition-all duration-300 ease-in-out "
            >
              {/* <img
                src={item.icon}
                alt={item.alt}
                className="w-10 h-10"
              /> */}
              <span
                className=" text-white p-0 transition-opacity duration-900 ease-in-out delay-900 whitespace-nowrap"
              >
                {item.title}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
