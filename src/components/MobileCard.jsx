const MobileCard = () => {
  return (
    <div className="flex justify-between space-evenly mt-5">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="h-[100px] w-[70px] xl:h-[250px] xl:w-[185px] lg:h-[240px] lg:w-[185px] md:h-[170px] md:w-[140px] sm:h-[140px] sm:w-[110px] border rounded-lg shadow-sm bg-white overflow-hidden"
        >
          {/* Top Section - Image + Offer Badge */}
          <div className="relative flex justify-center items-center h-[52px] w-[70px] xl:h-[153px] xl:w-[185px] lg:h-[153px] lg:w-[185px] md:h-[92px] md:w-[140px] sm:h-[70px] sm:w-[110px]">
            {/* Image placeholder */}
            <div className="h-full w-full bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
              Img
            </div>

            {/* Offer Badge */}
            <div className="absolute top-0 right-0 w-[25px] h-[25px] xl:w-[42px] xl:h-[42px] lg:w-[42px] lg:h-[42px] md:h-[30px] md:w-[30px] sm:h-[28px] sm:w-[28px] bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-tr-[10px] rounded-bl-[10px]">
              80% <br /> OFF
            </div>
          </div>

          {/* Bottom Section - Details */}
          <div className="px-2 mt-1">
            <p className="text-[7px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] font-bold text-gray-800 ">
              Redmi Note 12
            </p>
            <p className="text-[7px] xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-gray-500">
              4GB + 64GB
            </p>
            <p className="text-[7px] xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] font-bold text-green-600">
              ₹9,999
            </p>
            <p className="text-[7px] xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-gray-400">
              Save ₹2,000
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCard;
