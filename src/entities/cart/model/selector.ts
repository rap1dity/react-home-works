import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/app/providers/store/config.ts';

export const selectCartMeals = createSelector(
  (state: RootState) => state.cart.meals,
  (meals) => Object.values(meals),
);
