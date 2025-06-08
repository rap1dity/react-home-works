import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { OrderForm } from '../ui/order-form';
import { cartReducer } from '@src/entities/cart';

const renderForm = (cartCount = 1) => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: { cart: { meals: {}, count: cartCount } },
  });
  render(
    <Provider store={store}>
      <OrderForm />
    </Provider>,
  );
  return store;
};

describe('OrderForm', () => {
  it('does not render order button if cart is empty', () => {
    renderForm(0);
    expect(screen.queryByRole('button', { name: /order/i })).toBeNull();
  });

  it('submits form with valid fields and resets cart', () => {
    const store = renderForm(1);
    fireEvent.change(screen.getByPlaceholderText(/some street/i), { target: { value: 'Test St' } });
    fireEvent.change(screen.getByPlaceholderText(/some house/i), { target: { value: '42' } });
    fireEvent.click(screen.getByRole('button', { name: /order/i }));
    expect(store.getState().cart.count).toBe(0);
  });
});
