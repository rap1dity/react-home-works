import { v1MealApi } from '@src/shared/api/v1/instance.js';

export const mealsApi = {
  async getMeals(query) {
    return await v1MealApi.get('/meals', { query });
  }
}
