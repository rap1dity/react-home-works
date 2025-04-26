function isAuthError(value) {
  return value && typeof value.url === 'string' && value.url.startsWith('/_auth/local');
}

export function throwApiError(error) {
  let data;

  if (isAuthError(error.data)) {
    data = error.data.data;
  } else {
    data = error.data;
  }

  let message = data?.message;

  if (Array.isArray(message)) {
    message = message.join('. ');
  } else if (!message) {
    message = data?.error;
  }

  const finalMessage = message || 'Oops...';

  const customError = new Error(finalMessage);

  customError.cause = { statusCode: data?.code };

  throw customError;
}
