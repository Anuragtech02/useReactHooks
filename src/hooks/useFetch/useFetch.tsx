import { useState, useEffect, useCallback } from "react";
export const useFetch = (url: string) => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsDataLoading(false);
  }, [url]);
  useEffect(() => {
    getData();
  }, [getData]);
  return [data, isDataLoading];
};
