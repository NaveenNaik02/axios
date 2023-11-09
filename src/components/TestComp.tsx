import { useState, useCallback, useEffect } from "react";
import axios from "axios";
const url = "https://course-api.com/react-store-products";

type User = {
  id: string;
  name: string;
  price: number;
  shipping: boolean;
  colors: string[];
};

const TestComp = () => {
  const [data, setData] = useState<User[]>([]);
  const fetchData = useCallback(async (signal: AbortSignal) => {
    try {
      const res = await axios.get(url, {
        signal,
      });
      setData(res.data);
      console.log(res.data, "response");
    } catch (err) {
      console.log(err);
      if (!axios.isCancel(err)) {
        console.log(err, "error at cleanup catch");
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal);
    return () => {
      console.log("cleanup function running");
      controller.abort();
    };
  }, [fetchData]);

  return (
    <div>
      <h1>Api Data...</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TestComp;
