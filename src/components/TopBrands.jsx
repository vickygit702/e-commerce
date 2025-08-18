import React from "react";
import TopBrandsList from "./TopBrandsList";

const TopBrands = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <p className="xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px]">
          TOP BRANDS
        </p>
        <p className="xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px]">
          VIEW ALL
        </p>
      </div>
      <hr />
      <TopBrandsList />
    </>
  );
};

export default TopBrands;
