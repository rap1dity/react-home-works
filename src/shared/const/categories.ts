export const MEAL_CATEGORIES = ['Dessert', 'Dinner', 'Breakfast'] as const;
export type MealCategory = (typeof MEAL_CATEGORIES)[number];
