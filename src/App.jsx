import { useState } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SmartPhones from "./components/SmartPhones";
import Categories from "./components/Categories";
import TopBrands from "./components/TopBrands";
import DailyEssentials from "./components/DailyEssentials";
import Contact from "./components/Contact";
import MobilePhonesPage from "./pages/MobilePhonesPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <NavBar />
      <div className="w-full h-full md:px-[5px] lg:px-[10px] xl:px-[233px] sm:px-[5px] px-[5px]">
        <div className="py-[15px] xl:py-[40px] lg:py-[20px] md:py-[20px] sm:py-[15px]">
          <Banner />
        </div>
        <div>
          <SmartPhones />
        </div>
        <div className="py-[15px] xl:py-[40px] lg:py-[20px] md:py-[20px] sm:py-[15px]">
          <Categories />
        </div>
        <div>
          <TopBrands />
        </div>
        <div className="py-[15px] xl:py-[40px] lg:py-[20px] md:py-[20px] sm:py-[15px]">
          <DailyEssentials />
        </div>
        <div>
          <Contact />
        </div>
      </div>
      {/* <ProductDetail /> */}
      {/* <MobilePhonesPage /> */}
      <footer className="bg-blue-800 text-white text-center py-2 xl:py-4 lg:py-3 md:py-2">
        <p className="font-medium text-[10px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px]">
          &copy; 2025 eMart. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
