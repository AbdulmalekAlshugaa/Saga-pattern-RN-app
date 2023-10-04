import { useQuery } from "@tanstack/react-query";
import { ProductApiRoute } from "../src/productApi";
import networkApi from "../../network/src/networkApi";
import { errorEnum } from "../src/productConstants";

export const useGetProducts = () => {
  const staleTime = 60 * 1000; // 1 minute
  return useQuery(
    [ProductApiRoute.getProducts],
    async () => {
      try {
        const response = await networkApi.get(ProductApiRoute.getProducts);
        if (!response.ok) {
          throw "error";
        } else {
          return response.data;
        }
      } catch (error) {
        return "error";
      }
    },
    {
      enabled: true,
      cacheTime: staleTime,
      staleTime,
    }
  );
};
