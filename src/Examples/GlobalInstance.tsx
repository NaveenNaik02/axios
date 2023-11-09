import axios, { AxiosError } from "axios";
import "../axios/global";
import { useEffect } from "react";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await axios.get(productsUrl);
      const res2 = await axios.get(randomUserUrl);
      console.log(res1);
      console.log(res2);
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
  return <h2 className="text-center">global instance</h2>;
};

export default GlobalInstance;
