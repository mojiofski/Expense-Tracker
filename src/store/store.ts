import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expenseSlice";

export const store = configureStore({
  reducer: {
    expenseSlice: expenseSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;