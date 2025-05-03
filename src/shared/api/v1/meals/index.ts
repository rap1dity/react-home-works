import { v1MealApi } from '@src/shared/api/v1/instance.ts';
import { Meal } from '@src/shared/types/meals.type.ts';

export type GetMealsRTO = Meal[];

export const mealsApi = {
  async getMeals(query: Record<string, unknown>): Promise<GetMealsRTO> {
    return await v1MealApi.get('/meals', { query });
  },
};
