import { useEffect, useState } from "react";
import useQueryParam from "./use-queryParam";

const useFilter = (category: string): [string, (value: string) => void] => {
  const [queryParam, setQuery] = useQueryParam();
  const currentCategory = queryParam["categoryId"];
  const [filter, setfilter] = useState(currentCategory || category);

  const setFilter = (value: string) => {
    setfilter(value);
    setQuery({ categoryId: value });
  };

  useEffect(() => {
    setfilter(currentCategory || category);
  }, [category, currentCategory]);

  return [filter, setFilter];
};

export default useFilter;
