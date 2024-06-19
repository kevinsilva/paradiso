import { useQuery } from '@tanstack/react-query';
import { UseFetchTypes } from '../../utils/types';

export const useFetch = ({ queryKey, queryFn, options }: UseFetchTypes) => {
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
    ...options,
  });

  return { data, isLoading, error };
};
