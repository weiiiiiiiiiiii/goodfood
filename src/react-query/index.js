import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts, getProductsByCategory} from "@/api/fireStore";

export const useProducts = () => {
   return useQuery({
    queryKey: ['food'], 
    queryFn: getProducts
  });
 };
 
 export const useProductsByCategory = (category) => {
    return useQuery({
      queryKey: [category], 
      queryFn: getProductsByCategory
    });
  };
 
 export const useProductById = (foodid) => {
   return useQuery({
    queryKey: [foodid], 
    queryFn: getProductById
  });
 };