import React from "react";
import { Star } from "lucide-react"; // optional icons library (lucide-react)

const ProductDetail = () => {
  return (
    <div className="w-full h-[770px] mx-auto bg-gray-200 rounded-lg p-6 flex gap-6">
      {/* Left Side */}
      <div className="flex flex-col items-center w-1/3">
        {/* Product Image */}
        <div className="w-120 h-100 bg-white rounded-lg m-2"></div>

        {/* Buttons */}
        <button className="bg-green-200 w-full py-3 rounded-lg font-bold mb-3">
          ADD CART
        </button>
        <button className="bg-green-300 w-full py-3 rounded-lg font-bold">
          BUY NOW
        </button>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-800"></div>

      {/* Right Side */}
      <div className="flex-1">
        {/* Product Info */}
        <h2 className="text-2xl font-bold">REDMI 10 PRO</h2>
        <p className="text-gray-700">4GB - 128GB</p>

        {/* Price */}
        <div className="my-3">
          <span className="text-xl font-semibold mr-2">RS. 17000</span>
          <span className="text-gray-500 line-through">18000</span>
        </div>

        {/* Specifications */}
        <ul className="space-y-1 text-sm font-medium mb-4">
          <li>4 GB RAM | 128 GB ROM</li>
          <li>Expandable up to 2 TB</li>
          <li>16.94 cm Full HD</li>
          <li>50MP + 2MP | 16MP Front</li>
          <li>6000mAh Battery</li>
          <li>7 Gen Processor</li>
          <li>1 Year Manufacturer Warranty</li>
        </ul>
        <div className=" flex items-start gap-2">
          <div className="bg-blue-100  p-3 rounded-md mt-3">blue</div>
          <div className="bg-red-100 p-3 rounded-md mt-3">red</div>
          <div className="bg-orange-100 p-3 rounded-md mt-3">orange</div>
        </div>
        {/* Ratings & Reviews */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              <Star fill="yellow" />
              <Star fill="yellow" />
              <Star fill="yellow" />
              <Star fill="yellow" />
              <Star /> {/* Empty star */}
            </div>
            <span className="text-sm font-medium">
              260 Ratings and 100 Reviews
            </span>
          </div>

          {/* Review placeholders */}
          <div className="bg-red-100 h-10 rounded-lg mt-3"></div>
          <div className="bg-red-100 h-10 rounded-lg mt-3"></div>
          <div className="bg-red-100 h-10 rounded-lg mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
