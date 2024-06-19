import { useQuery, QueryFunction, QueryKey } from '@tanstack/react-query';

export type FetchOptions = {
  enabled?: boolean;
};

export type UseFetchTypes = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  options?: FetchOptions;
};
