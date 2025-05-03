import { throwApiError } from '@src/shared/api/throw-api-error.ts';
import { authApi } from '@src/shared/api/v1/web/auth';
import { HttpMethod } from '@src/shared/types/http-method.type.ts';
import { store } from '@src/app/providers/store/config';
import { setUnauthorized } from '@src/entities/auth';

type ApiFactorySettings = {
  baseUrl?: string;
  urlPrefix?: string;
};

type RequestConfig = Omit<RequestInit, 'body'> & {
  body?: BodyInit;
  query?: Record<string, unknown>;
};

export class apiFactory {
  private readonly baseUrl: string;
  private readonly urlPrefix: string;

  constructor(settings: ApiFactorySettings) {
    this.baseUrl = settings?.baseUrl || import.meta.env.VITE_BACKEND_URL;
    this.urlPrefix = settings?.urlPrefix || '';
  }

  async get<TResponse = unknown>(url: string, config?: RequestConfig): Promise<TResponse> {
    return this.request(HttpMethod.GET, url, config);
  }

  async post<TResponse = unknown, TInput extends Record<string, unknown> = Record<string, unknown>>(
    url: string,
    body: TInput,
    config?: RequestConfig,
  ): Promise<TResponse> {
    return this.request(HttpMethod.POST, url, {
      ...config,
      body: JSON.stringify(body),
    });
  }

  async patch<TResponse = unknown, TInput extends Record<string, unknown> = Record<string, unknown>>(
    url: string,
    body: TInput,
    config?: RequestConfig,
  ): Promise<TResponse> {
    return this.request(HttpMethod.PATCH, url, {
      ...config,
      body: JSON.stringify(body),
    });
  }

  async put<TResponse = unknown, TInput extends Record<string, unknown> = Record<string, unknown>>(
    url: string,
    body: TInput,
    config?: RequestConfig,
  ): Promise<TResponse> {
    return this.request(HttpMethod.PUT, url, {
      ...config,
      body: JSON.stringify(body),
    });
  }

  async delete<TResponse = unknown>(url: string, config?: RequestConfig): Promise<TResponse> {
    return this.request(HttpMethod.DELETE, url, config);
  }

  async request<TResponse>(method: HttpMethod, url: string, config: RequestConfig = {}): Promise<TResponse> {
    const { headers, query, ...restConfig } = config;

    const searchParams = new URLSearchParams();

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        searchParams.append(key, String(value));
      }
    }

    const fullUrl = `${this.baseUrl}${this.urlPrefix}${url}${searchParams ? `?${searchParams}` : ''}`;

    console.log('%c[fetch request]', 'color: #4B71D6', method, fullUrl);

    if (headers) {
      console.log('headers:', headers);
    }

    if (query) {
      console.log('query:', query);
    }

    if (restConfig.body) {
      if (typeof restConfig.body === 'string') {
        console.log('body:', JSON.parse(restConfig.body));
      } else {
        console.log('body:', restConfig.body);
      }
    }

    const response = await fetch(fullUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {}),
      },
      ...restConfig,
    });

    const data = await response.json();

    const statusText = `${response.status} ${response.statusText}`;

    if (response.status === 401) {
      const success = await this.tryRefreshToken();

      if (success) {
        return this.request(method, url, config);
      } else {
        throw new Error('Unauthorized and refresh token failed');
      }
    }

    if (response.ok) {
      console.log('%c[fetch response]', 'color: #5BB557', statusText);
      console.log('data:', data);
    } else {
      console.error('%c[fetch response]', 'color #E84945', statusText);
      console.error('error:', data);

      throwApiError({
        data,
        response,
      });
    }

    this.saveToLocalStorage(fullUrl, data, response.status);

    return data;
  }

  saveToLocalStorage(path: string, body: unknown, status: number) {
    try {
      const payload = {
        path,
        body,
        status,
      };

      localStorage.setItem('last-response', JSON.stringify(payload));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }
  }

  async tryRefreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      this.clearTokens();

      store.dispatch(setUnauthorized());

      return false;
    }

    try {
      const { data } = await authApi.refresh({ refreshToken });

      const { accessToken, refreshToken: newRefreshToken } = data;

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
