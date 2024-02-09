import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useQueryParam = () => {
  const [query, setQuery] = useState<Record<string, string>>({});
  const [searchParam, setSearchParam] = useSearchParams();
  const queryParam = Object.fromEntries([...searchParam]);

  useEffect(() => {
    setSearchParam((prev) => ({
      ...Object.fromEntries(prev),
      ...query,
    }));
  }, [query, setSearchParam]);

  return [queryParam, setQuery] as const;
};

export default useQueryParam;
