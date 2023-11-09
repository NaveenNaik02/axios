import { AxiosError } from "axios";
import authFetch from "../axios/interceptors";
import { useEffect } from "react";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const res = await authFetch("/react-store-products");
      console.log(res);
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
  return <h2 className="text-center">interceptors</h2>;
};

export default Interceptors;
