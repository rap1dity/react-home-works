import { v1WebApi } from '@src/shared/api/v1/instance.js';

export const authApi = {
  async login(body) {
    return await v1WebApi.post('/auth/login', body);
  },

  async refresh(body) {
    return await v1WebApi.post('/auth/refresh', body);
  }
}
