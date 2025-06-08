import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@src/entities/cart';
import { OrderPage } from '../index.ts';

it('renders order page title if cart is not empty', () => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: {
      cart: {
        meals: {
          '1': {
            meal: {
              id: '1',
              meal: 'Burger',
              img: 'burger.png',
              instructions: 'instruction',
              price: 10,
              category: 'Breakfast',
              area: 'area',
            },
            quantity: 1,
          },
        },
        count: 1,
      },
    },
  });
  render(
    <Provider store={store}>
      <OrderPage />
    </Provider>,
  );
  expect(screen.getByText(/Finish your order/i)).toBeInTheDocument();
});
