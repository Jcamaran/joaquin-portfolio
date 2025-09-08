import React, { useState, useEffect } from "react";

import ring from "/project_pics/joa.png";
import limo from "/project_pics/limo1.png";
import fitgenix from "/project_pics/fitgen.png"
import work from "/project_pics/work.jpg"
import moto from "/project_pics/MotoPrice.jpg"

const proj_pics = [
  { src: ring, title: "Ring Facial Regocnition", description: "A facial recognition project using my Ring Camera from home to identify visitors and unlock my smartlock"},
  { src: limo, title: "NLP App for Anomoly Classification", description: "Python & Streamlit App which uses NLP to take in text and classify Root Cause Codes for anomoly detection" },
  { src: moto, title: "MotoPrice" , description: "Working on an IOS app which uses AI to get an accurate estimate of the worth of your motorcycle"},
  { src: work, title: "RAG Smart Correct Action Assistant", description: "Working with a company to create a RAG + LLM system which helps answer technical questions for engineers" },
];

export default function Portfolio() {

  // Background fade-in effect

  return (
    <section
      id="Projects"
      className=" w-full  min-h-screen   flex overflow-x-hidden " 
    >

      <div className="h-full  min-h-screen w-full bg-fuchsia-850 flex items-center">
       
        <section
          id="main_content"
          className="h-full w-full flex flex-col items-center justify-center space-x-0 z-0"
        >
          {/* Section Heading */}
          <h2 className="flex w-full mt-5 mb-5 sm:mt-10 sm:mb-10 justify-center text-[40px] lg:text-5xl md:text-4xl sm:text:3xl relative top-0 h-auto py-4 bg-gradient-to-r items-center from-blue-300 via-blue-400 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto drop-shadow-[0_0_15px_#6A42C2]">Projects
          </h2>
          <p className=" w-full font-bold flex items-center  justify-center text-sm text-white"> More project details/updates coming soon</p>
          <div >
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl p-8 transition-all ease-in-out duration-300">
              {proj_pics.map((pic, index) => (
                <div
                  key={index}
                  className="relative group rounded-2xl p-5 h-auto sm:h-72 flex flex-col justify-between
                  bg-white/10 backdrop-blur-sm border border-white/30 shadow-lg
                  transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={pic.src}
                    className="h-32 w-full object-cover rounded-xl"
                  />

                  {/* Project Info */}
                  <div className = "h-full w-full  ">
                    <h3 className=" flex items-start text-lg font-semibold text-white">
                      {pic.title}
                    </h3>
                    <p className="hidden sm:block flex items-center text-sm text-slate-200">{pic.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          
        </section>
      </div>
    </section>
  );
}
