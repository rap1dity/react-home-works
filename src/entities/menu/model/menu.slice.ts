import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MEAL_CATEGORIES } from '@src/shared/const/categories.ts';

type MenuState = {
  category: string;
};

const initialState: MenuState = {
  category: MEAL_CATEGORIES[0],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
