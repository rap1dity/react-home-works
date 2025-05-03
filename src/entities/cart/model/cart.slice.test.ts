import { describe, it, expect } from 'vitest';
import { addToCart, cartReducer, removeFromCart } from './cart.slice.ts';

const meal = {
  id: '1',
  meal: 'Meal',
  img: '/meal.jpg',
  instructions: '',
  area: 'area',
  price: 5.5,
  category: 'Dinner',
};

describe('cartSlice', () => {
  it('добавляет новый товар в корзину', () => {
    const initialState = { meals: {}, count: 0 };

    const result = cartReducer(initialState, addToCart({ meal, count: 2 }));

    expect(result.meals['1'].meal).toEqual(meal);

    expect(result.meals['1'].quantity).toBe(2);

    expect(result.count).toBe(2);
  });

  it('увеличивает количество уже добавленного товара', () => {
    const state = {
      meals: {
        '1': { meal, quantity: 2 },
      },
      count: 2,
    };

    const result = cartReducer(state, addToCart({ meal, count: 3 }));

    expect(result.meals['1'].quantity).toBe(5);
    expect(result.count).toBe(5);
  });

  it('удаляет товар по id', () => {
    const state = {
      meals: {
        '1': { meal, quantity: 2 },
      },
      count: 2,
    };

    const result = cartReducer(state, removeFromCart('1'));

    expect(result.meals['1']).toBeUndefined();
    expect(result.count).toBe(0);
  });
});
