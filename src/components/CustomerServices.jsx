import React from "react";

const links = [
  { id: 1, name: "About Us", url: "/about" },
  { id: 2, name: "Terms & Conditions", url: "/terms" },
  { id: 3, name: "FAQ", url: "/faq" },
  { id: 4, name: "Privacy Policy", url: "/privacy" },
  { id: 5, name: "Cancellation & Return Policy", url: "/cancellation" },
];

const CustomerServices = () => {
  return (
    <div className=" flex flex-col  w-1/2 text-center justify-center">
      <p className="xl:text-[16px]  lg:text-[14px] md:text-[12px] sm:text-[10px] font-bold mb-2 text-gray-700 underline underline-offset-2">
        Customer Services
      </p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li
            key={link.id}
            className="xl:text-[16px]  lg:text-[14px] md:text-[12px] sm:text-[10px]"
          >
            <a
              href={link.url}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerServices;
