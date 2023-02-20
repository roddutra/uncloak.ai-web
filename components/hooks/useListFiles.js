import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useListFiles() {
  const { data, error, isLoading } = useSWR(
    'https://uncloak-apitest2.mlee94.repl.co/listfiles/',
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
