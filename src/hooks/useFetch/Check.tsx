import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
const url = "https://jsonplaceholder.typicode.com/todos/1";
const Check = () => {
  const [data, isDataLoading] = useFetch(url);
  const [stringData, setStringData] = useState("");
  useEffect(() => {
    setStringData(JSON.stringify(data));
  }, [data]);
  if (isDataLoading) {
    return <h1>Loading...</h1>;
  }
  return <div className="Check">{stringData}</div>;
};
export default Check;
