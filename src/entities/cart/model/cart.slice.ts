import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  count: number;
};

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
