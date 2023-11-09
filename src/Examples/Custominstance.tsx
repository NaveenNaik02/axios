import axios, { AxiosError } from "axios";
import authFetch from "../axios/custome";
import { useEffect } from "react";

const randomUserUrl = "https://randomuser.me/api";

const Custominstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await authFetch("/react-store-products");
      console.log(res1);
      const res2 = await axios.get(randomUserUrl);
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
  return <h2 className="text-center">custom instance</h2>;
};

export default Custominstance;
