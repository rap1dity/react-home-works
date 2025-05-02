export type BaseResponseV1 = {
  code: number;
  message?: string[] | string;
  error: null | string;
};

export type ErrorResponseV1 = BaseResponseV1 & {
  error: string;
};

export type SuccessResponseV1<T = unknown> = BaseResponseV1 & {
  data: T;
};
