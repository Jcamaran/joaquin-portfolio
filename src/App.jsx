import { useState } from 'react';
import Footer from './components/Home.jsx';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import "./styles/tailwind.css";
import React from 'react';
import Portfolio from './components/Projects.jsx';
import SpotlightCards from './components/About.jsx';
import ProjectCards from './components/ProjectCards';
import XP from './components/XP.jsx';
import { BackgroundBeams } from './components/newPage.jsx';
function App() {

  return (
    
    <div className='relative h-full w-full bg-slate-950 overflow-x-hidden'>
         {/* Background grid effect */}
      
      <div className=" absolute inset-0 -z-2 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      {/* Main Content */}
      <Navbar />
      <Home /> 
      <SpotlightCards/>
      <XP />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;


