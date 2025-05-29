import { useQuery } from '@tanstack/react-query'
import { getFoodById, getFood, getFoodByCategory} from "@/api/fireStore";

export const useFood = () => {
   return useQuery({
    queryKey: ['breakfast'], 
    queryFn: getFood
  });
 };
 
 export const useFoodByCategory = (category) => {
    return useQuery({
      queryKey: [category], 
      queryFn: getFoodByCategory
    });
  };
 
 export const useFoodById = (foodid) => {
   return useQuery({
    queryKey: [foodid], 
    queryFn: getFoodById
  });
 };