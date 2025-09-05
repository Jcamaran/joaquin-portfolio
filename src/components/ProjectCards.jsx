import React from "react";


export default function ProjectCards({ imageSrc, title }) {
  return (
    <div className="relative w-48 h-36 sm:w-80 sm:h-48 md:w-80 md:h-48 lg:w-96 lg:h-60 cursor-pointer rounded-lg overflow-hidden hover:shadow-[10px_10px_0px_#8B5DFF] hover:-translate-x-1  duration-800">
      {/* Background Image */}
      <img
        src={cards_pics}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="relative  w-full h-full bg-black bg-opacity-30  p-0 text-white">
        <h2 className="text-xl font-bold size-16">{title}</h2>
        
       
      </div>
    </div>
  );
}



