import React from "react";
import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ films }) => {
  return (
    <div>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link className={s.link} to={`/movies/${film.id.toString()}`}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
