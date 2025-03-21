"use client";

import React, { useEffect, useState } from "react";
import ExpenseItems from "./ExpenseItems";
import { IExpense } from "@/store/expenseSlice";

const DashboardScreen = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses");
      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }
      const result = await response.json();
      setExpenses(result);
      console.log("salam inja", expenses);
    };
    fetchExpenses();
  }, []);

  const income = expenses
    .filter((exp) => exp.expenseType === "ورودی")
    .reduce((acc, exp) => acc + exp.amount, 0);
  const expense = expenses
    .filter((exp) => exp.expenseType === "خروجی")
    .reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div className="flex flex-col items-center text-sm lg:text-md  w-full lg:flex lg:w-5/6 bg-white rounded ">
      <div className="flex w-full bg-gradient-to-l bg-sky-900 p-4 rounded text-white  ">
        <div className="flex flex-col w-full justify-between gap-6">
          <div className="flex items-center justify-between">
            <p>
              موجودی کل‌‌ :{" "}
              {expenses
                .reduce(
                  (acc, exp) =>
                    exp.expenseType === "ورودی"
                      ? acc + exp.amount
                      : acc - exp.amount,
                  0
                )
                .toLocaleString()}{" "}
              تومان
            </p>
            <p>اسفند ۱۴۰۳</p>
          </div>

          <div className="flex w-full justify-around items-center">
            <p className="text-green-500">
              ورودی : {income.toLocaleString()} تومان
            </p>
            <p className="text-red-500">
              خروجی : {expense.toLocaleString()} تومان
            </p>
          </div>
        </div>
      </div>
      <ExpenseItems />
    </div>
  );
};

export default DashboardScreen;
