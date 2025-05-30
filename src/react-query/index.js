import { useQuery } from '@tanstack/react-query'
import { getFoodById, getFood, getFoodByCategory, getFoodById2 } from "@/api/fireStore";

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

export const useFoodById2 = () => {
  return useQuery({
    queryKey: ['hotlist'],
    queryFn: getFoodById2,
    staleTime: 0,          // 資料一過期馬上 refetch
    cacheTime: 0,          // 完全不快取
    refetchOnMount: true,  // 每次進入頁面都 refetch
  });
};
