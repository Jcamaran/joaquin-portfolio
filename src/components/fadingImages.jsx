import { useEffect, useState } from "react";

function Slideshow({ images, slideMs = 3000, pauseOnHover = true }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, slideMs);
    return () => clearInterval(id);
  }, [images.length, slideMs, paused]);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* dots navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-2 rounded-full ${
              i === active ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
