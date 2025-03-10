import React from "react";
import { BsPerson } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const MobileMenu = () => {
  return (
    <div className="flex py-2 px-6 z-50 fixed bottom-0 right-0 left-0 lg:hidden">
      <div className=" flex flex-col items-center w-full bg-white rounded-lg ">
        <div className="p-2 bg-purple-500 absolute -top-4 rounded-full">
          <div className="bg-gray-600 text-white w-14 h-14 text-2xl font-semibold rounded-full flex items-center justify-center  ">
            +
          </div>
        </div>

        <div className="flex w-full items-center justify-between p-2">
          <div className="flex items-center justify-around w-1/2 ">
            <div className="flex flex-col items-center justify-center text-gray-700">
              <span className="text-3xl">
                <BsPerson />
              </span>
              <p className="text-sm">پروفایل</p>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-700 pl-8">
              <span className="text-3xl">
                <GoGoal />
              </span>
              <p className="text-sm">اهداف</p>
            </div>
          </div>
          <div className="flex items-center justify-around w-1/2  ">
            <div className="flex flex-col items-center justify-center text-gray-700 pr-8">
              <span className="text-3xl">
                <FaRegLightbulb />
              </span>
              <p className="text-sm">آموزش</p>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-700">
              <span className="text-3xl">
                <IoSettingsOutline />
              </span>
              <p className="text-sm">تنظیمات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
