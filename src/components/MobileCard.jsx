const MobileCard = () => {
  const mobiles = [
    {
      id: 1,
      name: "Samsung S24 FE ",
      spec: "8 GB + 128 GB",
      lprice: "59,999",

      offer: "34",

      img: "/mobilecard/galaxys24fe.jpg",
    },
    {
      id: 2,
      name: "Motorola G85 5G",
      spec: "8 GB + 128 GB",
      lprice: "20,999",

      offer: "24",
      img: "/mobilecard/motog85.jpg",
    },
    {
      id: 3,
      name: "OPPO K13 5G",
      spec: "6 GB + 128 GB",
      lprice: "16,999",

      offer: "23",
      img: "/mobilecard/oppo.jpg",
    },
    {
      id: 4,
      name: "realme P3 5G",
      spec: "6 GB + 128 GB",
      lprice: "19,999",

      offer: "20",
      img: "/mobilecard/realme.png",
    },
    {
      id: 5,
      name: "Apple iPhone 15",
      spec: "8 GB + 128 GB",
      lprice: "69,900",

      offer: "9",
      img: "/mobilecard/apple.jpg",
    },
  ];
  return (
    <div className="flex justify-between space-evenly mt-5">
      {mobiles.map((mobile) => (
        <div
          key={mobile.id}
          className="h-[120px] w-[80px] xl:h-[250px] xl:w-[185px] lg:h-[240px] lg:w-[185px] md:h-[170px] md:w-[140px] sm:h-[140px] sm:w-[110px]  rounded-lg shadow-sm bg-white overflow-hidden"
        >
          {/* Top Section - Image + Offer Badge */}
          <div className="relative flex justify-center items-center h-[62px] w-[80px] xl:h-[153px] xl:w-[185px] lg:h-[153px] lg:w-[185px] md:h-[92px] md:w-[140px] sm:h-[70px] sm:w-[110px] ">
            {/* Image placeholder */}
            <div className="h-full w-full bg-transparent rounded-tl-md rounded-tr-md   flex items-center justify-center text-gray-600">
              <img src={mobile.img} className="h-full w-full object-contain" />
            </div>

            {/* Offer Badge */}
            <div className="absolute top-0 right-0 w-[25px] h-[25px] xl:w-[42px] xl:h-[42px] lg:w-[42px] lg:h-[42px] md:h-[30px] md:w-[30px] sm:h-[28px] sm:w-[28px] bg-red-500 text-white text-[8px] xl:text-[13px] lg:text-[12px] md:text-[10px] sm:text-[10px] font-bold flex items-center justify-center rounded-tr-lg rounded-bl-lg">
              {mobile.offer} % <br /> OFF
            </div>
          </div>

          {/* Bottom Section - Details */}
          <div className="px-1 mt-1 text-center border-t-1 border-gray-300">
            <p className="text-[8.5px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] font-bold text-gray-800 ">
              {mobile.name}
            </p>
            <p className="text-[8px] xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-gray-500">
              {mobile.spec}
            </p>
            <p className="text-[8px] xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] font-bold text-green-600">
              <strike className="text-red-300">₹{mobile.lprice}</strike> ₹
              {parseInt(mobile.lprice.replace(/,/g, "")) -
                Math.round(
                  parseInt(mobile.lprice.replace(/,/g, "")) *
                    (parseInt(mobile.offer) / 100)
                )}
            </p>
            <p className="text-[8px] xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] text-gray-400">
              Save ₹
              {Math.round(
                parseInt(mobile.lprice.replace(/,/g, "")) *
                  (parseInt(mobile.offer) / 100)
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCard;
