import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import Expense from "../../../../../models/expense";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const { id } = params;

  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return NextResponse.json({ message: "هزینه پیدا نشد!" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "هزینه با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ خطای سرور در حذف هزینه:", error);
    return NextResponse.json(
      { message: "خطای سرور در حذف هزینه" },
      { status: 500 }
    );
  }
}
