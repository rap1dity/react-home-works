import { authApi } from '@src/shared/api/v1/web/auth';

export const login = async (body) => {
  try {
    const { data } = await authApi.login(body);

    return data;
  } catch (err) {
    console.log(err);
  }
}