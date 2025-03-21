import React from "react";
import Logo from "./Logo";
import MobileSearchbar from "./MobileSearchbar";

const DashbordNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-2 ">
      <MobileSearchbar />
      <Logo />
    </div>
  );
};

export default DashbordNavbar;
