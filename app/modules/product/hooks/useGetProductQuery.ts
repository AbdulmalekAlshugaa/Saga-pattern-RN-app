import { useQuery } from "@tanstack/react-query";
import { ProductApiRoute } from "../src/productRoutes";
import networkApi from "../../network/src/networkApi";

export const useGetProducts = () => {
  const staleTime = 60 * 1000; // 1 minute time is modifiable and it base on business requirements
  return useQuery({
    queryKey: [ProductApiRoute.getProducts],
    queryFn: async () => {
      try {
        const response = await networkApi.get(ProductApiRoute.getProducts);
        if (!response.ok) {
          return "error";
        } else {
          return response.data;
        }
      } catch (error: any) {
        return "error";
      }
    },
    cacheTime: staleTime,
    staleTime,
    refetchOnReconnect: true,
    useErrorBoundary: true,
  });
};
