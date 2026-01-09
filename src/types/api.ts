export type ApiResult<T> =  ApiSuccess<T> | ApiError;

type ApiSuccess<T> = {
  ok: true,
  data: T,
}

type ApiError = {
  ok: false,
  message: string,
}

export type RegisterResponse = {
  id: number,
  username: string,
}

export type loginResponse = {
  result: boolean,
  message: string,
}
