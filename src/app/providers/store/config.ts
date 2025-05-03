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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
