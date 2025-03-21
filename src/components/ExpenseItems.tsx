"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

interface IExpense {
  _id: string;
  title: string;
  amount: number;
  date: string;
  expenseType: string;
}

const ExpenseItems = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("/api/expenses");
        if (!response.ok) {
          throw new Error("خطا در دریافت اطلاعات!");
        }
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        setError("❌ خطا در دریافت داده‌ها!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div className="flex w-full flex-col ">
      <div className="flex w-full border-b-2 items-center justify-center p-2">
        <p className="font-semibold text-gray-800 ">لیست مخارج </p>
        <div className="flex flex-col gap-2">
          {loading && <p>در حال بارگذاری...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      <ul className="flex flex-col gap-2 p-2">
        {expenses.map((item, index) => (
          <li
            className="flex w-full bg-white rounded-md border-2 border-gray-400 px-2 py-2"
            key={item._id}
          >
            <div className="flex items-center justify-between w-full  ">
              <div className="flex flex-col gap-2 lg:flex-row-reverse lg:w-full lg:justify-between ">
                <div className="flex gap-1  items-center  ">
                  <button
                    onClick={() => handleEditExpense(item)}
                    className="w-8 h-8 flex items-center justify-center bg-white text-yellow-500 border rounded-md hover:bg-yellow-500 hover:text-white transition"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleRemoveExpense(item._id)}
                    className="w-8 h-8 flex items-center justify-center bg-white text-red-500 border rounded-md hover:bg-red-500 hover:text-white transition"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
                <div className="flex items-center gap-1 lg:w-fit">
                  <span className="bg-purple-500 text-white w-5 h-6 pt-[2px] rounded-md text-center ">
                    {index + 1}
                  </span>
                  <p>{item.title}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between lg:w-42 ">
                <div className="border-b-2 border-gray-300">
                  <DatePicker
                    value={item.date}
                    calendar={persian}
                    locale={persian_fa}
                    inputClass="py-1  border-gray-600 rounded-lg w-[90px] text-center text-sm"
                  />
                </div>
                <p
                  className={`pt-2 w-fit  ${
                    item.expenseType === "خروجی"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.amount.toLocaleString()} {""} تومان
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseItems;
