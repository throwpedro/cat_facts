import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

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
};

export const useCatsQuery = () => {
    return useQuery({
        queryKey: ['cats'],
        queryFn: () => axios.get<CatFactResponse>(`https://catfact.ninja/facts`),
        select: (response) => response.data,
        // NOTE: Setting staleTime and gcTime essentially
        // tells tan stack to never refetch data.
        // This seems reasonable, since the cat api essentially
        // returns static data.
        staleTime: Infinity,
        gcTime: Infinity,
    });
};
