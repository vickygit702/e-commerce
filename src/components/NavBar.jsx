import React from "react";
import { ShoppingCart, User } from "lucide-react"; // using lucide icons

const NavBar = () => {
  return (
    <div className="w-full xl:h-[120px] md:h-[95px] sm:h-[80px] bg-white shadow-md flex items-center justify-between px-6 mx-auto">
      {/* Left side - Logo */}
      <div className="xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[14px] font-bold text-gray-800">
        eMart
      </div>

      {/* Center - Search Bar */}
      <div className="xl:w-[760px] xl:h-[45px] lg:w-[760px] lg:h-[45px] md:w-[300px] md:h-[45px] sm:w-[280px] sm:h-[30px]">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full h-full border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center gap-6 ">
        <ShoppingCart
          size={28}
          className="cursor-pointer text-gray-700 hover:text-blue-500"
        />
        <User
          size={28}
          className="cursor-pointer text-gray-700 hover:text-blue-500"
        />
      </div>
    </div>
  );
};

export default NavBar;
