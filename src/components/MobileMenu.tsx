"use client";

import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
import AddExpense from "./AddExpense";
const MobileMenu = () => {
  const [addExpenseModal, setAddExpenseModal] = useState(false);

  return (
    <>
      {}
      <div className="flex py-2 px-2 fixed bottom-0 right-0 left-0  lg:hidden">
        <div className=" flex flex-col items-center w-full bg-white rounded-lg ">
          <div className="p-2 absolute top-1 rounded-full ">
            <button
              aria-label="افزودن هزینه"
              onClick={() => setAddExpenseModal((prev) => !prev)}
              className="bg-purple-600 border-2 border-gray-600 text-white w-14 h-14 text-2xl font-semibold rounded-full flex items-center justify-center cursor-pointer "
            >
              +
            </button>
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
                <span className="text-3xl ">
                  <BsBarChartLine />
                </span>
                <p className="text-sm">نمودار</p>
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
      <AddExpense
        addExpenseModal={addExpenseModal}
        setAddExpenseModal={setAddExpenseModal}
      />
    </>
  );
};

export default MobileMenu;
