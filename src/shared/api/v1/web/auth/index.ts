import { v1WebApi } from '@src/shared/api/v1/instance.ts';
import { SuccessResponseV1 } from '@src/shared/api/v1/types.ts';

export type LoginRTO = SuccessResponseV1<{
  accessToken: string;
  refreshToken: string;
}>;

export type RefreshRTO = LoginRTO;

export type LoginDTO = {
  username: string;
  password: string;
};

export type RefreshDTO = {
  refreshToken: string;
};

export const authApi = {
  async login(body: LoginDTO): Promise<LoginRTO> {
    return await v1WebApi.post('/auth/login', body);
  },

  async refresh(body: RefreshDTO): Promise<RefreshRTO> {
    return await v1WebApi.post('/auth/refresh', body);
  },
};
