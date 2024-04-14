import { useEffect, useState } from "react";
import axios from 'axios'
export function useFetchData() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );

        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return { data, setData };
}
