import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const DashbordNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 ">
      <Link className="text-md lg:text-lg" href={"/"}>
        بازگشت
      </Link>
      <Logo />
    </div>
  );
};

export default DashbordNavbar;
