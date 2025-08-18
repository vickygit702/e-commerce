import React from "react";
import ContactInfo from "./ContactInfo";
import CustomerServices from "./CustomerServices";

const Contact = () => {
  return (
    <div className="h-[160px] xl:h-[200px] lg:h-[200px] md:h-[170px] sm:h-[170px] flex justify-between space-evenly  shadow-md rounded-lg bg-gray-200 text-white">
      {/* Left Section - Website Info + Contact */}
      <ContactInfo />

      {/* Right Section - Customer Services */}
      <CustomerServices />
    </div>
  );
};

export default Contact;
