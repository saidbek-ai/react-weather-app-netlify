import React from "react";

const Footer = () => {
  return (
    <div className="mx-4 bg-white bg-opacity-10 backdrop-blur-lg shadow-md p-2 rounded mb-4">
      <p className="text-white text-center px-2 py-2 font-light drop-shadow-md">
        &copy; Weather App {new Date().getFullYear()} by Saidbek Khudayberdiev
      </p>
    </div>
  );
};

export default Footer;
