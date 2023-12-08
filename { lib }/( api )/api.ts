import ky from "ky";

export { useMutation, useQuery } from "./apiTypes";
import type { ApiError, PagedResponse } from "./apiTypes";
export type { ApiError, PagedResponse };

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
export const PREFIX_URL = `${API_URL}/api/v1`;
console.log(PREFIX_URL);

export const api = ky.create({
  hooks: {
    beforeError: [
      async (error) => {
        if (400 <= error.response.status && error.response.status <= 499) {
          (error as ApiError).data = await error.response.json();
        }
        return error;
      },
    ],
  },
  prefixUrl: PREFIX_URL,
  retry: 0,
});

console.log("API_URL:", API_URL);
console.log("PREFIX_URL:", PREFIX_URL);
