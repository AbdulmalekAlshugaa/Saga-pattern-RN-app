import { useQuery } from '@tanstack/react-query';
import { ProductApiRoute } from '../src/productApi';
import networkApi from '../../network/src/networkApi';

export const useGetProducts = () => {
    const staleTime = 60 * 1000; // 1 minute
    return useQuery([ProductApiRoute.getProducts], async () => {
        const response = await networkApi.get(ProductApiRoute.getProducts);
        if (!response.ok) {
            throw response;
        }
        return response.data;
    },
        { cacheTime: staleTime, staleTime }
    );
};
