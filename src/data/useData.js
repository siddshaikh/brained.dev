import axios from "axios";
import { useEffect, useState } from "react";

const useData = (limit = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const skip = (currentPage - 1) * limit;
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        setData(response.data.products || []);
        setTotal(response.data.total);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, limit]);

  const totalPages = Math.ceil(total / limit);

  return {
    data,
    loading,
    error,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

export default useData;
