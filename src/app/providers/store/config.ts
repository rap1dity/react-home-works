import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@src/entities/cart';
import { authReducer } from '@src/entities/auth';
import { menuReducer } from '@src/entities/menu';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    menu: menuReducer,
  },
});
