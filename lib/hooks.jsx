import useSWR, {mutate} from "swr";

const fetcher = url => fetch(url).then(res => res.json());

//xport const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {

  const { data, mutate } = useSWR("/api/user", fetcher);
  // if data is not defined, the query has not completed
 
  const loading = !data;
  const user = data?.user;

  return [user, { mutate, loading }];
}

export function useRegistry() {

  const { data, mutate } = useSWR("/api/userRegistry", fetcher);
  // if data is not defined, the query has not completed
  console.log(data)
  const loading = !data;
  const user = data?.user;

  return [user, { mutate, loading }];
}
