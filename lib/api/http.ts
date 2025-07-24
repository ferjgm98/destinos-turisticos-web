"use client";

import { ApiError } from "next/dist/server/api-utils";

const NO_CONTENT_STATUS = 204;

export type HttpOptions = {
  soft?: boolean;
} & RequestInit;

export async function http<T = unknown>(
  path: string,
  params: HttpOptions = {}
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...params.headers,
    },
    ...params,
  });

  if (!res.ok && !params.soft) {
    const message = await res.text();
    throw new ApiError(res.status, message);
  }

  return res.status === NO_CONTENT_STATUS
    ? (undefined as unknown as T)
    : res.json();
}
