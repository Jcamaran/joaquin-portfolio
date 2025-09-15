import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar() {
  const [bgColor, setBgColor] = useState("bg-black");
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      // Always show navbar if mouse is within 50px of top
      if (e.clientY < 50) {
        setNavVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out mt-2 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-violet-500 opacity-75 blur-xl rounded-full z-0"></div>
      <div
        className={`relative rounded-full ${bgColor} text-white p-3 sm:p-4 md:p-5 lg:p-7 transition-all duration-300 flex justify-center items-center`}
      >
        <nav className="relative z-10 flex items-center justify-center">
          <a
            href="#"
            className="mt-1 text-lg sm:text-lg md:text-2xl lg:text-3xl text-amber-100 font-myFont whitespace-nowrap"
          >
            J-CODE
          </a>
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 ml-2 sm:ml-4 md:ml-6">
            <li>
              <a
                href="https://github.com/jcamaran"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joaquin-camaran-69b858247/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-gray-300">
                <EmailIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
