import { useEffect, useState } from "react";

export const useFetch = (apiURL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};
