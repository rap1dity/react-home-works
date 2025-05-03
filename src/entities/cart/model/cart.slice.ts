import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Meal } from '@src/shared/types/meals.type.ts';

type CartItem = {
  meal: Meal;
  quantity: number;
};

type CartState = {
  meals: Record<string, CartItem>;
  count: number;
};

const initialState: CartState = {
  meals: {},
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ meal: Meal; count: number }>) => {
      const { meal, count } = action.payload;

      const existingItem = state.meals[meal.id];

      if (existingItem) {
        existingItem.quantity += count;
      } else {
        state.meals[meal.id] = {
          meal,
          quantity: count,
        };
      }

      state.count += count;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.meals[action.payload];

      if (existingItem) {
        state.count -= existingItem.quantity;

        delete state.meals[action.payload];
      }
    },
    resetCart: (state) => {
      state.meals = {};
      state.count = 0;
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
