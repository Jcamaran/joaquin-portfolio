import React, { useState, useEffect } from "react";

import ring from "/project_pics/joa.png";
import limo from "/project_pics/limo1.png";
import fitgenix from "/project_pics/fitgen.png"
import work from "/project_pics/work.jpg"

const proj_pics = [
  { src: ring, alt: "Ring Project" },
  { src: limo, alt: "Limo Project" },
  { src: fitgenix, alt: "fitgenix" },
  { src: work, alt: "fitgenix" },
];

export default function Portfolio() {
  const [bgVisible, setBgVisible] = useState(false);

  // Background fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setBgVisible(true);
    }, 2);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="Projects"
      className="h-screen w-full h flex overflow-x-hidden " 
    >
  
  

      <div className="h-full w-full bg-fuchsia-850">
       
        <section
          id="main_content"
          className="h-full w-full flex flex-col items-center justify-center space-x-0 z-0"
        >
          {/* Section Heading */}
          <h2 className="flex w-full mt-5 mb-5 sm:mt-10 sm:mb-24 justify-center text-[40px] lg:text-5xl md:text-4xl sm:text:3xl relative top-0 h-auto py-4 bg-gradient-to-r items-center from-blue-300 via-blue-400 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto drop-shadow-[0_0_15px_#6A42C2]">
            Recent Projects
          </h2>
          <div >
                {/* Project grid */}
            <div
                id="project_squares"
                className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 
                gap-5 mx-0 pt-0 
                transition-all ease-in-out duration-1000 
                rounded-2xl bg-opacity-10 
                place-items-center`}

            >
                {proj_pics.map((pic, index) => (
                <div
                    key={index}
                    className=" rounded-xl overflow-hidden hover:scale-105 transition-transform duration-800 ease-in-out "
                >
                    <img
                    src={pic.src}
                    alt={pic.alt}
                    className="object-cover rounded-xl relative w-32 h-24 sm:w-64 sm:h-40 md:w-80 md:h-48 lg:w-96 lg:h-60 cursor-pointer overflow-hidden hover:shadow-[10px_10px_0px_#8B5DFF] hover:-translate-x-1  duration-800 transition-all ease-in-out duration-200"
                    />
                </div>
                ))}
            </div>

            
          </div>

          
        </section>
      </div>
    </section>
  );
}
