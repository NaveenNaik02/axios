import axios, { AxiosError } from "axios";
import { useEffect } from "react";

const FirstRequest = () => {
  const url = "https://course-api.com/react-store-products";
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data, "data");
    } catch (err: unknown) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        console.log("Error response data", axiosError.response.data);
      } else {
        console.log("Network error", axiosError.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};

export default FirstRequest;
