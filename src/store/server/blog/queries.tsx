import axios from "@/api/axios";
import { params } from "@/type/type";
import { getParam } from "@/util/getParams";
import { useQuery } from "@tanstack/react-query";

const getAllBlog = async (payload : params) => {      
  const params = getParam(payload)
  const { data } = await axios.get(`blog?${params}`, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  return data;
};

export const useGetAllBlog = (payload : params) => {  
  return useQuery({
    queryKey: ["blog",payload],
    queryFn: () => getAllBlog(payload),
  });
};
