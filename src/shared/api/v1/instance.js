import { apiFactory } from '@src/shared/api/api-factory.js';

export const v1WebApi = new apiFactory({ urlPrefix: '/web/api/v1'});

export const v1MealApi = new apiFactory({ baseUrl: import.meta.env.VITE_MEAL_URL, urlPrefix: '/api/v1'});
