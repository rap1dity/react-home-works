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

    console.log('%c[fetch request]', 'color: #4B71D6', method, fullUrl);
    if (headers) {
      console.log('headers:', headers);
    }

    if (query) {
      console.log('query:', query);
    }

    if (restConfig.body) {
      try {
        console.log('body:', JSON.parse(restConfig.body));
      } catch {
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

    if (response.ok) {
      console.log('%c[fetch response]', 'color: #5BB557', statusText);
      console.log('data:', data);
    } else {
      console.error('%c[fetch response]', 'color #E84945', statusText);
      console.error('error:', data);
    }

    this.saveToLocalStorage(fullUrl, data, response.status);

    return data;
  }

  saveToLocalStorage(path, body, status) {
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
}
