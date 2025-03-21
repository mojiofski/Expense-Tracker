import Image from "next/image";
import React from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const SlideMenu = () => {
  return (
    <div className="hidden lg:flex flex-col w-1/6 p-2 rounded bg-white">
      {/* User Profile */}
      <div className="flex flex-col items-center justify-center p-4 border-b-2 border-gray-300 ">
        {/* Profile Image */}
        <div className="relative w-15 h-15 rounded-full overflow-hidden">
          <Image
            src={"/images/UnknownPerson.jpg"}
            alt=""
            sizes="100%"
            priority
            fill
            className="object-cover"
          />
        </div>
        {/* Profile Info */}
        <span className="mt-1">user email</span>
        <p className="text-sm text-gray-600">اطلاعات بیشتر</p>
        <button>
          <RiArrowDownDoubleFill />
        </button>
      </div>
      {/* Menu */}
      <div className="flex flex-col w-full gap-2 p-4">
        <p className="">اهداف</p>
        <p className="">نمودار</p>
        <p className="">تنظیمات</p>
      </div>
    </div>
  );
};

export default SlideMenu;
