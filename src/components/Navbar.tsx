import React from "react";
import MobileSearchbar from "./MobileSearchbar";
import UserProfileDesktop from "./UserProfileDesktop";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex ">
      {/* Mobile Navbar */}
      <div className="flex w-full items-center justify-between bg-white  shadow-md px-2 lg:hidden">
        {/* Searchbar */}
        <div className="flex w-1/2">
          <MobileSearchbar />
        </div>
        {/* Logo */}
        <Logo />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between w-full bg-white px-4 shadow-lg">
        {/* profile */}
        <div>
          <UserProfileDesktop />
        </div>
        {/* Logo */}
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
