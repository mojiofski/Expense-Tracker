import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import Expense from "../../../../../models/expense";
import { NextRequest } from "next/server";

interface Context {
  params: Promise<{ id: string }>;
}
export async function DELETE(req: NextRequest, context: Context) {
  await connectDB();
  
  const resolvedParams = await context.params;
  const { id } = resolvedParams; // استخراج ID به‌صورت درست

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
