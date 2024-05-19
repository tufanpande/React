import { useEffect, useState } from "react";
import axios from "axios";

const UseEff = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios("https://dummyjson,com/posts");
        setPost(data.posts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return <div>{JSON.stringify(posts)}</div>;
};

export default UseEff;
