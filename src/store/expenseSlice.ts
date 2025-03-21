import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExpense {
  id: string;
  title: string;
  amount: number;
  date: string;
  expenseType: "ورودی" | "خروجی";
}
interface IExpenseState {
  expenses: IExpense[];
  totalBalanse: number;
  income: number;
  expense: number;
}

const initialState: IExpenseState = {
  expenses: [],
  totalBalanse: 0,
  income: 0,
  expense: 0,
};

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<IExpense>) => {
      state.expenses.push(action.payload);
      if (action.payload.expenseType === "ورودی") {
        state.income += action.payload.amount;
      } else {
        state.expense += action.payload.amount;
      }
      state.totalBalanse = state.income - state.expense;
    },

    removeExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (item) => item.id !== action.payload
      );
      state.totalBalanse = state.income - state.expense;
    },
  },
});

export const { addExpense } = expenseSlice.actions;
