import React from "react";
import MobileCard from "./MobileCard";

const SmartPhones = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <p className="xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px]">
          DEALS ON SMARTPHONES
        </p>
        <p className="xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px]">
          VIEW ALL
        </p>
      </div>
      <hr />
      <MobileCard />
    </>
  );
};

export default SmartPhones;
