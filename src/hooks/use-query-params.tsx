import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const removeQueryParam = (param: string) => {
    queryParams.delete(param);
  };

  const setQueryParam = (param: string, value: string | number) => {
    queryParams.set(param, `${value}`);
  };

  return { removeQueryParam, setQueryParam, queryParams: queryParams };
};
