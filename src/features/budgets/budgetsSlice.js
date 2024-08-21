import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      state.map((budget) => {
        if (budget.category === action.payload.category) return budget.amount = action.payload.amount;
        return budget
      })
    }
  }
})

export const { editBudget } = budgetsSlice.actions;

export const selectBudgets = (state) => state.budgets;

export default budgetsSlice.reducer;

