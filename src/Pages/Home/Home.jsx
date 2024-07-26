import React, { useEffect, useState } from "react";
import { fetchFilms } from "../../API";

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchFilms();
        setFilms(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
    </div>
  );
};

export default Home;
