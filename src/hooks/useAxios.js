import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const result = await Axios.get("https://api.first.org/data/v1/teams");
      setResponse(result.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { response, isLoading, error };
};

export default useAxios;
