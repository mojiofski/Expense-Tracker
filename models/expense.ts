import mongoose, { Schema } from "mongoose";

const ExpenseSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  expenseType: { type: String, enum: ["ورودی", "خروجی"], required: true },
});

const ExpenseModel =
  mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);

export default ExpenseModel;
