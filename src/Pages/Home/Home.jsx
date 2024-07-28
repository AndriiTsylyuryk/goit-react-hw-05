import React, { useEffect, useState } from "react";
import { fetchFilms } from "../../API";
import FilmList from "../../components/FilmList/FilmList";
import s from "./Home.module.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  console.log(location);
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
      <h1 className={s.main}>Trending today</h1>
      <FilmList state={location} films={films} />
    </div>
  );
};

export default Home;
