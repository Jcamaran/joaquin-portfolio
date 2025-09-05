


import  { useEffect, useRef, useState } from "react";
// Importing Pictures for site

// About section
import sacred from "/About/Sacred_Heart_University_seal.png"
import code from "/About/code.png"
import chicago from  "/About/chicago.jpg"
import soccer from  "/About/soccer.jpg"
import cycle from  "/About/cycle.jpg"
import camp from  "/About/camp.jpg"
import moto from  "/About/me_moto.jpg"
import surf from  "/About/surf.jpg"

// Frameworks
import tailwind from "/frameworks/Tailwind_CSS_Logo.svg"
import jsx from "/frameworks/JSX.svg"
import js from "/frameworks/JS.svg"
import python from "/frameworks/Python.svg"
import cprogramming from "/frameworks/Cprogramming.svg"
import r from "/frameworks/r.png"
import text from "/frameworks/text.png"
import linux from "/frameworks/linux.png"
import mongodb from "/frameworks/mongodb.png"
import database from "/frameworks/database.png"
import excel from "/frameworks/excel.png"

// Globe Section
import globe from "/About/globe3.mp4"

// Email Icon
import email from "/About/email.png"



import Spotlight from "./spotlight-effect";

function Slideshow({images, slideMs = 3000, pauseOnHover = true}){
    const[active,setActive] = useState(0);
    const[paused, setPaused] = useState(false);

    // Advance the slide on an interval
    useEffect(() => {
        if (images.length <= 1 || paused) return;
        const id = setInterval(() => {
        setActive((i) => (i + 1) % images.length);
        }, slideMs);
        return () => clearInterval(id);
    }, [images.length, slideMs, paused]);
}




const images = [
code, chicago, soccer, cycle, camp, moto, surf
];

const duration = 18; // seconds
const interval = duration / images.length;


