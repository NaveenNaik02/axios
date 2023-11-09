import { useState } from "react";
import axios, { AxiosError } from "axios";

const url = "https://icanhazdadjoke.com/";

const Header = () => {
  const [joke, setJoke] = useState("random dad joke");
  const fetchDadJoke = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
    } catch (err: unknown) {
      const axiosError = err as AxiosError;
      if (axiosError.response?.data) {
        console.log("Error response data", axiosError.response.data);
      } else {
        console.log("Network error", axiosError.message);
      }
    }
  };
  return (
    <section className="section text-center">
      <button type="button" className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};

export default Header;
