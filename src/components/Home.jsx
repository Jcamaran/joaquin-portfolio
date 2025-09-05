import QuickLinks from "./QuickCards";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "/lib/utils";

function Home() {
  return (
    <section
      id="Home"
      className="relative flex justify-center items-center h-screen"
    >
  
      {/* Existing spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50px,#3e3e3e,transparent)] animate-spotlight"></div>

      {/* Fading Bottom Effect */}
      {/* <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none opacity-[.1]"></div> */}





    {/* <BackgroundCellCore /> */}
      <div className=" outline-offset  outline-blur relative z-40 w-full px-0 py-20 min-h-screen flex flex-col justify-center items-center max-w-full pointer-events-none">
        <div className="w-full px-6 lg:px-8 m-4 mb-5 mt-12 text-center max-w-full">
          <div className="animate-slidein max-w-2xl mx-auto ">
            <p className="mb-2 text-md sm:text-lg md:text-lg text-white">Where Ideas Meet Reality</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white lg:text-6xl">
              Welcome To <span className="text-blue-400">J-CODE</span>,
              Joaquin's Programming Portfolio
            </h2>
            <p className="mt-2 text-md sm:text-lg md:text-lg text-white">Learn More About Me</p>
          </div>
        </div>
        {/* ArrowDownwardIcon with slide-in animation */}
        <ArrowDownwardIcon
          fontSize="large"
          style={{ color: "#38bdf8" }}
          className=" mt-0 mb-0"
        />
        <h2 className="text-white text-center text-xl font-pixelify tracking-wide px-4  z-20 bg-inherit">
          QuickLinks
        </h2>
        <div className="flex sm:flex-row justify-center items-center w-full max-w-full pointer-events-auto">
          <QuickLinks />
        </div>
      </div>
    </section>
  );
}

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const size = 0;

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="max-h-screen  w-full inset-0 absolute  overflow-hidden  ">
      <div className="relative   nset-y-0 overflow-hidden">
        <div className="relative  h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-90`````````````0 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-1000 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

const Pattern = ({ className, cellClassName }) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div key={`matrix-row-${rowIdx}`} className="flex flex-col relative z-20 border-b">
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) + Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-600 h-full",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[rgba(14,165,233,0.3)] h-12 w-12"
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};


export default Home;