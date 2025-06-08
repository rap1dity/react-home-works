import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { OrderMealCard } from '../ui/order-meal-card';
import { cartReducer } from '@src/entities/cart';

const meal = {
  id: '1',
  meal: 'Burger',
  img: '/img.jpg',
  instructions: '',
  price: 10,
  category: 'Fast Food',
  area: 'area',
};

const renderWithStore = (quantity = 1) => {
  const store = configureStore({ reducer: { cart: cartReducer } });
  render(
    <Provider store={store}>
      <OrderMealCard meal={meal} quantity={quantity} />
    </Provider>,
  );
  return store;
};

describe('OrderMealCard', () => {
  it('renders meal info and quantity', () => {
    renderWithStore(2);
    expect(screen.getByText(/Burger/i)).toBeInTheDocument();
    expect(screen.getByText(/\$ 20\.00 USD/i)).toBeInTheDocument();
    expect(screen.getByTestId('order-meal-quantity')).toHaveTextContent('2');
  });

  it('removes meal on button click', () => {
    const store = renderWithStore(1);
    fireEvent.click(screen.getByTestId('order-meal-remove'));
    expect(store.getState().cart.meals[meal.id]).toBeUndefined();
  });
});
