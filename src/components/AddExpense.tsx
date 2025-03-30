"use client";

import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import moment from "moment-jalaali";
import useSWR, { mutate } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface IAddExpenseModal {
  addExpenseModal: boolean;
  setAddExpenseModal: (open: boolean) => void;
}

const AddExpense = ({
  addExpenseModal,
  setAddExpenseModal,
}: IAddExpenseModal) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(moment().format("jYYYY/jMM/jDD"));
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [expenseType, setExpenseType] = useState("خروجی");
  const { error } = useSWR("/api/expenses", fetcher);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const expenseData = { title, amount: Number(amount), date, expenseType };
    try {
      if (
        !title.trim() ||
        !amount.trim() ||
        !date.trim() ||
        !expenseType.trim()
      ) {
        setErrorMessage("لطفا اطلاعات را به صورت صحیح وارد کنید");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expenseData),
      });

      if (!response.ok) {
        throw new Error("❌ ارسال اطلاعات ناموفق بود!");
      }

      const result = await response.json();
      console.log("✅ داده با موفقیت ذخیره شد:", result);

      // بروزرسانی لیست هزینه‌ها به کمک mutate
      mutate("/api/expenses"); // لیست هزینه‌ها به‌روز می‌شود

      setTitle("");
      setAmount("");
      setErrorMessage("");
      setExpenseType("خروجی");
      setAddExpenseModal(false);
    } catch (error) {
      setErrorMessage("❌ خطا در ارسال اطلاعات!");
      console.error("❌ خطا:", error);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <p className="text-red-500">خطا در بارگذاری داده‌ها</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // اطمینان از اینکه مقدار ورودی فقط شامل اعداد و نقطه اعشار است
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <>
      {addExpenseModal && (
        <div className="fixed inset-0 flex flex-col justify-center items-center w-full text-sm bg-gray-800 opacity-95 z-50 lg:hidden ">
          <div className="flex flex-col w-full max-w-xs mx-auto bg-white rounded shadow-2xl p-4 gap-4 z-[999]">
            <div className="flex w-full items-center justify-between">
              <p>افزودن </p>
              <div className="flex items-center gap-2 ">
                <p>تاریخ :</p>
                <DatePicker
                  value={date}
                  onChange={(date) => setDate(date?.format("YYYY/MM/DD") || "")}
                  calendar={persian}
                  locale={persian_fa}
                  minDate={
                    new Date(new Date().setDate(new Date().getDate() - 1))
                  }
                  inputClass="py-1 border border-gray-600 rounded-lg w-[90px] text-center text-sm"
                />
              </div>
            </div>

            <form className="flex flex-col  gap-2 " onSubmit={handleSubmit}>
              <div className="flex w-full items-center justify-center gap-4">
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="transactionType"
                    value="ورودی"
                    checked={expenseType === "ورودی"}
                    onChange={() => {
                      setExpenseType("ورودی");
                      console.log(expenseType);
                    }}
                  />
                  ورودی
                </label>
                <label className="flex gap-1 ">
                  <input
                    type="radio"
                    name="transactionType"
                    value="خروجی"
                    checked={expenseType === "خروجی"}
                    onChange={() => {
                      setExpenseType("خروجی");
                      console.log(expenseType);
                    }}
                  />
                  خروجی
                </label>
              </div>
              <input
                type="text"
                placeholder="عنوان دخل و یا خرج را وارد کنید"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-600 rounded-md text-sm px-2 py-2 focus:outline-none focus:border focus:border-blue-400"
              />
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={amount}
                  placeholder="مقدار به تومان "
                  onChange={handleChange}
                  className="w-1/2 border border-gray-600 rounded-md text-sm px-2 py-2 focus:outline-none focus:border focus:border-blue-400"
                />
                <p>
                  {amount
                    ? Number(amount).toLocaleString() + " تومان"
                    : "۰ تومان"}
                </p>
              </div>

              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}

              <div className="flex gap-1 mt-2">
                <button
                  disabled={loading}
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer"
                >
                  {loading ? "در حال ارسال..." : "افزودن"}
                </button>
                <button
                  onClick={() => setAddExpenseModal(false)}
                  className="py-2 px-4 bg-red-500 text-white rounded-md cursor-pointer "
                >
                  بستن
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default AddExpense;
