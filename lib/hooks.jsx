import useSWR, {mutate} from "swr";

export const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {
  const { data, mutate } = useSWR("/api/user", fetcher);
  // if data is not defined, the query has not completed
  const loading = !data;
  const user = data?.user;
  //console.log(user);
  return [user, { mutate, loading }];
}

export function useRegistry() {

  const { data, mutate } = useSWR("/api/userRegistry", fetcher);
  // if data is not defined, the query has not completed
  console.log(data)
  const loading = !data;
  const registryData = data;

  return [registryData, { mutate, loading }];
}
