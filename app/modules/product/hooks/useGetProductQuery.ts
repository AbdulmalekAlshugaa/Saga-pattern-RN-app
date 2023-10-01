import { useQuery } from '@tanstack/react-query';
import { ProductApiRoute, GetProducts } from '../src/productApi';

export async function useGetProducts() {
    return useQuery([ProductApiRoute.GET_PRODUCTS], async () => {
        const response: any = await GetProducts()
        return response.data;
    });
}
// TODO: add types to response .