import React from "react";

const CategoriesList = () => {
  const categories = [
    { id: 1, name: "Brand 1", img: "/categories/cloths.png" },
    { id: 2, name: "Brand 2", img: "/categories/redmi.png" },
    { id: 3, name: "Brand 3", img: "/categories/earphone.png" },
    { id: 4, name: "Brand 4", img: "/categories/eappliances.png" },
    { id: 5, name: "Brand 5", img: "/categories/furnitures.png" },
  ];

  return (
    <div className="flex justify-evenly mt-5">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="h-[70px] w-[70px] xl:h-[152px] xl:w-[152px] lg:h-[152px] lg:w-[152px] md:h-[120px] md:w-[120px] sm:h-[80px] sm:w-[80px]  rounded-full  shadow-lg  flex items-center text-center justify-center overflow-hidden bg-white p-2 xl:p-5 lg:p-5 md:p-3 sm:p-2"
        >
          {cat.img ? (
            <img
              src={cat.img}
              alt={cat.name}
              className="h-full w-full object-contain "
            />
          ) : (
            <span className="text-gray-300 text-sm font-medium text-center px-2">
              {cat.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
