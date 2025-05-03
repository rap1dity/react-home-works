import { ErrorResponseV1 } from '@src/shared/api/v1/types.ts';

type AuthError = {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  stack: string;
  data: ErrorResponseV1;
};

type FetchErrorData = ErrorResponseV1 | AuthError;

type FetchError = {
  data: FetchErrorData;
  response: Response;
};

function isAuthError(value: FetchErrorData): value is AuthError {
  return typeof value === 'object' && 'url' in value && value.url.startsWith('/_auth/local');
}

export function throwApiError(error: FetchError): never {
  let data: ErrorResponseV1;

  if (isAuthError(error.data)) {
    data = error.data.data;
  } else {
    data = error.data as ErrorResponseV1;
  }

  let message = data?.message;

  if (Array.isArray(message)) {
    message = message.join('. ');
  } else if (!message) {
    message = data?.error;
  }

  const finalMessage = message || 'Oops...';

  const customError: Error & { cause?: unknown } = new Error(finalMessage);

  customError.cause = { statusCode: data?.code };

  throw customError;
}
