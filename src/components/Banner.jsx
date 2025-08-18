import React, { useState, useEffect } from "react";

const banners = [
  {
    text: "Flat 20% Diwali Sale",
    img: "/images/diwali.png",
  },
  {
    text: "Mega Electronics Offer - Up to 40% Off",
    img: "/images/electronics.png",
  },
  {
    text: "Fashion Fest - Buy 1 Get 1 Free",
    img: "/images/fashion.png",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[350px] h-[120px] xl:w-[973px] xl:h-[255px] lg:w-[973px] lg:h-[255px] md:w-[708px] md:h-[202px] sm:w-[380px] sm:h-[130px] mx-auto overflow-hidden rounded-[15px] shadow-lg">
      {/* Current banner */}
      <div
        key={current}
        className="w-full h-full flex items-center justify-between bg-gradient-to-r from-orange-100 to-yellow-100 transition-all duration-700"
      >
        {/* Left text */}
        <h2 className="text-sm xl:text-2xl lg:text-xl md:text-lg sm:text-sm font-bold text-gray-800 w-1/2 text-center">
          {banners[current].text}
        </h2>

        {/* Right image placeholder */}
        <div className="w-1/2 flex justify-center">
          <div className="w-[80px] h-[80px] xl:w-[180px] xl:h-[180px] md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
            Image
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full ${
              idx === current ? "bg-blue-800" : "bg-blue-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
