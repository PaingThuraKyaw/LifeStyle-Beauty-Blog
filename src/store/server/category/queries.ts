import axios from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryProp } from "./type";

const categories = async () :Promise<CategoryProp[]> => {
  const { data } = await axios.get("category", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => categories(),
  });
};
