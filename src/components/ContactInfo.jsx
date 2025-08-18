import React from "react";
import { Phone, Mail } from "lucide-react"; // icons

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 w-1/2 text-center justify-center">
      {/* Website name */}
      <h1 className="text-[13px] xl:text-xl lg:text-lg md:text-md font-bold text-gray-800 text-center">
        eMart
      </h1>

      {/* Contact Us Section */}
      <div>
        <p className="text-[10px] xl:text-[16px]  lg:text-[14px] md:text-[12px] sm:text-[10px] font-bold mb-2 text-gray-700 underline underline-offset-2">
          Contact Us
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="text-[10px] xl:text-[16px]  lg:text-[14px] md:text-[12px] sm:text-[10px] flex items-center justify-center gap-2">
            <Mail size={15} className="text-green-500" />
            <span>Email: info@emart.com</span>
          </li>
          <li className="text-[10px] xl:text-[16px]  lg:text-[14px] md:text-[12px] sm:text-[10px] flex items-center justify-center gap-2">
            <Phone size={15} className="text-blue-500" />
            <span>Phone: +91 91234 56789</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
