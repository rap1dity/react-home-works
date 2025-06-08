import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OrderMealList } from '../ui/order-meal-list';
import { Provider } from 'react-redux';
import { store } from '@src/app/providers/store/config.ts';

const meals = [
  {
    meal: {
      id: '1',
      meal: 'Burger',
      img: 'picture.png',
      instructions: 'instruction 1',
      price: 10,
      category: 'Breakfast',
      area: 'area',
    },
    quantity: 1,
  },
  {
    meal: {
      id: '2',
      meal: 'Pizza',
      img: 'picture.png',
      instructions: 'instruction 2',
      price: 15,
      category: 'Dinner',
      area: 'area',
    },
    quantity: 2,
  },
];

describe('OrderMealList', () => {
  it('renders all meals in list', () => {
    render(
      <Provider store={store}>
        <OrderMealList meals={meals} />
      </Provider>,
    );
    expect(screen.getByText(/Burger/i)).toBeInTheDocument();
    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('order-meal-card')).toHaveLength(2);
  });
});
