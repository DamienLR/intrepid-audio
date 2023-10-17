import { useState, useEffect } from "react";

const useFetch = <T>(url: string) => {
  const [apiData, setApiData] = useState<null | T>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const convertedData = await res.json();
        setIsPending(false);
        setApiData(convertedData);
        setError(null);
      } catch (err) {
        setError(`${err}.`);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { apiData, isPending, error };
};

export default useFetch;
