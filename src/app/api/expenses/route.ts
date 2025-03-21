import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import Expense from "../../../../models/expense";
import ExpenseModel from "../../../../models/expense";

export async function POST(req: Request) {
  await connectDB(); // اتصال به دیتابیس

  try {
    const { title, amount, date, expenseType } = await req.json();
    console.log("داده‌های دریافتی در API:", {
      title,
      amount,
      date,
      expenseType,
    });

    if (!title || !amount || !date || !expenseType) {
      return new Response(
        JSON.stringify({ error: "همه فیلدها الزامی هستند!" }),
        { status: 400 }
      );
    }

    const newExpense = new ExpenseModel({ title, amount, date, expenseType });
    await newExpense.save();

    return new Response(JSON.stringify(newExpense), { status: 201 });
  } catch (error) {
    console.error("Error ", error);

    return new Response(JSON.stringify({ error: "خطا در ذخیره اطلاعات!" }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectDB();
    const expenses = await Expense.find().sort({ date: -1 }); // مرتب‌سازی بر اساس تاریخ
    return NextResponse.json(expenses, { status: 200 });
  } catch (error) {
    console.error("❌ خطا در دریافت اطلاعات:", error);
    return NextResponse.json(
      { error: "خطا در دریافت اطلاعات!" },
      { status: 500 }
    );
  }
}
