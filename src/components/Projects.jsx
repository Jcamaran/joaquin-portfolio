import React from "react";
import { useState,useEffect } from "react";
import ProjectCards from "./ProjectCards";
import data from "./ProjectCardsJson.json"

export default function Portfolio({proj_name, description}) {

    const [projects , setProjects] = useState([]);
    const [bgVisible, setBgVisible] = useState(false);

    // load JSON file into state for parsing
    useEffect(() =>{
        setProjects(data);
    },[]);
    useEffect(() => {
        // Delay the background appearance on page load
        const timer = setTimeout(() => {
          setBgVisible(true);
        }, 2); // Adjust delay as needed
        return () => clearTimeout(timer);
      }, []);
    return (
        


        <section
            id="Projects"
            className=" min-h-screen w-full flex overflow-x-hidden  border-none">
            
            <div className=" h-full w-full bg-fuchsia-850">
                <div className="absolute h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_0%,#000_70%,transparent_100%)]">
                
                
                
          
                <section
                    id="main_content"
                    className="  h-full w-full flex flex-col items-center justify-start space-x-12">
                    {/* Project Cards */}

                        {/* Section Heading */}
                    <h2 className="   flex w-full mt-5 mb-5 sm:mt-20 sm:mb-10 justify-center text-[40px] lg:text-5xl md:text-4xl sm:text:3xl relative top-0  h-auto py-4   bg-gradient-to-r items-center from-blue-300 via-blue-400 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto drop-shadow-[0_0_15px_#6A42C2]">
                        Recent Projects
                    </h2>
                    
                    
                    <div
                        id="project_squares"
                        className={`  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-0 pt-5 
                                        transition-all ease-in-out duration-1000 
                                        rounded-2xl bg-opacity-10 ml-0 
                                        ${bgVisible ? 'bg-opacity-100' : 'bg-opacity-0'}`}
                        >
                        {projects.map((project, index) => (
                            <div
                            key={index}
                            className="hover:scale-105 transition-transform duration-100 ease-in-out  "
                            >
                            <ProjectCards
                                
                                imageSrc={project.imageSrc}
                                title={project.title}
                                
                            />
                            </div>
                        ))}
                    </div>
                </section>


                </div>
            </div>
            
    
           
        </section>
    );
}