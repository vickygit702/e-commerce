import React from "react";
import CategoriesList from "./CategoriesList";
const Categories = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <p className="xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px]">
          SHOP FROM TOP CATEGORIES
        </p>
        <p className="xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px]">
          VIEW ALL
        </p>
      </div>
      <hr />
      <CategoriesList />
    </>
  );
};

export default Categories;
