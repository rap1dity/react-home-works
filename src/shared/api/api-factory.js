import { throwApiError } from '@src/shared/api/throw-api-error.js';
import { authApi } from '@src/shared/api/v1/web/auth';

export class apiFactory {
  constructor(settings) {
    this.baseUrl = settings?.baseUrl || import.meta.env.VITE_BACKEND_URL;
    this.urlPrefix = settings?.urlPrefix || '';
  }

  async get(url, config) {
    return this.request('GET', url, config);
  }

  async post(url, body, config) {
    return this.request('POST', url, {
      ...config,
      body: JSON.stringify(body),
    });
  }

  async patch(url, body, config) {
    return this.request('PATCH', url, {
      ...config,
      body: JSON.stringify(body),
    });
  }

  async put(url, body, config) {
    return this.request('PUT', url, {
      ...config,
      body: JSON.stringify(body),
    });
  }

  async delete(url, config) {
    return this.request('DELETE', url, config);
  }

  async request(method, url, config = {}) {
    const { headers, query, ...restConfig } = config;

    const searchParams = new URLSearchParams(query).toString();
    const fullUrl = `${this.baseUrl}${this.urlPrefix}${url}${searchParams ? `?${searchParams}` : ''}`;

    const response = await fetch(fullUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {}),
      },
      ...restConfig,
    });

    const data = await response.json();

    if (response.status === 401) {
      const success = await this.tryRefreshToken();

      if (success) {
        return this.request(method, url, config);
      } else {
        throw new Error('Unauthorized and refresh token failed');
      }
    }

    if (!response.ok) {
      throwApiError({
        data,
        response,
      });
    }

    return data;
  }

  async tryRefreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      this.clearTokens();

      return false;
    }

    try {
      const { accessToken, refreshToken: newRefreshToken } = await authApi.refresh({ refreshToken });

      if (accessToken && newRefreshToken) {
        localStorage.setItem('accessToken', accessToken);

        localStorage.setItem('refreshToken', newRefreshToken);

        return true;
      }
    } catch (err) {
      console.error('Failed to refresh token', err);
    }

    this.clearTokens();

    return false;
  }

  clearTokens() {
    localStorage.removeItem('accessToken');

    localStorage.removeItem('refreshToken');
  }
}
