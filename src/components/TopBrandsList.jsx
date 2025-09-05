import React from "react";

const brands = [
  {
    id: 1,
    name: "APPLE",
    logo: "/brands/applelogo.png",
    discount: "Up to 50% Off",
    img: "/brands/redmi.png",
  },
  {
    id: 2,
    name: "VIVO",
    logo: "/brands/vivologo.png",
    discount: "Up to 40% Off",
    img: "/brands/redmi.png",
  },
  {
    id: 3,
    name: "SAMSUNG",
    logo: "/brands/redmilogo.png",
    discount: "Up to 60% Off",
    img: "/brands/redmi.png",
  },
];

const TopBrandsList = () => {
  return (
    <div className="flex justify-between space-evenly mt-5">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="w-[135px] h-[100px] xl:w-[315px] xl:h-[168px] lg:w-[315px] lg:h-[168px] md:w-[240px] md:h-[140px] sm:w-[200px] sm:h-[120px]   rounded-lg shadow-md flex items-center justify-between space-evenly bg-white"
        >
          {/* Left Section */}
          <div className="flex flex-col items-center gap-2 w-1/2 ">
            {/* <h3 className="text-[12px] xl:text-xl lg:text-lg md:text-md sm:text-sm font-semibold text-gray-800">
              {brand.name}
            </h3> */}

            {/* Logo */}
            <div className="w-[40px] h-[40px] xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] flex items-center justify-center">
              <img
                src={brand.logo}
                className="max-h-full max-w-full object-contain p-1"
              />
            </div>

            {/* Discount */}
            <p className="text-[8px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[11px] font-bold text-red-700">
              {brand.discount}
            </p>
          </div>

          {/* Right Section - Product Image */}
          <div className="px-0 py-0 md:px-2 md:py-2 w-1/2 h-full flex items-center justify-center">
            <img src={brand.img} className="h-full w-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBrandsList;
