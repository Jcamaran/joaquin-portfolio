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


