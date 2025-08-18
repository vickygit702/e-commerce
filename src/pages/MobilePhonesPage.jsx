import React from "react";

const MobilePhonesPage = () => {
  return (
    <div className="flex flex-col justify-between items-center space-evenly align-center py-2 px-2">
      {/* Header */}
      <div className="lg:h-[50px] w-full bg-gray-300 text-center py-2 font-bold">
        MOBILE PHONES
      </div>

      {/* Top cards */}
      <div className="w-full flex flex-row space-evenly justify-between my-4">
        <div className="h-[150px] w-[330px] bg-gray-300 rounded-lg">
          offer 1
        </div>
        <div className="h-[150px] w-[330px] bg-gray-300 rounded-lg">
          offer 2
        </div>
        <div className="h-[150px] w-[330px] bg-gray-300 rounded-lg">
          offer 3
        </div>
      </div>

      {/* Main content area */}
      <div className="w-full flex gap-3">
        {/* Sidebar */}
        <div className="w-[257px] h-[1060px] bg-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Filter</h2>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>(1000 - 5000)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>(5000 - 10000)</span>
              </label>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Brands</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>Realme</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>Redmi</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>Samsung</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>iPhone</span>
              </label>
            </div>
          </div>

          {/* Add more filters if needed */}
          <div>
            <h3 className="font-medium mb-2">RAM</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>4 GB</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>8 GB</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span>12 GB</span>
              </label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full flex-1 bg-gray-200 p-4 rounded-lg grid grid-cols-3 justify-items-center space-evenly">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-100 w-[185px] h-[240px]  rounded-lg shadow-lg flex flex-col p-[5px]"
            >
              {/* Top part (image placeholder) */}
              <div className=" h-[160px] w-full bg-gray-200 rounded-t-lg">
                div-1
              </div>
              {/* Bottom part (text placeholder) */}
              <div className="h-[70px] bg-white rounded-b-lg">div-2</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobilePhonesPage;