export default function SpotlightCards() {


    const containerRef = useRef(null);
  
    useEffect(() => {
      let spotlightInstance;
  
      if (containerRef.current) {
        spotlightInstance = new Spotlight(containerRef.current);
      }
  
      return () => {
        if (spotlightInstance) spotlightInstance.destroy(); // Cleanup
      };
    }, []);

    
    const frameworks = ["React", "Vue", "Angular", "Svelte", "Next.js", "Solid", "Javascript", 'R', "C", "Python","CSS","Tailwind"];

    
    const slidingLogos = [
        <img  src={tailwind} alt="Tailwind CSS Logo" />,
        <img  src={jsx} alt="JSX Logo" />,
        <img  src={js} alt="JavaScript Logo" />,
        <img  src={python} alt="Python Logo" />,
        <img  src={cprogramming} alt="C Programming Logo" />,
        <img  src={r} alt="Database Logo" />,
        <img  src={text} alt="Database Logo" />,
        <img  src={linux} alt="Database Logo" />,
        <img  src={mongodb} alt="Database Logo" />,
        <img src={database} alt="Database Logo" />,
        <img  src={excel} alt="Database Logo" />,
        <img  src={tailwind} alt="Database Logo" />


    ];


    
    return (
        <section
        
            id="About"
            className=" w-full flex flex-col items-center  justify-center overflow-x-hidden min-h-screen bg-slate-950 antialiased mb-10"
            >
        
            <h1
                className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl sm:text-5xl md-text-5xl lg-text-6xl font-extrabold text-transparent text-center select-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] z-20 ">
                About Me
            </h1>


            
            <p className="text-md text-white mt-8">
            Hover mouse over widgets
            </p>

            {/* Card Container */}

            <script src="./spotlight-effect.js"></script>


            <div
                ref={containerRef}
                id="meCards"
                data-spotlight
                className=" mx-8 grid gap-6 lg:grid-cols-2 sm:grid-row  w-[70%] pt-10">
                  
                 
                     <div className="relative overflow-x-hidden h-32 sm:h-40 md:h-40 lg:h-full bg-slate-600 rounded-3xl p-px overflow-hidden before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-600 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-1 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] group">
                        {/* Card Front and Back
                        
                        {/* Card Content */}
                        <div className="relative h-full bg-slate-900 lg:p-6 p-4 rounded-[inherit] z-20 overflow-hidden">
                           <div className="relative group w-full h-full">
                                {/* Slideshow Images */}
                                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-90">
                                  {images.map((src, index) => (
                                    <img
                                    key={index}
                                    src={src}
                                    className="absolute inset-0 w-full h-full object-cover rounded-xl animate-fade"
                                    style={{
                                        animationDuration: `${duration}s`,
                                        animationDelay: `${index * interval}s`
                                    }}
                                    />
                                ))}
                                </div>
   
                                <h2
                                    className="
                                    absolute inset-0 flex justify-center items-center
                                    opacity-0 translate-y-2
                                    group-hover:opacity-100 group-hover:translate-y-0
                                    text-white  font-bold mb-0
                                    transition-all ease-in-out duration-500 z-10 translate-x-1
                                    "
                                >
                                    Bringing Passion For Everything I Do
                                </h2>
                                </div>
                        </div>
                    </div>
                <div
                    id="stacked_side_cards"
                    className="flex flex-col gap-6">

                    <div className=" relative overflow-x-hidden h-32 sm:h-40 md:h-40 lg:h-full bg-slate-600 rounded-3xl p-px overflow-hidden before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-100 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] group">
                        {/* Card Front and Back */}
                        {/* CARD TWO CONTENT */}
                        <div className="relative h-full w-full p-0 sm:p-12 md:p-12 bg-blue-900 lg:p-12 rounded-[inherit] z-20 overflow-hidden">
                            {/* Radial Gradient */}
                            <div
                                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                                aria-hidden="true"
                            >
                                <div className="absolute inset-0 translate-z-0 bg-slate-00 rounded-full blur-[80px]"></div>
                            </div>

                            {/* Flex container to align logo and text */}
                            <div className="  flex flex-row  h-full items-center justify-center w-[100%] mx-auto space-x-5">
                                {/* Image */}
                                <div className="flex-shrink-0 mt-1">
                                    <div className="relative flex items-center justify-center">
                                        <div
                                            className="w-[100%] h-[100%] absolute inset-0 m-auto -translate-y-[0%] blur-xl -z-10 rounded-full bg-red-500"
                                            aria-hidden="true"
                                        ></div>
                                        <img
                                        src={sacred}
                                            className=" items-center justify-center object-scale-down w-24 h-24 md:w-28 md:h-28 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
                                            
                                            alt="SHU Logo"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className=" hidden max-w-[900px]   items-center flex-col ml-0 transition-all ease-in-out  sm:block">
                                    <h2 className="transition-all duration-500 ease-in-out group-hover:translate-y-0 text-2xl md:text-lg sm:text-sm text-slate-200 font-bold mb-1">
                                        Where Do I Study?
                                    </h2>
                                    <p className="   md:text-sm sm:text-sm text-slate-200 md:block opacity-100 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mb-2">
                                        I am a Senior and a Comp-sci Major at Sacred Heart University (SHU), with an interst in Data Science and Web Development!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Duplicate Spotlight Card */}
                  
                    {/* Example: Who Am I Card */}
                    <div   className="  relative overflow-x-hidden h-32 sm:h-40 md:h-40 lg:h-full bg-slate-600 rounded-3xl p-px overflow-hidden before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-600 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] group" >

                        
                        <div className=" 
    
    
    
    
    
    relative h-full bg-slate-900 p-3 sm:p-6 rounded-[inherit] z-20 overflow-hidden">
                           
                            <div className=" grid grid-cols-4 sm:grid-cols-3  gap-2 sm:gap-3 opacity-70 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105 relative sm:absolute sm:right-10 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2 md:absolute md:right-10 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 justify-items-center items-center 
                            
                            md:mx-0">
                                {slidingLogos.map((logo, index) => (
                                    <div key={index} className="border border-slate-400 w-7 h-7  bg-blue-700 sm:w-12 sm:h-12 sm:p-2 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110">
                                    {logo}
                                    </div>
                                ))}
                                </div>




                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                </div>
                                <div className="flex flex-col h-full items-start ">
                                    <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                    </div>
                                    <div className="grow mb-5 z-40  justify-start w-3/5 hidden sm:block">
                                        <h2 className="text-xl text-slate-200 font-bold mb-1 z-40 group-hover:ml-2  ease-in-out duration-200 ">Always Looking To Expand My Techstack</h2>
                                    
                                </div>

                              


                               
                            </div>
                        </div>
                    </div>
                </div> 
                <div className=" z-20 relative overflow-x-hidden h-32  sm:h-40 md:h-40 lg:h-full bg-slate-600 rounded-3xl p-px overflow-hidden before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-600 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-1 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] group">
                       <div className="relative  h-full w-full bg-slate-900 rounded-3xl">
                       
                           
                           <div className="flex  w-full h-full justify-center items-center text-center overflow-hidden ">
                            
                               
                               
                               <div className="flex  flex-col sm:flex-row justify-center sm:justify-between items-center w-full p-5">
                                <div className="hidden sm:block w-full sm:w-1/2 text-left">
                                    <h2 className="rounded-xl p-5 text-xl transition-all ease-in-out text-slate-200 font-bold group-hover:ml-2">
                                    Able To Connect From Anywhere
                                    </h2>
                                </div>

                                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 flex items-center justify-center">
                                    <video
                                    src={globe}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain   p-2 group-hover:mr-2 transition-all ease-in-out duration-150 group-hover:scale-105 rounded-full"
                                    />
                                </div>
                                </div>



                            
                           
                           </div>
                       </div>
                   </div> 
                    <div className="relative   h-32 sm:h-40 md:h-40 lg:h-full   bg-slate-600 rounded-3xl p-px overflow-hidden before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] group">
                        {/* Card Front and Back */}
                        
                        {/* Card Content */}
                        <div className="relative h-full bg-slate-900 p-6  rounded-[inherit] z-20 overflow-hidden">
                            {/* Radial Gradient */}
                            <div
                                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                                aria-hidden="true"
                            >
                                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                            </div>
                            
                            <div className="flex flex-col h-full items-center justify-center w-full">
                                {/* Image */}
                                
                                {/* Text Content */}
                                <div className="flex  space-x-0 gap-5 text-xl transition-all ease-in-out  mb-0  items-center ">
                                    {/* Left Column */}
                                    <div className="hidden sm:block  group-hover:ml-2 w-full sm:w-1/2 ease-in-out duration-300">
                                        <h2 className=" hidden sm:block text-2xl transition-all ease-in-out text-slate-200 font-bold mb-1 sm:text-lg">
                                            Get in touch?
                                        </h2>
                                        <p className="hidden sm:block text-sm text-slate-300 w-4/5 ">
                                            Looking to collaborate or reach out for any questions? Feel free to contact me!
                                        </p>
                                    </div>

                                    {/* Right Column */}
                                    <div className="flex   right-2 group-hover:mr-2  ease-in-out duration-300 w-full sm:w-1/2  ">


                                        <div className='flex justify-center items-center relative mx-auto group  '>
                                            <div
                                                className="p-1 absolute -inset-1 rounded-lg group-hover:opacity-100 group-hover:duration-500 "
                                            ></div>

                                            <p className="text-white  text-sm z-40"></p>

                                            <img
                                                src={email}
                                                alt="Email Icon"
                                                className="    flex items-center justify-center w-20 h-20 bg-blue-600 p-1 rounded-xl z-40 cursor-pointer border-2 border-blue-400 bg-gradient-to-r from-purple-600 to-pink-300 opacity-80 transition duration-1000 group-hover:opacity-100 group-hover:duration-500 animate-pulseBorder"
                                                onClick={() => {
                                                document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
                                                }}
                                        />
                                        </div>



                                    </div>
                                    
                                </div>
                                {/* this is where an action Action Button woudl go if i were to create one */}
                            </div>
                        </div>
                    </div>  
            </div>
        </section>
    );
}