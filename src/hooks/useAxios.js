import { useState, useEffect } from "react";
import axiosInstance from "../api/PostApi";

const useAxios = (endpoint, method = "GET", body = null, dependencies = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance({
          url: endpoint,
          method: method,
          data: body,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, error, isLoading };
};

export default useAxios;
