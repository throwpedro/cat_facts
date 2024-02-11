import { useInfiniteQuery } from "@tanstack/vue-query";
import axios from "axios";

export type CatFact = {
  fact: string;
  length: number;
};

type Link = {
  url: string;
  label: string;
  active: boolean;
};

type CatFactResponse = {
  current_page: number;
  data: CatFact[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

const fetchCats = async ({ pageParam = "1" }) => {
  return axios.get<CatFactResponse>(
    `https://catfact.ninja/facts?page=${pageParam}`,
  );

  // NOTE: Comment this in on the off change that the cat api is down.
  // Infinite scroll will be broken, but at least you can see the rest of the app doint *something*.
  // return axios.get('/src/api/mockData.json');
};

// NOTE: TanStack Query can look a little magically if you're not familiar with it.
// And some of the properties do indeed behave "magically", meaning they are somewhat implicit.
// https://tanstack.com/query/v4/docs/framework/vue/guides/infinite-queries
// The above link is a good resource on `infinite query`.
// Hovering over properties in VsCode will give a brief description on some of the properties.
// It's helpful to look at the consumer in src/views/CatFactListPage.vue#L70
// to see how the data is used.
export const useCatsQuery = () => {
  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: ({ pageParam }) => fetchCats({ pageParam }),
    initialPageParam: "1",
    getNextPageParam: (currentPage) => {
      if (currentPage.data.current_page === currentPage.data.last_page) {
        // NOTE: This is a little weird, but it's how you tell tan stack
        // that there are no more pages to fetch.
        // We don't return current page, nor `false`, nor `-1`, but `undefined`.
        // The javascript experience(tm).
        return undefined;
      }
      return String(currentPage.data.current_page + 1);
    },
    // NOTE: Setting staleTime to Infinity
    // tells tan stack to never refetch data.
    // This seems reasonable, since the cat api
    // returns "static" data.
    staleTime: Infinity,
  });
};
