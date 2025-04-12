export class apiFactory {
  constructor(settings) {
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
    const fullUrl = `${import.meta.env.VITE_MEAL_URL}${this.urlPrefix}${url}${searchParams ? `?${searchParams}` : ''}`;

    const response = await fetch(fullUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {}),
      },
      ...restConfig,
    });

    const data = await response.json();

    if (!response.ok) {
      console.log({ data, response });
    }

    return data;
  }
}
