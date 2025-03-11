import React from "react";
import UserProfileDesktop from "./UserProfileDesktop";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex ">
      {/* Mobile Navbar */}
      <div className="flex w-full h-[64px] items-center justify-between bg-white  shadow-md px-2 lg:hidden">
        {/* Searchbar */}
        <div className="flex w-1/2">
          {user ? (
            <div>
              <UserProfileDesktop />
            </div>
          ) : (
            <div>
              <Link
                href={"/login"}
                className="bg-purple-500 text-white px-3 py-1 rounded-md"
              >
                ورود | ثبت نام
              </Link>
            </div>
          )}
        </div>
        {/* Logo */}
        <Logo />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between w-full h-[64px] bg-white px-4 shadow-lg">
        {/* profile */}
        {user ? (
          <div>
            <UserProfileDesktop />
          </div>
        ) : (
          <div>
            <Link
              href={"/login"}
              className="bg-purple-500 text-white px-3 py-1 rounded-md"
            >
              ورود | ثبت نام
            </Link>
          </div>
        )}
        {/* Logo */}
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
