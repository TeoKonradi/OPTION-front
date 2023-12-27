import {
  UseQueryOptions,
  UseQueryResult,
  useMutation as useMutationOriginal,
  useQuery as useQueryOriginal,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { HTTPError } from "ky";

type QueryKey = readonly unknown[];

export interface ApiError {
  message: string;
  status: number;
}

export const useQuery: <
  TQueryFnData = unknown,
  TError = ApiError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "initialData"
  > & {
    initialData?: () => undefined;
  }
) => UseQueryResult<TData, TError> = useQueryOriginal;

export const useMutation: <
  TData = unknown,
  TError = ApiError,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
) => UseMutationResult<TData, TError, TVariables, TContext> = useMutationOriginal;

export interface PagedResponse<T> {
  amount: number;
  data: T;
  pages: number;
}

export interface ApiError<T = { error: string }> extends HTTPError {
  data?: T;
}
