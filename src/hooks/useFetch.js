import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=eb4ee8a67b6a7c8f81ddfb90c18287eb&query=${queryTerm}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.results || json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
