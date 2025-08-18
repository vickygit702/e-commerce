// import React from "react";

// const CategoriesList = () => {
//   return (
//     <div className="flex justify-evenly gap-6 mt-5">
//       {[1, 2, 3, 4, 5].map((item) => (
//         <div
//           key={item}
//           className="h-[152px] w-[152px] rounded-full shadow-md border flex items-center text-center justify-center overflow-hidden bg-gray-100"
//         >
//           <img
//             src="" // put actual image url
//             alt="BRAND"
//             className="h-full w-full object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoriesList;

import React from "react";

const CategoriesList = () => {
  const categories = [
    { id: 1, name: "Brand 1", img: "" },
    { id: 2, name: "Brand 2", img: "" },
    { id: 3, name: "Brand 3", img: "" },
    { id: 4, name: "Brand 4", img: "" },
    { id: 5, name: "Brand 5", img: "" },
  ];

  return (
    <div className="flex justify-evenly gap-6 mt-5">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="xl:h-[152px] xl:w-[152px] lg:h-[152px] lg:w-[152px] md:h-[120px] md:w-[120px] sm:h-[80px] sm:w-[80px] rounded-full shadow-md border flex items-center text-center justify-center overflow-hidden bg-gray-100"
        >
          {cat.img ? (
            <img
              src={cat.img}
              alt={cat.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-gray-600 text-sm font-medium text-center px-2">
              {cat.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
