import { v1Api } from '@src/shared/api/v1/instance.js';

export const mealsApi = {
  async getMeals(query) {
    return await v1Api.get('/meals', { query });
  }
}
