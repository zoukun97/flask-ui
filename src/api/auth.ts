import type { ApiResult, loginResponse, RegisterResponse } from "../types/api";

export const register = async (formData: FormData): Promise<ApiResult<RegisterResponse>> => {
  const url = 'http://127.0.0.1:5000/auth/register';
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (res.status !== 201) {
    const data = await res.json();
    return {
      ok: false,
      message: data.error
    }
  }

  const data: RegisterResponse = await res.json();
  return {
    ok: true,
    data
  }
}

export const login = async (formData: FormData): Promise<ApiResult<loginResponse>> => {
  const url = 'http://127.0.0.1:5000/auth/login';
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (res.status !== 200) {
    const data = await res.json();
    return {
      ok: false,
      message: data.error
    }
  }

  const data: loginResponse = await res.json();
  return {
    ok: true,
    data
  }
}
