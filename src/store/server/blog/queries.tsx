import axios from "@/api/axios";
import { useQuery } from "@tanstack/react-query";

const getAllBlog = async (id: number) => {
  const { data } = await axios.get(`blog?category=${id}`, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  return data;
};

export const useGetAllBlog = (id: number) => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: () => getAllBlog(id),
  });
};
