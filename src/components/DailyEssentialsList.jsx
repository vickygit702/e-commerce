import React from "react";

const essentials = [
  { id: 1, name: "Milk", img: "/milk.jpg" },
  { id: 2, name: "Bread", img: "/milk.jpg" },
  { id: 3, name: "Eggs", img: "/milk.jpg" },
  { id: 4, name: "Rice", img: "/milk.jpg" },
  { id: 5, name: "Oil", img: "/milk.jpg" },
  { id: 6, name: "Vegetables", img: "/milk.jpg" },
];

const DailyEssentialsList = () => {
  return (
    <div className="flex mt-5 justify-between space-evenly ">
      {essentials.map((item) => (
        <div key={item.id}>
          <div
            className="h-[65px] w-[65px] xl:h-[152px] xl:w-[152px] lg:h-[152px] lg:w-[152px] 
             md:h-[110px] md:w-[110px] sm:h-[85px] sm:w-[85px] 
             border rounded-lg shadow-md  bg-white"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-full w-full object-fit p-5 rounded-full"
            />

            {/* Text inside same box, just below image */}
          </div>
          <p className="font-medium text-[7px] xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[8px] font-sm text-gray-500 text-center mt-2">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DailyEssentialsList;
